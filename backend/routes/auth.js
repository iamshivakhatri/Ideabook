const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Shiva@intern';

 //let's see what happens.

//ROUTE 1: create a User using: POST "/api/auth/createuser" it doesn't require login
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //if there are errors return bad request and the errors
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }


    
    //check whether user with same email exist already

    try {
      let user = await User.findOne({ email: req.body.email });
      console.log("Hi", user);
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user:{
            id:user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);


      // .then(user => res.json(user))
      // .catch(err=> {console.log(err)
      // res.json({error: 'please enter a unique value for email', message: err.message})});
      // //res.send(req.body); same thing like then(user => res.json(user))
      success = true;
      res.json({success, authToken});
      //catch a new error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);


//ROUTE2: create a User using: POST "/api/auth/login" it doesn't require login
router.post(
    "/login",
    [
      
      body("email", "Enter a valid email").isEmail(),
      body("password", "password can't be blank").exists()
     
    ],
    async (req, res) => {
      let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {email, password} = req.body;
        try{
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({error: "please try to login with correct credentials"});
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({error: "please try to login with correct credentials"});
            }
            const data = {
                user:{
                    id:user.id
                }
              }
              const authToken = jwt.sign(data, JWT_SECRET);
              success = true;
              res.json({authToken, success })
        }catch(error)  {
            console.log(error.message);
      res.status(500).send("Internal server occured");

        }


    })

//ROUTE3: Get loggedin User Detailsusing: POST "/api/auth/getuser" LOGIN required
    router.post('/getuser', fetchuser, async (req, res) => {
        try{
            userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);

        }catch(error){
            console.log(error.message);
         res.status(500).send("Internal server occured");
        }

        })


module.exports = router;
