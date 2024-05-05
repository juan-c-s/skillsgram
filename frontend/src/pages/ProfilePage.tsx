import React from "react";
import Header from "../layout/Header";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types";
import { Box, Button } from "@mui/material";
import Tile from "../components/Tile";
import RadarChart from "../components/RadarChart";
import { avatar } from "@material-tailwind/react";
import { getUserByID } from "../crud/users";


function ProfilePage() {
    const [userInfo, setUserInfo] = useState<Partial<User>>({}); // Partial<User> type allows all properties of User to be optional
    const labels = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"];
    const data = [80, 70, 60, 90, 85];
    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const userData = await getUserByID(Number(id));
                console.log(userData)
                if(userData){
                    setUserInfo(userData);
                }else{
                    navigate("/pagenotfound");
                }
            }catch(error){
                console.error("Error fetching user data:", error);
                navigate("/"); // Redirect to home page on error
            }
        
        };

        fetchUserData();
    }, []);

    // Destructure properties with default values
    const { company = "", name = "", position = "", year_entered = 0, avatar_url="" } = userInfo;

    return (
        <div>
            <Header />
            <Box display="flex" height="100%" >
                <Box  width="50%" bgcolor="#FFFFFF" display="flex" justifyContent="center" alignItems="center"  padding={4}>
                    <Box bgcolor={"white"}borderRadius={"25%"} boxShadow={3} padding={2}>
                        <Box display={"flex"} flexDirection={"column"} padding={2} margin={2}>
                            <div className="w-100 h-100 bg-blue-500 rounded-full flex items-center justify-center">
                                <img src={userInfo.avatar_url} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div className="pt-5">
                                <Tile company={company} name={name} position={position} year_entered={year_entered} avatar_url={avatar_url}/>
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box width="50%" bgcolor="#FFFFFF" display="flex" justifyContent="center" alignItems="center"  padding={4}>
                        <Box display={"flex"}  flexDirection={"column"} padding={2} margin={2}>
                            <div className="w-400 h-400 flex items-center justify-center">
                                <RadarChart labels={labels} data={data}/>
                            </div>
                            <div className="pt-5">
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                >
                                Add Skill
                            </Button>
                            </div>
                        </Box>
                </Box>
            </Box>
        </div>
    );
}

export default ProfilePage;
