from typing import Union
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from fastapi.middleware.cors import CORSMiddleware
from .database import SessionLocal, engine
#SessionLocal is the local instance of the DB

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}") 
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users/email/{email}")
def read_user_email(email : str, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, email)
    return user

@app.get("/users/id/{id}", response_model=schemas.User)
def read_user_id(id : int, db: Session = Depends(get_db)):
    user = crud.get_user(db, id)
    return user

@app.get("/users/skills/{user_id}", response_model=list[schemas.Skill])
def read_user_skills(user_id : int, db: Session = Depends(get_db)):
    return crud.get_user_skills(db, user_id)

@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.post("/skills/{user_id}", response_model=schemas.Skill)
def add_skill(skill: schemas.SkillCreate, user_id: int, db: Session = Depends(get_db)):
    db_skill = crud.get_skill_by_name(db, name=skill.name)
    if not db_skill:
        db_skill = crud.create_skill(db=db, skill=skill)
    return crud.add_skill_to_user(db, user_id, db_skill)


@app.get("/skills/", response_model=list[schemas.Skill])
def read_skills(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    skills = crud.get_skills(db, skip=skip, limit=limit)
    return skills


## Esto hace que FastApi permita recibir requests de localhost
origins = [
    "http://localhost",
    "http://localhost:3000", 
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

#https://medium.com/@tumusicalatina/desarrollar-una-app-con-fastapi-y-reactjs-d15030e59437