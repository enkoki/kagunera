"""add_status_to_users

Revision ID: f913cca657d7
Revises: 
Create Date: 2026-03-07 03:30:14.565565

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'f913cca657d7'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # 1. Manually create the ENUM type first
    user_status = postgresql.ENUM('Active', 'Banned', 'Pending', name='user_status')
    user_status.create(op.get_bind())

    # 2. Now add the column (this was your auto-generated line)
    op.add_column('users', sa.Column('status', postgresql.ENUM('Active', 'Banned', 'Pending', name='user_status'), server_default='Active', nullable=False))


def downgrade() -> None:
    # 1. Drop the column first
    op.drop_column('users', 'status')

    # 2. Manually drop the ENUM type so it doesn't linger
    user_status = postgresql.ENUM('Active', 'Banned', 'Pending', name='user_status')
    user_status.drop(op.get_bind())
