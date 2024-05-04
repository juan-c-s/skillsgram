from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Table
from sqlalchemy.orm import relationship
from .database import Base

user_skill_association = Table(
    'user_skill_association',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('users.id')),
    Column('skill_id', Integer, ForeignKey('skills.id'))
)

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

    skills = relationship("Skill", secondary=user_skill_association)

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    years_experience = Column(Integer)
    category = Column(String)

    users = relationship("User", secondary=user_skill_association)
