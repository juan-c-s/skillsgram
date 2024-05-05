from sqlalchemy.orm import Session

from . import models, schemas

from . import utils

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def get_user_skills(db: Session, user_id: int, limit:int = 100):
    return db.query(models.Skill).join(models.UserSkillAssociation).filter(models.UserSkillAssociation.user_id == user_id).limit(limit).all()

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



def get_skills(db : Session, skip: int = 0, limit:int = 100):
    return db.query(models.Skill).offset(skip).limit(limit).all()

def add_skill_to_user(db: Session, user_id: int, skill : schemas.Skill):
    user = db.query(models.User).filter_by(id=user_id).first()
    user.skills.append(skill)
    db.commit()
    db.refresh(user)
    return skill

def create_skill(db : Session, skill: schemas.SkillCreate):
    db_skill = models.Skill(
        name=skill.name,
        years_experience=skill.years_experience,
        category = skill.category
    )
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill

def get_skill_by_name(db: Session, name: str):
    return db.query(models.Skill).filter(models.Skill.name == name).first()