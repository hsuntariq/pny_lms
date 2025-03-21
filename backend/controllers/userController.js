import  asyncHandler  from 'express-async-handler';
import { user } from '../models/userModel.js';
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'


const generateOTP = () => {
    const randomNumber = Math.random() * 100000
    const floor = Math.floor(randomNumber)
    return floor
}

export const registerUser = asyncHandler(async(req,res)=>{
    const {name,username,email,password,gender} = req.body
    if(!name || !email || !username|| !password|| !gender){
        res.status(400)
        throw new Error('Please enter all the fields')
    }

    // check if the username or email is already present
    
    const checkUserName = await user.findOne({username})
    if(checkUserName){
        res.status(401)
        throw new Error('Username already exists')
    }
    // check if the email is already present

    const checkEmail = await user.findOne({email})
    if (checkEmail) {
      res.status(401);
      throw new Error("Email already exists");
    }

    // encrypt the password

    const hashedPassword = await bcrypt.hash(password,10)





    // store the user in the database

    const createdUser = await user.create({
      name,
      username,
      email,
      password:hashedPassword,
      gender,
      otp:generateOTP()
    });

    res.send(createdUser)




    // send the otp in the mail
    
   const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
   })


//    mail options

const mailOptions = {
  from: process.env.MAIL_USER,
  to: email,
  subject: "OTP verifiction",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTP Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f8ff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="color: #4CAF50; text-align: center; font-size: 28px;">Welcome to Our Service!</h2>
    <p style="font-size: 16px; color: #333; text-align: center;">We’re excited to have you on board. Use the OTP below to verify your email address.</p>
    
    <div style="font-size: 36px; font-weight: bold; color: #ff6600; text-align: center; letter-spacing: 8px; padding: 20px 0; border-radius: 10px; background-color: #fff4e5;">
      {{OTP}}
    </div>

    <p style="font-size: 14px; color: #666; text-align: center;">This OTP is valid for <span style="color: #ff6600;">10 minutes</span>. Please do not share it with anyone.</p>

    <a href="#" style="display: inline-block; margin: 20px auto; background-color: #4CAF50; color: white; padding: 12px 24px; font-size: 16px; text-decoration: none; border-radius: 5px;">Verify Now</a>
    
    <p style="font-size: 14px; color: #999; text-align: center;">If you didn’t request this email, please contact our support team immediately.</p>
    
    <footer style="margin-top: 30px; text-align: center; color: #bbb; font-size: 12px;">
      &copy; 2025 Your Company. All rights reserved.
    </footer>
  </div>
</body>
</html>
`,
};




transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log('mail sent')
    }
})











})