import React from "react";
import Header from "../layout/Header";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { Box, Button, Input, TextField } from "@mui/material";
import Tile from "../components/Tile";
import RadarChart from "../components/RadarChart";
import { addSkill, getUserByID } from "../crud/users";
import { SkillCreate , Skill} from "../types/skill";

import { useForm } from "react-hook-form";
import { setLabels } from "react-chartjs-2/dist/utils";

function ProfilePage() {
    const [user, setUser] = useState<User>({
        id: 0,
        name: 'John Doe',
        email: 'john@example.com',
        company: '',
        hashed_password: '',
        position: '',
        avatar_url: '',
        year_entered: 2022,
        skills: []
    });
    const [chartLabels, setChartLabels] = useState<string[]>([])
    const [chartData, setChartData] = useState<number[]>([])
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset} = useForm<SkillCreate>();

    const param = useParams()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData : User = await getUserByID(Number(param.id));
                console.log("Reading Users...")
                if (userData) {
                    setUser(userData);
                    setChartData(userData.skills.map(skill=>skill.years_experience))
                    setChartLabels(userData.skills.map(skill=>skill.name))
                } else {
                    navigate("/pagenotfound");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate("/");
            }

        };

        fetchUserData();
    }, []);

    // Destructure properties with default values
    const { company = "", name, position, year_entered, avatar_url = "", id = 0 } = user;

    const onSubmit =async(data: SkillCreate)=>{
        try{
            const skill: Skill= await addSkill(data, Number(param.id))
            console.log(user.skills)
            setUser(
                {
                    ...user,
                    skills: [...user.skills, skill]
                }
            )
            setChartLabels([
                ...chartLabels, skill.name
            ])
            setChartData([
                ...chartData, skill.years_experience
            ])
            reset();
            // console.log(skill)
        }catch(error){
            console.error(error);
        }
        
    }
    return (
        <div >
            <Header />
            <Box display="flex" height="100%" >
                <Box width="50%" bgcolor="#FFFFFF" display="flex" justifyContent="center" alignItems="center" padding={4}>
                    <Tile company={company} name={name} position={position} year_entered={year_entered} avatar_url={avatar_url} id={id} />
                </Box>
                <Box width="50%" bgcolor="#FFFFFF" display="flex" justifyContent="center" alignItems="center" padding={4}>
                    <Box display={"flex"} flexDirection={"column"} padding={2} margin={2}>
                        <div className="w-400 h-400 flex items-center justify-center">
                            <RadarChart labels={chartLabels} data={chartData} />
                        </div>
                        <div className="pt-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <TextField
                                            fullWidth
                                            id="name"
                                            {...register("name", { required: true })}
                                            type="text"
                                            label="Name"
                                            variant="outlined"
                                            autoComplete="name"
                                        />
                                        {errors.name && <p className="text-red-500">Skill name is required</p>}
                                    </div>
                                    <div>
                                        <TextField
                                            fullWidth
                                            id="category"
                                            {...register("category", { required: true })}
                                            type="text"
                                            label="Category"
                                            variant="outlined"
                                        />
                                        {errors.category &&
                                            <p className="text-red-500"> Category is required</p>}
                                    </div>
                                    <div>
                                        <TextField
                                            fullWidth
                                            id="years_experience"
                                            {...register("years_experience", { required: true })}
                                            type="text"
                                            label="Years of Experience"
                                            variant="outlined"
                                        />
                                        {errors.years_experience &&
                                            <p className="text-red-500"> Years of experience is required</p>}
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Add Skill
                                    </Button>
                                </div>
                            </form>

                        </div>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default ProfilePage;
