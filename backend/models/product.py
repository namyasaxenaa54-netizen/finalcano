from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Dict, Any
import uuid

class Product(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    code: Optional[str] = None
    name: str
    brand: str  # canobond, blackberry, furniture
    category: str
    section: Optional[str] = None  # adhesives, grouts, cleaning
    description: str
    image: str
    specs: Optional[Dict[str, Any]] = None
    features: Optional[List[str]] = None
    applications: Optional[List[str]] = None
    colors: Optional[List[str]] = None
    price: Optional[str] = None

class ProductCreate(BaseModel):
    code: Optional[str] = None
    name: str
    brand: str
    category: str
    section: Optional[str] = None
    description: str
    image: str
    specs: Optional[Dict[str, Any]] = None
    features: Optional[List[str]] = None
    applications: Optional[List[str]] = None
    colors: Optional[List[str]] = None
    price: Optional[str] = None

class ProductUpdate(BaseModel):
    code: Optional[str] = None
    name: Optional[str] = None
    category: Optional[str] = None
    section: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    specs: Optional[Dict[str, Any]] = None
    features: Optional[List[str]] = None
    applications: Optional[List[str]] = None
    colors: Optional[List[str]] = None
    price: Optional[str] = None
