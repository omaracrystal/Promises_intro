var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var User = require('../models/user.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  User.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

router.post('/users', function(req, res, next) {
  newUser = new User({
    name: req.body.name
    });
  newUser.save(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


router.put('/user/:id', function(req, res, next) {
        var update = {
        name: req.body.name
      };
      User.findByIdAndUpdate(req.params.id, update, function(err, data){
          if(err){
            res.json({'message': err});
          } else {
            res.json(data);}
          });
});


router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});



module.exports = router;
