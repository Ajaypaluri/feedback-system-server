# Feedback System - Frontend

## Project Overview
This is the frontend of the Feedback System, built using React.js and deployed on **Vercel**.

## Features
- Student Login and Authentication
- Submit Feedback Anonymously
- View Professor Ratings (Chart.js)
- Responsive UI

## Tech Stack
- **React.js** (Frontend Library)
- **Vercel** (Deployment)
- **Chart.js** (Data Visualization)
- **CSS** (Styling)

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/Ajaypaluri/feedback-system-frontend.git
cd feedback-system-frontend
```

### 2. Install dependencies
```sh
npm install
```

### 3. Create a `.env` file
```sh
touch .env
```
Inside `.env`, add the backend API URL:
```
REACT_APP_BACKEND_URL=https://feedback-system-server-nzt4.onrender.com
```

### 4. Run the application
```sh
npm start
```

## Deployment
The frontend is deployed on **Vercel**. To deploy manually:
```sh
git push origin main
```
Vercel will automatically build and deploy the latest changes.

---

# Feedback System - Backend

## Project Overview
This is the backend of the Feedback System, built using Node.js and Express.js, deployed on **Render**.

## Features
- Handles Student Authentication
- Stores Feedback Securely
- Provides API Endpoints for the Frontend
- Encrypts Student Identities

## Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Backend Framework)
- **MongoDB** (Database)
- **Render** (Deployment)
- **bcrypt.js** (Encryption)

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/Ajaypaluri/feedback-system-server.git
cd feedback-system-server
```

### 2. Install dependencies
```sh
npm install
```

### 3. Create a `.env` file
```sh
touch .env
```
Inside `.env`, add the following environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server
```sh
node index.cjs
```

## Deployment
The backend is deployed on **Render**. To deploy manually:
```sh
git push origin main
```
Render will automatically detect changes and redeploy.

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/student/validateRollNumber` | Validate student roll number |
| GET    | `/feedback` | Get all feedback |
| POST   | `/feedback` | Submit feedback |

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

