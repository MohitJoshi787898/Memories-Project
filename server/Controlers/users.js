import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';

export const signUp= async (req, res) => {
  // res.status(200).json("hiii")
  const {first_name, last_name, email, password, confirm_password} = req.body;
  try {
    const existingUser=await user.findOne({email});
    console.log(existingUser)
    if(existingUser)return res.status(400).json({message:'User already exists'});
    if(password!==confirm_password)return res.status(400).json({message:'Password not match'});
    const hasPassword=await bcrypt.hash(password,12);
    const result=await user.create({email,password:hasPassword,name:`${first_name} ${last_name}`});
    const token=jwt.sign({email:existingUser.email,id:existingUser._id },'test',{expiresIn:'1h'});
    res.status(200).json({result,token});
  }
  catch (err) {
    res.status(500).json({message:'somthing went wrong'});
  }
}


export const signIn= async (req, res) => {
  
  try{
    const {email,password} = req.body;
    
    const User = await user.findOne({email});
    if(!user){
      return res.status(404).json({message: 'User not found'});
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if(!isMatch){
      return res.status(401).json({message: 'Invalid credentials'});
    }
    const token = await jwt.sign({email: User.email,id:User._id}, "test",{expiresIn: '1h'});

        res.status(200).json({result:{_id:User._id,name:User.name},token});
    }
    catch(err){
        // console.log(err)
        res.status(500).json({message: 'Internal server error'});
    }
}
