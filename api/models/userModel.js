const {Schema, mongoose} = require('mongoose')


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
  img: {
    type: String,
    required: false,
  },
  regno: {
    type: String,
  },
  mobno: {
    type: String,
    required: false,
  },
  block: {
    type: String,
    required: false,
  },
  sex:{
    type:String,
    required:true
  },
  roomno:{
    type:Number
  },
  empno:{
    type:Number,
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
});

module.exports= mongoose.model("User", userSchema)