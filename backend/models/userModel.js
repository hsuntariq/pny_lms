import mongoose from 'mongoose'



const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender:{
    type:Boolean,
    required:true
  },
  role:{
    type:String,
    default:'user'
  },
  otp:{
    type:Number,
    default:null
  }
},{
    timestamps:true
});

export const user = mongoose.model('User',userSchema)