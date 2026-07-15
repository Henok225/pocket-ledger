from pydantic import BaseModel
from datetime import date


class ParsedTransaction(BaseModel):
    date: date
    description: str
    amount: float
    category: str