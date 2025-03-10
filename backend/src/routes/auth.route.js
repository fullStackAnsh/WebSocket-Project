import express from "express";
import {signup,login,logout,updateProfile,checkAuth} from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
const router=express.Router();


router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);

router.put("/update-profile",upload.single("profilePic"), updateProfile);
router.get('/check',protectRoute,checkAuth);
export default router;