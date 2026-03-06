from fastapi import APIRouter
from .auth import public_router as auth_pub_router
from .auth import router as auth_router
from .management import router as management_router

api_router = APIRouter()
api_router.include_router(auth_pub_router)
api_router.include_router(auth_router)
api_router.include_router(management_router)