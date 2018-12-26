const express = require('express');
const passport = require('passport');
const AllTx = require('../../../models/alltx.js');
const router = express.Router();
const base32 = require('base32.js');
const { Keypair } = require('stellar-base');
const User = require('../../../models/users');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');
const {decode, PlainTextContent,ReactContent } = require('../../../lib/transaction/v1');
const { sign, encode } = require('../../../lib/transaction/index');
const axios = require('axios');

router.post('/login', (req, res) => {
    const { publicKey } = req.body;
    User.findOne({ publicKey: publicKey })
        .then(user => {
            if (!user) {
                return res.status(404).json({ user: 'User not found' });
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
                following: user.following
            }
            console.log(payload);
            jwt.sign(payload,
                keys.secretOrkeys,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token,
                    })
                });
        })
        .catch(err => console.log(err));
})

// call after post
router.post('/call-after-post', (req, res) => {
    const { publicKey } = req.body;
    User.findOne({ publicKey: publicKey })
        .then(user => {
            if (!user) {
                return res.status(404).json({ user: 'User not found' });
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
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token,
                    })
                });
        })
        .catch(err => console.log(err));
})
//get current 
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ publicKey: req.user.publicKey })
        .then(user => {
            res.json({
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                publicKey: user.publicKey,
                sequence: user.sequence,
                balance: user.balance,
                energy: user.energy,
                transactions: user.transactions,
                following: user.following
            });
        })

})

router.get('/:publicKey', (req, res) => {
    User.findOne({ publicKey: req.params.publicKey })
        .then(user => {
            // console.log(transactions.length)

            res.json({
                user
            });
        })
        .catch(err => res.status(404).json({ msg: "No user found with that publickey" }));

})

//Follow
router.post('/reaction', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { text, type, reaction, hash, privatekey, sequence } = req.body;
    let context;
    let content={};
    console.log(req.body)
    switch (Number(type))    {
        case 1:
            context = {
                type:1,
                text
            };
            content = PlainTextContent.encode(context);
            break;
        case 2:
            context = {
                type:2,
                reaction: Number(reaction)
            }
            content = ReactContent.encode(context);
            break;
    }
    console.log(content);
    const tx = {
        version: 1,
        sequence: Number(sequence) + 1,
        memo: Buffer.alloc(0),
        operation: 'interact',
        params: {
            object: hash,
            content
        }
    }
    sign(tx, privatekey);
    const etx = encode(tx).toString('hex');
    console.log(etx);
         axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
           .then(data => console.log("good"));

})


module.exports = router;