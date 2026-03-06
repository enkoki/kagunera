from fastapi import status, HTTPException
from sqlalchemy.orm import Session
from models import Users

def get_users(current_user, db):
    if current_user["role_id"] > 1:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You dont have enough permissions")
    users = db.query(Users).all()
    if not users:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No users found")
    return users