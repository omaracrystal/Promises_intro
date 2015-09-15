var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var User = require('../models/user.js');


//** Write the rest of this Crud app using promises instead of callbacks. **//

//get all users
router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});

//post all users
router.post('/users', function(req, res, next) {
 new User(req.body)
    .saveQ()
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});

//get one user
router.get('/user/:id', function(req, res, next) {
  User.findByIdQ(req.params.id)
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});

//update one user
router.put('/user/:id', function(req, res, next) {
  var update = (req.body);
  var options = {new: true};
  User.findByIdAndUpdateQ(req.params.id, update, options)
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});

//delete one user
router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemoveQ(req.params.id)
    .then(function (data) { res.json(data) })
    .catch(function (err) { res.send(err) })
    .done();
});


module.exports = router;
