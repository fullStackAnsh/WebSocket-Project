import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useMessageStore = create((set) => ({
    users:[],
    getUsers:async()=>{
        const res= await axiosInstance.get("/message/users");
        set({users:res.data});
    },
}))