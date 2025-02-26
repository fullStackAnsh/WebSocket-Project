import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import cloudinary from "../lib/cloudinary.js"
export const getUserForSidebar = async(req,res) => {
    try{
    const loggedInUser = req.user._id;
    const filteredUser=await User.find({_id:{$ne:loggedInUser}}).select("-password");
    res.status(200).json(filteredUser);
}
catch(error){
    res.status(400).json(error);
}
}
export const getMessages = async(req,res) => {
    try {
        const {id:chatId}=req.params;
        const myId=req.user._id;
        const messages = await Message.find(
            {
                $or:[
                    {senderId:myId,receiverId:chatId},
                    {senderId:chatId,receiverId:myId},
                ],
            }
        ); 
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json(error);
    }
}
export const sendMessage = async(req,res) => {
    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const {senderId} = req.user._id;
        let imageUrl;
        if(image){
          const uploadResponse = await cloudinary.uploader.upload(image);
          imageUrl= uploadResponse.secure_url;
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        });
       await newMessage.save();
        //socketio functionality
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(400).json(error);
    }
}