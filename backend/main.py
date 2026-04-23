from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from db import engine, Base
from routers import api_router
import models 

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["https://anisynced.netlify.app", "http://localhost:3000", "https://kagunera.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router)

@app.get("/")
def root():
    return {"status": "ok"}

@app.api_route("/health", methods=["GET", "HEAD"])
def health_check():
    return JSONResponse({"status": "ok"})
