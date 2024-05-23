# Voosh API

This is an Express.js API providing user management functionalities, including registration, login, profile management, and Google OAuth authentication.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Swagger API Documentation](#swagger-api-documentation)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rohanarora17/voosh.git
   cd voosh
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a .env file in the root directory and add the following variables

```bash
PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

4. Start the server:

```bash
   npm start
```

# Express API

This Express.js API provides user management functionalities, including registration, login, profile management, and Google OAuth authentication.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [Root Route](#root-route)
  - [User Routes](#user-routes)
  - [Authentication Routes](#authentication-routes)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Deploying to Render](#deploying-to-render)
- [Swagger API Documentation](#swagger-api-documentation)
- [License](#license)

## API Endpoints

### Root Route

- **GET /**: Returns a welcome message.

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Login a user and receive a JWT token.
- **GET /api/users/profile/:id**: Retrieve a user's profile by ID.
- **PUT /api/users/profile/:id**: Update a user's profile by ID.
- **GET /api/users/public-profiles**: Retrieve all public profiles.
- **GET /api/users/user-profiles**: Retrieve all user profiles (admin only).

### Authentication Routes

- **GET /auth/google**: Redirect to Google OAuth login.
- **GET /auth/google/callback**: Google OAuth callback URL.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable               | Description                        |
| ---------------------- | ---------------------------------- |
| `PORT`                 | Port number the server will run on |
| `MONGO_URI`            | MongoDB connection string          |
| `JWT_SECRET`           | Secret key for JWT                 |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID             |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret         |
| `GOOGLE_CALLBACK_URL`  | Google OAuth callback URL          |

## Deployment

### Deploying to Render

Follow these steps to deploy the API to Render:

1. **Sign Up and Create New Web Service**:

   - Sign up at [Render](https://render.com/).
   - Click on "New" and then select "Web Service".
   - Connect your GitHub repository containing the Express.js project.

2. **Configure the Service**:

   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Set Environment Variables**:

   - Add the environment variables in the Render dashboard.

4. **Deploy**:
   - Render will automatically build and deploy your service.

## Swagger API Documentation

Swagger documentation is available at `/api-docs`. This provides a detailed interactive API documentation for testing and development purposes.

## License

This project is licensed under the MIT License. See `LICENSE` file for more information.
