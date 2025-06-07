# ⚔️ Hack Of Clans – Backend

A scalable backend API built with **Node.js**, **Express**, and **Socket.IO** to power the real-time messaging and team collaboration features of the **Hack Of Clans** platform – a space for developers to form clans and participate in hackathons.

---

## 🚀 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (via Mongoose)
- **Socket.IO** (real-time communication)
- **MongoDB Atlas** (for selected data handling)
- **Cloudinary** (image uploads)
- **Render** (deployment platform)
- **Webscrapping** [Scrapping Repo from Soham](https://github.com/pavigupta21/Hack_of_Clans/tree/Scrapping_backend)

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/Hack-Of-Clans-Backend.git](https://github.com/Omkar-Sankpal/Hack_Of_Clans_Backend.git)
cd Hack-Of-Clans-Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
PORT=5000
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
SUPABASE_URL=your_supabase_url (optional)
SUPABASE_KEY=your_supabase_key (optional)
```

### 4. Run locally 

```bash
npm run dev
```
Server will start on:
http://localhost:5000

## 💬 Real-Time Features
- Room-based chat using Socket.IO

- Team-wise messaging with join-room event

- Automatic real-time updates using LatestMessage event

- Integrated with client via Zustand's connectSocket() function

## 🛣️ API Routes Overview

### Base URL 

```bash
/api/hackofclans/
```

### 🧑‍💻 User Routes

| Method | Route                      | Description                   |
|--------|----------------------------|-------------------------------|
| GET    | `/check-auth`              | Auth verification             |
| POST   | `/signup`                  | User registration             |
| POST   | `/login`                   | User login                    |
| POST   | `/logout`                  | User logout                   |
| POST   | `/verify-email`            | Email verification            |
| POST   | `/forgot-password`         | Send password reset link      |
| POST   | `/reset-password/:token`   | Reset user password           |
| GET    | `/google`                  | Google OAuth login            |
| POST   | `/startup-page`            | Post login startup data       |
| POST   | `/update-profile`          | Update user profile           |

### 💬 Message Routes

| Method | Route                      | Description                   |
|--------|----------------------------|-------------------------------|
| POST   | `/send`                    | Send a message                |
| POST   | `/get-messages`            | Fetch messages for a team     |
| POST   | `/get-team-users`         | Get all users in a team       |
| POST   | `/get-notifications`       | Get user notifications        |

### 🛡️ Team Routes

| Method | Route                      | Description                           |
|--------|----------------------------|---------------------------------------|
| POST   | `/createteam`              | Create a new team                     |
| POST   | `/joinreq`                 | Send join request to team             |
| POST   | `/acceptreq`               | Accept join request                   |
| POST   | `/getteams`                | Fetch all teams of a user             |
| POST   | `/send-invitation`         | Send team invitation                  |
| POST   | `/accept-invitation`       | Accept team invitation                |
| POST   | `/reject-invitation`       | Reject team invitation                |

### 🌍 Explore Routes

| Method | Route                      | Description                           |
|--------|----------------------------|---------------------------------------|
| GET    | `/get-hackathons`          | Get all hackathons                    |
| GET    | `/get-50-hackathons`       | Get latest 50 hackathons              |
| GET    | `/get-users`               | Get all users                         |
| GET    | `/get-50-users`            | Get latest 50 users                   |
| GET    | `/get-teams`               | Get top 15 teams                      |

---


## 🌐 Deployment

Deployed on Render:
🔗 https://hack-of-clans-backend.onrender.com


## 🔐 Security

- Passwords are hashed using bcrypt

- Authentication via JWT

- Environment variables managed using dotenv

- CORS restricted to trusted frontend origins only
