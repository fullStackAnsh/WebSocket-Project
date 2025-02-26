import User from "../models/user.model.js"
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";
export const signup = async(req,res) => {
    const {fullName,email,password,profilePic}=req.body;
    try {
        if(!fullName || !password || !email){res.status(400).json({message:"All fields required"})}
        if(password.length<6){
            res.status(400).json({message:"Password length less than 6 "});

        }
        const user=await User.findOne({email});
        if(user){res.status(400).json({message:"Email already exists"})}
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser = new User({
            fullName,email,password:hashedPassword
        });
        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(200).json({
                id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,
            });
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export const login = async(req,res) => {
    const {email,password}= req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
          res.status(400).json({message:"invalid credentials"});
        }
        const passwordValid=bcrypt.compare(password,user.password);
        if(!passwordValid){
            res.status(400).json({message:"invalid credentials"});
        }
        generateToken(user._id,res);
        res.status(200).json({
            id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
        });
    } catch (error) {
        res.status(400).json({message:"Internal error while logging in"});
    }
}
export const logout = (req,res) => {
    try {
        res.cookie("token","");
        res.status(200).json({message:"logout successful"});
    } catch (error) {
        res.status(400).json({message:"internal error while logging out"});
    }
}
export const updateProfile = async (req, res) => {
    try {
        console.log("Received File:", req.file);

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        

      /*   const userId = req.user?._id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        } */

         const filePath = path.resolve(req.file.path); 

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "Inbox",
            use_filename: true,
            timeout:60000
        });

        console.log("Cloudinary Upload Result:", result);

        // Delete local file after upload
       

      /*  const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: result.secure_url }, // Store Cloudinary URL in DB
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);*/
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: error });
    }
  }; 
export const checkAuth = (req,res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(400).json(error);
    }
}