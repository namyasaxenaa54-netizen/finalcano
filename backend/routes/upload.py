from fastapi import APIRouter, UploadFile, File, HTTPException
from pathlib import Path
import shutil
import uuid
from datetime import datetime

router = APIRouter(prefix="/upload", tags=["Upload"])

# NOTE: Local pod storage is ephemeral and will not persist in production deployments
# For production, integrate Emergent Object Storage or another cloud storage solution
# Current implementation is for development/testing only
UPLOAD_DIR = Path("/app/frontend/public/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.post("/image")
async def upload_image(file: UploadFile = File(...)):
    """
    DEPRECATED: Local upload storage is ephemeral in production.
    Please integrate Emergent Object Storage for production file uploads.
    This endpoint is disabled to prevent data loss in deployed environments.
    """
    raise HTTPException(
        status_code=501,
        detail="Local file upload is disabled. Please use Emergent Object Storage for production deployments."
    )

@router.delete("/image/{filename}")
async def delete_image(filename: str):
    """Delete an uploaded image"""
    file_path = UPLOAD_DIR / filename
    
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    try:
        file_path.unlink()
        return {"success": True, "message": "File deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete file: {str(e)}")
