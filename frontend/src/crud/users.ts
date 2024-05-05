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

async function getUserByEmail(email:string){
    try{
        const response = await axios.get(`http://localhost:8000/users/email/${email}`);
        return response.data;
    }catch(e){
        console.log("Error Fetching user by email: ",e);
        throw e;
    }
}

async function getUserByID(id:number){
    try{
        const response = await axios.get(`http://localhost:8000/users/id/${id}`);
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log("Error Fetching User by Id: ",e);
        throw e;
    }
}


async function getUsers(){
    try{
        const response = await axios.get(`http://localhost:8000/users/`);
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log("Error Fetching User by Id: ",e);
        throw e;
    }
}

export {createUser, getUserByEmail, getUserByID, getUsers};