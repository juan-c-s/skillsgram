from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    hashed_password = Column(String)
    company = Column(String)
    position = Column(String)
    year_entered = Column(Integer)
    avatar_url = Column(String)

    # Define the many-to-many relationship with Skill
    skills = relationship("Skill", secondary="user_skill_association")

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    years_experience = Column(Integer)
    category = Column(String)

    # Define the many-to-many relationship with User
    users = relationship("User", secondary="user_skill_association")

class UserSkillAssociation(Base):
    __tablename__ = "user_skill_association"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    skill_id = Column(Integer, ForeignKey("skills.id"), primary_key=True)

    # Define the relationship between User and Skill
    user = relationship("User")
    skill = relationship("Skill")
