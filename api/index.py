
from fastapi import FastAPI
from sqlmodel import Field, Session, SQLModel, create_engine
from pydantic import BaseModel

from dotenv import load_dotenv
import os

load_dotenv()

db_url= os.getenv("db_url")

engine = create_engine(db_url)

def create_table():
    SQLModel.metadata.create_all(engine)

# Model Schema
class User(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    email: str
    is_complete: bool = False

# Pydantic validation
class User_Data(BaseModel):
    name: str
    email: str
    is_complete: bool = False


def create_user(name: str, email: str):
    with Session(engine) as session:
        user = User(name=name, email=email)
        session.add(user)
        session.commit()
        session.refresh(user)
        return user
    

create_table() 

app = FastAPI()

@app.post("/api")
def create_user_endpoint(user_data: User_Data):
    user = create_user(user_data.name, user_data.email)
    return user
