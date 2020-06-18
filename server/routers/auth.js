const express = require('express')
const router = express.Router()
const mongoose =  require('mongoose')
const User =mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requestlogin')

router.get('/protected',requireLogin,(req,res) =>{
    res.send("hello")
})

router.post('/signup',(req,res)=>{
  //  console.log(req.body)
  const {name,email,password} = req.body
  if(!email || !password || !name){
      res.status(422).json({error:"please add all fields"})
  }
  User.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        res.status(408).json({error:"Email already exists please sign in"})
      }

      bcrypt.hash(password,12)
      .then(hashedpassword =>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
    
            user.save()
            .then(user=>{
                res.json({message: user.name+" was sucessfully added"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
      console.log(err)
  })
 //res.json({message:"successfully added"})
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return   res.status(422).json({error:"please enter all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser =>{
        console.log(savedUser)
        if(!savedUser){
            return res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                return res.json({token})

            }
            else{
                return res.status(422).json({error:"email or password invalid"})
            }
        })
        .catch(err => {
            console.log(err)
        })      
    })
    .catch(err => {
        console.log(err)
    })   
})

module.exports = router