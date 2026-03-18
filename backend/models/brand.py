from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, Dict, Any
import uuid

class Brand(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str  # canobond, blackberry, furniture
    tagline: str
    description: str
    brand_color: str
    light_color: str
    logo: str
    banner_image: Optional[str] = None
    sections: Optional[Dict[str, Any]] = None

class BrandCreate(BaseModel):
    name: str
    slug: str
    tagline: str
    description: str
    brand_color: str
    light_color: str
    logo: str
    banner_image: Optional[str] = None
    sections: Optional[Dict[str, Any]] = None

class BrandUpdate(BaseModel):
    name: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    brand_color: Optional[str] = None
    light_color: Optional[str] = None
    logo: Optional[str] = None
    banner_image: Optional[str] = None
    sections: Optional[Dict[str, Any]] = None
