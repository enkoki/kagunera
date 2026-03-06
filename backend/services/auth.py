from fastapi import HTTPException, status, Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta

from db import get_db
from schemas.token_schemas import TokenResponse
from config import SECRET_KEY, ALGORITHM, EXPIRATION_TIME
from models import Users

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")
hasher = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(password: str):
    return hasher.hash(password)

def verify_password(password: str, hashed_password: str):
    return hasher.verify(password, hashed_password)

def register_user(user, db):
    if db.query(Users).filter(Users.username == user.username).first():
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="Username already taken")
    
    if db.query(Users).filter(Users.email == user.email).first():
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="Email already exists")

    user.password = hash(user.password)
    new_user = Users(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def login_user(user_data, db):
    user = db.query(Users).filter(Users.username == user_data.username).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Username doesn't exists")
    if not verify_password(user_data.password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Invalid credentials")
    
    access_token = create_access_token(data = {"sub":user.username, "uuid":str(user.uuid), "role_id":user.role_id })
    return {"access_token":access_token, "token_type": "bearer"}

def create_access_token(data: dict):
    to_encode = data.copy()
    expires_at = datetime.utcnow() + timedelta(minutes=EXPIRATION_TIME)

    #adding expiration date to payload
    to_encode.update({"exp":expires_at})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str) -> TokenResponse:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        uuid: str = payload.get("uuid")
        role_id: int = payload.get("role_id")

        if username is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Could not verify credentials",headers={"WWW-Authenticate":"Bearer"})
        
        return TokenResponse(username = username, uuid = uuid, role_id = role_id)
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Could not verify credentials",headers={"WWW-Authenticate":"Bearer"})


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    token_data = verify_token(token)
    user = db.query(Users).filter(Users.username==token_data.username).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="User does not exist",headers={"WWW-Authenticate":"Bearer"})
    return {
        "uuid": str(user.uuid),
        "email":user.email,
        "username": user.username,
        "role_id": user.role_id,
        "created_at": user.created_at,
        "updated_at": user.updated_at
    }
    