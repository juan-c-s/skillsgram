from sqlalchemy.orm import Session

from . import models

from . import schemas, utils

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    print("ksqzsa")
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db : Session, user: schemas.UserCreate):
    db_user = models.User(
        name=user.name,
        email=user.email,
        hashed_password= utils.hash(user.password),
        company=user.company,
        position=user.position,
        avatar_url=user.avatar_url,
        year_entered=user.year_entered,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user