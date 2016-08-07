const userManager = require("../entities/userManager");
const dbMessages = require("../constants/dbMessages");
const express = require('express');
const router = express.Router();

var UM = new userManager();

router.route('/users')
    .get(function(req,res){
        var users = UM.getAll();
        res.json(users);
    })
    .post(function(req, res){
        UM.add(req.body);
        res.json(dbMessages.USER_CREATED);
    });

router.route('/users/:id')
    .get(function(req,res){
        var user = UM.getById(req.params.id);
        if (!user) {
            res.status(200).json(dbMessages.USER_NOT_FOUND);
        } else {
            res.json( user );
        }
    });

module.exports = router;