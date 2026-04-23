![](https://i.imgur.com/jAvIeGK.png)
A simple Next.js project for learning Next.js and practicing team collaboration.
## Getting Started
### Frontend Part

First, run the development server:

```bash
cd frontend/
npm install
```
```
npm run dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Backend Part

```bash
cd backend/

python -m venv venv
```
#### Activate virtual environment (choose the one for your shell)

##### Linux / macOS (bash/zsh)
```bash
source venv/bin/activate
```

#####  csh
```bash
source venv/bin/activate.csh
```

#####  fish
```bash
source venv/bin/activate.fish
```

#####  Windows PowerShell
```bash
.\venv\bin\activate.ps1
```

#####  Install dependencies
```bash
pip install -r requirements.txt
```

#####  Run the development server
```bash
fastapi dev main.py
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.
For in-built docs - [http://localhost:8000/docs#/](http://localhost:8000/docs#/)

### Dummy `.env` Format
```
# Database

#For Local Host
DB_USER = " "
DB_PASS = ""
DB_HOST = ""
DB_PORT =  
DB_NAME = ""

# JWT
SECRET_KEY = "" 
ALGORITHM = ""
EXPIRATION_TIME =  
```
