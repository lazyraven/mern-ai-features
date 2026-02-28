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

- `POST /api/auth/register` – register a new user
- `POST /api/auth/login` – login and get JWT
- `GET /api/auth/profile` – fetch user profile (requires Bearer token)


# First Prompt On Copilot Chat
// build a production-ready express backend
// use mongodb with mongoose
// include user authentication with jwt
// use middleware for error handling
// structure code with routes, controllers, models
// follow best practices