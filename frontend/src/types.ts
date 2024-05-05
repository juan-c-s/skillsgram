

export type UserCreate = {
    name: string,
    email:string
    password : string
    company : string
    position : string
    avatar_url: string
    year_entered: number
};

export type User = {
    id : number,
    name: string,
    email:string
    company : string
    hashed_password : string
    position : string
    avatar_url: string
    year_entered: number
    skills : string[]
}

export type UserLogin = {
    email: string,
    password: string
}





export type TileProps ={
    name: string,
    company: string,
    position: string,
    year_entered: number,
    avatar_url: string
  }
  

export type RadarChartProps={
    labels: string[],
    data : number[]
}