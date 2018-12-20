const express = require('express');
const passport = require('passport');
const router = express.Router();
const { Keypair } = require('stellar-base');
const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');

router.post('/login', (req,res)=>{
    const {privateKey} = req.body;
    const publicKey = Keypair.fromSecret(privateKey).publicKey();
    User.findOne({publicKey})
        .then(user=>{
            if(!user){
                return res.status(404).json({email: 'User not found'});
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


router.get('/current', passport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log(req.user);
    res.json({
        id: req.user.id,
        name: req.user.name,
        avatar: req.user.avatar,
        publicKey: req.user.publicKey,
        sequence: req.user.sequence,
        balance: req.user.balance,
        energy: req.user.energy,
        transactions: req.user.transactions,
    });
})



module.exports= router;