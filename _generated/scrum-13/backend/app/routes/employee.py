from fastapi import APIRouter

router = APIRouter()

@router.get("/employees")
async def get_employees():
    return []
