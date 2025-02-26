import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

function ProfilePage() {
  const {authUser,changeProfile} = useAuthStore();
  const [profilePhoto,setProfilePhoto] = useState(authUser.profilePic || "./avatar.png");
  const [selectedFile,setSelectedFile]=useState();
  
  const fileSelect = (e) =>{
    const file= e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    //console.log(selectedFile);
  }
  const handleSubmit = (e) => {
   
    if (!selectedFile) return;
    console.log(selectedFile);
    const formData = new FormData(); 
    formData.append("profilePic", selectedFile); 

    console.log("FormData content:", formData.get("profilePic"));
    
    
    changeProfile(formData)
      .then((updatedUser) => {
        setProfilePhoto(updatedUser.profilePic); // Update profile picture
      })
      .catch((err) => {
        console.error("Profile update failed:", err);
      });
  
  }

  return (
    <>
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={profilePhoto}
     
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{authUser.fullName}</h2>
    <p>{authUser.email}</p>
    <div className="card-actions">
       <input type="file" className="file-input file-input-primary" onChange={fileSelect}/>
    </div>
    <button className="btn btn-soft btn-warning" onClick={handleSubmit}>Upload</button>
  </div>
</div>
</div>
    </>
  )
}

export default ProfilePage;