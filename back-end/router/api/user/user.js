const express = require('express');
const passport = require('passport');
const AllTx = require('../../../models/alltx.js');
const router = express.Router();
const { Keypair } = require('stellar-base');
const User = require('../../../models/users');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');
const {
    decode } = require('../../../lib/transaction/v1');

router.post('/login', (req,res)=>{
    const {publicKey} = req.body;
    User.findOne({publicKey: publicKey})
        .then(user=>{
            if(!user){
                return res.status(404).json({user: 'User not found'});
            }
            const payload = {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                publicKey: user.publicKey,
                sequence: user.sequence,
                balance: user.balance,
                energy: user.energy,
                transactions: user.transactions,
            }
            jwt.sign(payload,
                keys.secretOrkeys, 
                {expiresIn:3600},
                (err,token)=>{
                    res.json({
                        success:true,
                        token: 'Bearer ' + token,
                    })
            } );
        })
        .catch(err =>console.log(err));
})


router.get('/:publicKey', (req,res)=>{
    AllTx.find({publicKey:req.params.publicKey}).sort({height:-1})
        .then(transactions=>{
           // console.log(transactions.length)
           let arrResult = [];
            for(let i = 0 ; i < transactions.length; i++){
                const def = decode(Buffer.from(transactions[i].tx, 'base64'));
                if(def.account === req.params.publicKey){
                    arrResult.push(def);
                }
            }
            res.json({
                arrResult
            });
        })
        .catch(err=>res.status(404).json({msg:"No user found with that publickey"}));
    
})



module.exports= router;