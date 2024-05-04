

export type UserCreate = {
    name: string,
    email:string
    password : string
    company : string
    position : string
    avatar_url: string
    year_entered: Number
};

export type User = {
    id : Number,
    name: string,
    email:string
    company : string
    hashed_password : string
    position : string
    avatar_url: string
    year_entered: Number
    skills : string[]
}

export type UserLogin = {
    email: string,
    password: string
}


