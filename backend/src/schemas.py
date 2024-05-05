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

class SkillCreate(BaseModel):
    name : str
    years_experience: int
    category : str

class Skill(SkillCreate):
    id : int

    class Config:
        from_attributes = True
        
class User(UserBase):
    id: int
    hashed_password : str
    skills: list[Skill]  = []
    
    class Config:
        from_attributes = True #was orm_mod before

        