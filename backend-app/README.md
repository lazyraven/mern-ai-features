# Backend App

Production-ready Express backend featuring:

- MongoDB with Mongoose
- JWT authentication
- Structured with routes, controllers, models
- Middleware for error handling and auth
- Environment configuration

## Setup

1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev` (requires nodemon)
4. Build for production: `npm run build` then `npm start`

## API Endpoints

- `POST /api/users/register` – register a new user
- `POST /api/users/login` – login and get JWT
- `GET /api/users/profile` – fetch user profile (requires Bearer token)

## Project module

The application is now organized by feature modules instead of technical layers:

- **User module** (`/src/modules/user`) – encapsulates user domain, services and routes
- **Project module** (`/src/modules/project`) – supports CRUD operations for projects tied to a user

Projects endpoints:

- `POST /api/projects` – create a new project (authenticated)
- `GET /api/projects` – list current user's projects
- `GET /api/projects/:id` – retrieve a single project (owner only)


# First Prompt On Copilot Chat
- // build a production-ready express backend
- // use mongodb with mongoose
- // include user authentication with jwt
- // use middleware for error handling
- // structure code with routes, controllers, models
- // follow best practices

https://chatgpt.com/share/69a711f9-4244-8013-bcce-f65b5fab0db2

https://chatgpt.com/g/g-p-69a089832c0881919bafd2099b2a3b64-ai-learning/c/69a2c347-8cb0-8322-af9a-f7b1008fa38d

# Second Prompt On Copilot Chat
- advanced Copilot prompts for system design + scaling.

- // design backend using domain driven design pattern
- // organize code by feature modules instead of technical layers
- // include user and project modules with separate logic

📬 Endpoints to hit
## 📬 API Endpoints

| Method | URL | Body / Headers | Description |
|--------|-----|----------------|-------------|
| POST | http://localhost:5000/api/users/register | `{ "name": "...", "email": "...", "password": "..." }` | Create a new account |
| POST | http://localhost:5000/api/users/login | `{ "email": "...", "password": "..." }` | Returns `{ token: "..." }` |
| GET | http://localhost:5000/api/users/profile | `Authorization: Bearer <token>` | Fetch user profile |
| POST | http://localhost:5000/api/projects | `{ "title": "...", "description": "..." }` + auth header | Create a project |
| GET | http://localhost:5000/api/projects | `Authorization: Bearer <token>` | List all projects |
| GET | http://localhost:5000/api/projects/:id | `Authorization: Bearer <token>` | Get project details |