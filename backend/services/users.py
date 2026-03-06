from fastapi import status, HTTPException
from sqlalchemy.orm import Session
from models import Users

def get_users(current_user: dict, db: Session):
    if current_user["role_id"] > 1:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You don't have enough permissions")
    
    users = db.query(Users).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users