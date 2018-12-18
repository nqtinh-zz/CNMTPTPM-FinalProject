const express = require('express');
const axios = require('axios');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const getSequence = require('../../../lib/getSequence');
const { Keypair } = require('stellar-base');
const router = express.Router();
const User = require('../../../models/User');

router.post('/', (req,res)=>{
    //req.body.secretKey <- from login react
    const publicKey = Keypair.fromSecret(req.body.secretKey).publicKey();
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
            jwt.sign(payload, keys.secretOrkeys,{expiresIn:3600},(err,token)=>{
                res.json({
                    success: true,
                    token: 'Bearer '+token,
                })
            })
        })
})
