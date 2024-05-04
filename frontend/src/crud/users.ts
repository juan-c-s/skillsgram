import { UserCreate, UserLogin } from "../types";
import axios from 'axios';

async function createUser(data:UserCreate){
    try{
        const response = await axios.post('http://localhost:8000/users',data);
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log("Error creating User: ",e);
        throw e;
    }
}

async function getUserByEmail(data:UserLogin){
    try{
        const response = await axios.get(`http://localhost:8000/users/${data.email}`);
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log("Error creating User: ",e);
        throw e;
    }
}

export {createUser, getUserByEmail};