<div align="center">
  
  <img src="https://aibuzz.media/logo.png" alt="AiBuzz Media Logo" width="200" />
  
  # 🚀 AiBuzz Media | Influencer Marketing Agency
  
  [![Website](https://img.shields.io/badge/Website-aibuzz.media-ff69b4?style=for-the-badge&logo=google-chrome)](https://aibuzz.media)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/alok957641/Ai-Buzz)
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![Tailwind](https://img.shields.io/badge/Tailwind-3.3.5-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  
  ### Connecting Brands with Top Influencers | Data-Driven Marketing Campaigns
  
  **Built with ❤️ by Alok Kumar**
  
</div>

---

## 📌 About The Project

**AiBuzz Media** is a premier influencer marketing platform that bridges the gap between brands and creators. We help businesses grow through authentic partnerships and data-driven campaigns.

### ✨ Key Features

- 🎯 **Smart Influencer Matching** - AI-powered creator recommendations
- 📊 **Real-time Analytics** - Campaign performance tracking
- 🤝 **Direct Collaboration** - Seamless brand-creator communication
- 📈 **ROI Tracking** - Measure campaign effectiveness
- 🎨 **Content Management** - Centralized content library
- 💰 **Payment Processing** - Secure and timely payouts
- 📧 **Email Notifications** - Automated contact form email alerts
- 🧪 **SEO Optimized** - Search engine friendly architecture

---

## 🛠️ Built With

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **React Helmet** - SEO Optimization

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - API Framework
- **MongoDB** - Database
- **Nodemailer** - Email Service
- **JWT** - Authentication

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page]<img width="1883" height="807" alt="Screenshot 2026-06-21 222642" src="https://github.com/user-attachments/assets/aa8ba5af-7b85-436e-875c-b87fa62c1516" />


### 🎙️ About Section 
![About Page] <img width="1883" height="803" alt="Screenshot 2026-06-21 222811" src="https://github.com/user-attachments/assets/6fe8d18a-90a6-44e1-b727-af95123ec95f" />


### 📊 Creators
![Creators]!<img width="1876" height="757" alt="Screenshot 2026-06-21 222932" src="https://github.com/user-attachments/assets/e27fb6a1-479f-468d-9fdc-71957f8b139f" />

</div>

---

## 📁 Project Structure

```
Ai-Buzz/
│
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-192x192.png
│   │   ├── apple-touch-icon.png
│   │   └── logo.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Our-Misson.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Creators.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/
│   ├── controllers/
│   │   └── emailController.js
│   ├── models/
│   │   └── contactModel.js
│   ├── routes/
│   │   └── emailRoutes.js
│   ├── utils/
│   │   └── emailConfig.js
│   ├── index.js
│   └── package.json
│
├── .env
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js (v18 or higher)
npm (v9 or higher)
MongoDB (local or cloud)
Email Service (Gmail/Outlook)
```

### Installation

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/alok957641/Ai-Buzz.git
cd Ai-Buzz
```

#### 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### 3️⃣ Install Backend Dependencies

```bash
cd ../backend
npm install
```

#### 4️⃣ Environment Variables

**Frontend `.env` (frontend/):**

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-X
```

**Backend `.env` (backend/):**

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173

EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_RECEIVER=admin@aibuzz.media
```

#### 5️⃣ Start Development Server

**Frontend:**

```bash
cd frontend
npm run dev
```

**Backend:**

```bash
cd backend
npm run dev
```

#### 6️⃣ Build for Production

**Frontend:**

```bash
cd frontend
npm run build
```

**Backend:**

```bash
cd backend
npm run build
```

---

## 📧 Email System

### How Contact Form Works

1. User fills contact form on frontend
2. Data sent to backend API (`/api/contact`)
3. Backend validates and stores in MongoDB
4. Nodemailer sends email to admin
5. User receives confirmation email

### Email Configuration

```javascript
// backend/utils/emailConfig.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Send contact email |
| GET | `/api/contacts` | Get all contacts (admin) |

---

## 🌐 Live Demo

| Environment | URL |
|-------------|-----|
| **Production** | https://aibuzz.media |
| **Staging** | Coming Soon |
| **Development** | http://localhost:5173 |

---

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section |
| `/about` | About | Company information & mission |
| `/contact` | Contact | Get in touch form with email |
| `/creators` | Creators | Our influencer network |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Pink** | `#ec4899` | Primary gradient |
| **Purple** | `#8b5cf6` | Secondary gradient |
| **Blue** | `#3b82f6` | Accent color |
| **Black** | `#000000` | Background |
| **Gray** | `#9ca3af` | Text color |

---

## 📦 Dependencies

### Frontend Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "framer-motion": "^10.16.0",
  "react-helmet-async": "^2.0.0"
}
```

### Backend Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "nodemailer": "^6.9.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "multer": "^1.4.5"
}
```

---

## 🔧 Available Scripts

### Frontend

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Create production build

# Preview
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

### Backend

```bash
# Development
npm run dev          # Start dev server with nodemon

# Production
npm start            # Start production server
```

---

## 🌟 SEO & Performance

| Feature | Status |
|---------|--------|
| Meta Tags | ✅ Optimized |
| Open Graph | ✅ Ready |
| Sitemap.xml | ✅ Auto-generated |
| Robots.txt | ✅ Configured |
| Favicon | ✅ Multiple sizes |
| Structured Data | ✅ Schema.org |
| Lazy Loading | ✅ Images & components |
| Responsive Design | ✅ Mobile-first |

---

## 📈 SEO Score

| Metric | Score |
|--------|-------|
| **Performance** | 95+ |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 98 |

---

## 🚀 Deployment

### Deploy Frontend to Vercel

```bash
cd frontend
npm install -g vercel
vercel --prod
```

### Deploy Backend to Render

```bash
# Push code to GitHub
git push origin main

# Connect repository to Render
# Root Directory: backend
# Build Command: npm install
# Start Command: npm start
```

### Deploy Frontend to Netlify

```bash
cd frontend
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | JSON Web Token secret |
| `FRONTEND_URL` | Frontend URL for CORS |
| `EMAIL_USER` | Email address for sending |
| `EMAIL_PASSWORD` | Email app password |
| `EMAIL_RECEIVER` | Admin email address |

---

## 🤝 Contributing

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📞 Contact & Support

| Platform | Link |
|----------|------|
| **Website** |(https://aibuzz.media/) |
| **Email** |Support@aibuzz.media |
| **Instagram** | @aibuzz.media |

---

## 📄 License

This project is **proprietary and confidential**. All rights reserved by AiBuzz Media.

---

## 🙏 Acknowledgments

- React - UI Library
- Tailwind CSS - Styling
- Framer Motion - Animations
- Vite - Build Tool
- Nodemailer - Email Service

---

<div align="center">

**Built with ❤️ by Alok Kumar**

**[⬆ Back to Top](#)**

</div>
