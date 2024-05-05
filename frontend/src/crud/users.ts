import { UserCreate, UserLogin } from "../types/user";
import axios from 'axios';
import { SkillCreate } from "../types/skill";
async function createUser(data:UserCreate){
    try{
        const response = await axios.post('http://localhost:8000/users',data);
        return response.data;
    }catch(e){
        console.error("Error creating User: ",e);
        throw e;
    }
}

async function getUserByEmail(email:string){
    try{
        const response = await axios.get(`http://localhost:8000/users/email/${email}`);
        return response.data;
    }catch(e){
        console.error("Error Fetching user by email: ",e);
        throw e;
    }
}

async function getUserByID(id:number){
    try{
        const response = await axios.get(`http://localhost:8000/users/id/${id}`);
        console.error(response.data);
        return response.data;
    }catch(e){
        console.error("Error Fetching User by Id: ",e);
        throw e;
    }
}


async function getUsers(){
    try{
        const response = await axios.get(`http://localhost:8000/users/`);
        console.error(response.data);
        return response.data;
    }catch(e){
        console.error("Error Fetching User by Id: ",e);
        throw e;
    }
}

async function getUserSkills(data:SkillCreate, user_id: number){
    try{
        const response = await axios.get(`http://localhost:8000/users/skills/${user_id}`);
        return response.data;
    }catch(e){
        console.error("Error creating User: ",e);
        throw e;
    }
}

async function addSkill(data:SkillCreate, user_id: number){
    try{
        const response = await axios.post(`http://localhost:8000/skills/${user_id}`,data);
        return response.data;
    }catch(e){
        console.error("Error creating User: ",e);
        throw e;
    }
}


export {createUser, getUserByEmail, getUserByID, getUsers, addSkill, getUserSkills};