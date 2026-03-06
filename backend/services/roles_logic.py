from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from models.role import Role
from models.user import Users

from sqlalchemy import or_

def update_role(new_role_id: int, identifier: str | int, current_user_uuid: str, db: Session):
    if new_role_id == 0:
        raise HTTPException(status_code=403, detail="Only one superadmin can exist")    

    current_user = db.query(Users).filter(Users.uuid == current_user_uuid).first()
    if not current_user or current_user.role_id != 0:
        raise HTTPException(status_code=401, detail="Permission denied: SuperAdmin only.")

    query = db.query(Users)
    if isinstance(identifier, int) or (isinstance(identifier, str) and identifier.isdigit()):
        user = query.filter(or_(Users.id == int(identifier), Users.username == str(identifier))).first()
    else:
        user = query.filter(Users.username == identifier).first()

    if db.query(Users).filter(Users.uuid == current_user_uuid).first().role_id == 0:
        raise HTTPException(status_code=403, detail="You cannot demote yourself from Superadmin. Direct actions within the Database has to be performed for this")

    if not user:
        raise HTTPException(status_code=404, detail="Target user not found")
    
    user.role_id = new_role_id
    db.commit()
    db.refresh(user)
    return {"message": f"User {user.username} updated to role {new_role_id}", "user": user}


def create_initial_roles(db: Session):
    roles = db.query(Role).first()
    if roles:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="The table isn't empty.")
    
    try:
        superadmin = Role(
            id = 0,
            name = "superadmin",
            description = "High ranking admin. Only one per session"
        )
        admin = Role(
            id = 1,
            name = "admin",
            description = "Higher ranked than users with admin previleges"
        )
        user = Role(
            id = 2,
            name = "user",
            description = "Normal users"
        )
        db.add_all([superadmin, admin, user])
        db.commit()
        return [superadmin, admin, user]
        
    except Exception as e:
        db.rollback()
        print("Role initialization error:", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to initialize roles")




