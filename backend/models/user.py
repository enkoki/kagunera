import uuid
from sqlalchemy import Column, Integer, String, TIMESTAMP, text, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, ENUM
from sqlalchemy.orm import relationship
from db import Base
import enum

class UserStatus(enum.Enum):
    Active = "Active"
    Banned = "Banned"
    Pending = "Pending"

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    uuid = Column(UUID(as_uuid=True), default=uuid.uuid4, unique=True, nullable=False)
    username = Column(String, nullable=False, unique=True, index=True)
    email = Column(String, nullable=False, unique=True, index=True)
    password = Column(String, nullable=False)

    status = Column(
        ENUM(UserStatus, name="user_status"), 
        nullable=False, 
        server_default=UserStatus.Active.value
    )

    role_id = Column(Integer, ForeignKey("roles.id"), nullable=False, server_default="2")
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("NOW()"))
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("NOW()"),
        onupdate=text("NOW()")
    )

    role = relationship("Role", back_populates="users")
    watched_anime = relationship("WatchedAnime", back_populates="user", cascade="all, delete")
