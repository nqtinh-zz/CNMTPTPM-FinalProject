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

// call after post
router.post('/call-after-post', (req,res)=>{
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
//get current 
router.get('/current', passport.authenticate('jwt',{session:false}),(req,res)=>{
    User.findOne({publicKey:req.user.publicKey})
        .then(user=>{
            res.json({
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                publicKey: user.publicKey,
                sequence: user.sequence,
                balance: user.balance,
                energy: user.energy,
                transactions: user.transactions,
            });
        })
    
})

router.get('/:publicKey', (req,res)=>{
    User.findOne({publicKey:req.params.publicKey})
        .then(user=>{
           // console.log(transactions.length)

            res.json({
                user
            });
        })
        .catch(err=>res.status(404).json({msg:"No user found with that publickey"}));
    
})



module.exports= router;