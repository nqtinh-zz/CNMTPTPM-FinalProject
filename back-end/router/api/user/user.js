const express = require('express');
const passport = require('../../../config/passport');
const router = express.Router();
router.get('/current', passport.authenticate('jwt',{session:false}),(req,res)=>{
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