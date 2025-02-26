import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser:null,
    
    isUpdatingProfile:false,

    isCheckingAuth:true,

    checkAuth:async()=>{
        try {
            const res = await axiosInstance.get("/auth/check");
            set({authUser:res.data});
        } catch (error) {
           set({authUser:null}); 
        }
        finally{
            set({isCheckingAuth:false});
        }
    },
    signUp:async(data)=>{
        try {
            const res = await axiosInstance.post("/auth/signup",data); 
            set({authUser:res.data});
            set({loggedOut:false});
            toast.success("Signup Successful");
        } catch (error) {
            toast.error("Error while signing up");
            console.log(error);
        }
    },
    loggedOut:true,
    logOut:async()=>{
        try {
            await axiosInstance.post("/auth/logout");
            set({loggedOut:true});
            set({authUser:null});
            toast.success("Successfully LoggedOut");
        } catch (error) {
            toast.error("Cant Logout Now");
        }
    },
    login:async(data)=>{
      try {
        const res = await axiosInstance.post("/auth/login",data);
        set({authUser:res.data});
        set({loggedOut:false});
        toast.success("Successfully LoggedIn");
      } catch (error) {
        toast.error("Can't Login");
      }
    },
    changeProfile:async(data)=>{
        try {
            const res = await axiosInstance.put("/auth/update-profile",data, {
                headers: { "Content-Type": "multipart/form-data" }, });
            toast.success("Profile Updated");
            return res.data;
        } catch (error) {
            
        }
    }
}));