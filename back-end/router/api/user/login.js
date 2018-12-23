const express = require('express');
const router = express.Router();
const User = require('../../../models/users');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');

router.post('/', (req,res)=>{
    //req.body.secretKey <- from login react
    const{publicKey} = req.body;
    console.log(publicKey);
    User.findOne({publicKey: publicKey.publicKey})
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
            jwt.sign(payload, keys.secretOrkeys,{expiresIn:3600},(err,token)=>{
                res.json({
                    success: true,
                    token: 'Bearer '+token,
                })
            })
        })
        .catch(err =>console.log(err));
})


module.exports = router;