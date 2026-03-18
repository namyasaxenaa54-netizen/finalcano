from pydantic import BaseModel, Field, ConfigDict
from typing import Dict, Any, Optional

class CompanyInfo(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = "company_info"
    name: str
    tagline: str
    description: str
    mission: str
    vision: str
    stats: Dict[str, str]
    contact: Dict[str, str]
    certifications: Optional[list] = None

class CompanyInfoUpdate(BaseModel):
    name: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    mission: Optional[str] = None
    vision: Optional[str] = None
    stats: Optional[Dict[str, str]] = None
    contact: Optional[Dict[str, str]] = None
    certifications: Optional[list] = None
