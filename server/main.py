from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

class ReversedStringResponse(BaseModel):
    reversedString: str

@app.get('/reverse/', response_model=ReversedStringResponse)
def get_str(stringToReverse: str = None):
    logger.info(f"Received request to reverse: {stringToReverse}")
    if not stringToReverse:
        raise HTTPException(status_code=400, detail="Input string cannot be empty")
    reversed_str = stringToReverse[::-1]
    
    logger.info(f"Returning reversed string: {reversed_str}")

    return {"reversedString": reversed_str}


# example of usage
# http://127.0.0.1:8000/reverse/?stringToReverse=123adsdklkad 
