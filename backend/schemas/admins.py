from pydantic import BaseModel
from typing import Union
from uuid import UUID
from datetime import datetime

class AdminDisplay(BaseModel):
    id: str  
    username: str
    uuid: UUID
    role: str    
    roleId: int 

    class Config:
        from_attributes = True

class RoleUpdateSchema(BaseModel):
    identifier: Union[int, str]
    new_role_id: int  

RoleUpdateSchema.model_rebuild()