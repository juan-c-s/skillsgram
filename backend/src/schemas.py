# For passing information throughout application
# analogy to typescript types
from pydantic import BaseModel
from typing import Union, Optional, List


class UserBase(BaseModel):
    name: str
    email:str
    company : str
    position : str
    avatar_url: str
    year_entered: int

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    hashed_password : str
    skills: Optional[list[str]]  = []
    
    class Config:
        orm_mode = True
