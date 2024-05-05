import React from "react";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types";
import { Box, Button } from "@mui/material";
import Tile from "../components/Tile";
import RadarChart from "../components/RadarChart";
import TileGrid from "../components/TileGrid";
import { getUsers } from "../crud/users";
function HomePage() {
    const [users, setUsers] = useState<Partial<User[]>>([]); // Partial<User> type allows all properties of User to be optional
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const userData = await getUsers();
                // console.log(userData)
                if(userData){
                    setUsers(userData);
                }else{
                    navigate("/pagenotfound");
                }
            }catch(error){
                console.error("Error fetching user data:", error);
                navigate("/"); 
            }
        
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <Header />
            {/* <TileGrid tiles={users}/> */}
        </div>
    );
}

export default HomePage;
