import React from "react";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { Box, Button } from "@mui/material";
import Tile from "../components/Tile";
import RadarChart from "../components/RadarChart";
import TileGrid from "../components/TileGrid";
import { getUsers } from "../crud/users";

import { TileProps } from "../types/user";
function HomePage() {
    const [users, setUsers] = useState<User[]>([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const userData = await getUsers();
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
    const tiles: TileProps[] = users.map(user => ({
        name: user.name,
        company: user.company,
        position: user.position,
        year_entered: user.year_entered,
        avatar_url: user.avatar_url,
        id : user.id
    })) || []
    return (
        <div>
            <Header />
            <div className="p-4">
                <TileGrid tiles={tiles}/>
            </div>
                
        </div>
    );
}

export default HomePage;
