const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/User');

//use localhost:3000/users/ to get all the users
router.get('/', (req,res)=>{
  User.find((err,docs)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(docs);
    }
  });
});
//fetch individual id
router.get('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(404).send('No records found');

  User.findById(req.params.id,(err,doc)=>{
    if(err){
      console.log(err);
    }else{
      res.send(doc);
    }
  })
})
//enter a new user
router.post('/',(req,res)=>{
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    // imageName: req.body.imageName
  });
  User.find({email: user.email},(err,doc)=>{
    if(err){
      console.log(err);
    }else if(doc.length){
      res.send('Email already exists');
    }else{
      user.save((err,doc)=>{
        if(err){
          console.log(err);
        }else{
          res.send(doc);
        }
      })
    }
  })

})
//modify a user with id
router.put('/id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(404).send('No records found');

  var user = new {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    // imageName: req.body.imageName
  };

  User.findByIdAndUpdate(req.params.id,{$set:user},{new:true},(err,doc)=>{
    if(err){
      console.log(err);
    }else{
      res.send(doc);
    }
  });
});
//delete a user
router.delete('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(404).send('No records found');

  User.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(err){
      console.log(err);
    }else{
      res.send(doc);
    }
  });
})
module.exports = router;
