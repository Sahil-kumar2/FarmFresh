# 🌱 FarmFresh – AgriCommerce Platform

FarmFresh is a full-stack **MERN-based agri-commerce platform** that connects farmers directly with consumers, eliminating middlemen and enabling transparent crop selling through role-based dashboards and AI-powered assistance.

---

## 🔗 Live Links

- **Frontend (Vercel):** https://farmfresh-omega.vercel.app  
- **Backend API (Render):** https://farmfresh-qzky.onrender.com  

---

## ✨ Features

### 👨‍🌾 Farmer
- Add and manage crops for sale  
- View listed crops and incoming orders  
- Sales and order analytics dashboard  
- AI-powered **CropSense** for crop guidance  

### 🛒 Buyer
- Browse marketplace without login  
- Secure signup & login  
- Add crops to cart and place orders  
- View order history  

### 🤖 AI Integration
- **Gemini API (CropSense)**
  - Crop suggestions  
  - AI-driven FAQ and farming guidance  

### 🔐 Authentication & Security
- JWT-based authentication  
- Role-based authorization (Buyer / Farmer)  
- Protected routes for dashboards  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)  
- Tailwind CSS  
- Axios  
- React Router  
- Context API (Cart Management)  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT Authentication  
- Cloudinary (Image uploads)  
- Gemini API (AI features)  

### Deployment
- Frontend: **Vercel**  
- Backend: **Render**  
- Database: **MongoDB Atlas**  

---

## 🏗 Architecture

React Frontend (Vercel)  
↓ REST API  
Node + Express Backend (Render)  
↓  
MongoDB Atlas  

- Frontend and backend are deployed independently  
- Backend serves API only  
- Client-side routing handled by React Router  

---

## 📂 Project Structure

FarmFresh/  
├── backend/  
│   ├── controllers/  
│   ├── routes/  
│   ├── models/  
│   ├── middleware/  
│   └── index.js  
│  
├── frontend/  
│   ├── src/  
│   │   ├── pages/  
│   │   ├── components/  
│   │   ├── services/  
│   │   └── context/  
│   └── vite.config.js  

---

## ⚙️ Environment Variables

### Backend (Render)

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_key  
CLOUDINARY_API_SECRET=your_secret  
GEMINI_API_KEY=your_gemini_api_key  

### Frontend (Vercel)

VITE_API_BASE_URL=https://farmfresh-qzky.onrender.com  

---

## 🧪 Local Development Setup

### 1️⃣ Clone Repository

git clone https://github.com/Sahil-kumar2/FarmFresh.git  
cd FarmFresh  

### 2️⃣ Backend Setup

cd backend  
npm install  
npm run dev  

Backend runs at:  
http://localhost:5000  

### 3️⃣ Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend runs at:  
http://localhost:5173  

---

## 🌐 API Endpoints (Sample)

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/marketplace | Fetch all crops |
| POST | /api/crops | Add crop (Farmer) |
| POST | /api/orders | Place order |
| POST | /api/ai/cropsense | AI crop suggestions |

---

## 🧠 Key Learnings
- Full-stack MERN development  
- Role-based authentication and authorization  
- CORS handling and production debugging  
- Monorepo deployment (Vercel + Render)  
- Client-side vs server-side routing  
- AI integration in real-world applications  

---

## 🚀 Future Enhancements
- Payment gateway integration  
- Admin dashboard  
- Crop reviews and ratings  
- Order status tracking  
- Advanced AI recommendations  

---

## 👤 Author

Sahil Kumar  
Aspiring Full-Stack Developer  
GitHub: https://github.com/Sahil-kumar2  

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
