
import React from "react"
import Header from "../layout/Header";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { User } from "../types";
function ProfilePage(){
    const location = useLocation();
    const [userInfo, setUserInfo]= useState<User>();
    useEffect(()=>{
        setUserInfo(location.state.user)
    }, [])
    
    return (
        <div>
            <Header/>
            <h2 className="text-center text-3xl">
                Profile Page
            </h2>
        </div>
    )
}
export default ProfilePage;