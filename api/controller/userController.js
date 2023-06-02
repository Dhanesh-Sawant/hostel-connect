// const User = require('../schema/userSchema');

// exports.register = async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.send("New user created");
//   } catch (err) {
//     res.status(500).send("Something went wrong!" + err.message);
//   }
// };

// exports.login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) {
//       return res.status(404).send("User not found!!");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')

exports.deleteUser = async(req,res, next)=>{
    const user = await User.findById(req.params.id) 
    
        if(req.userId!==user._id.toString())
        {
            return next(createError(403,"You can delete only your own account"))      
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted!!")
}
