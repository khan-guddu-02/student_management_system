# 🎓 Student Management System

A full-stack **Student Management System** built as part of the **Junior Full Stack Developer Assessment Task (Pillai University)**.
This application allows users to manage student records with complete CRUD functionality, including photo uploads and unique admission number generation.

---

## 🚀 Features

### 🔹 Student Management

* ➕ Add new student
* 📝 Edit / Update student details
* 📋 View all students
* ❌ Delete student
* 📸 Upload student photo

### 🔹 Unique Admission Number

* Auto-generated admission number
* Ensures uniqueness for each student

### 🔹 Additional Features

* Form validation (Frontend & Backend)
* Responsive UI
* Clean and structured codebase

---

## 🧰 Tech Stack

### Frontend

* React.js (Vite)
* Axios
* Bootstrap / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📁 Project Structure

```
student-management-system/
│
├── client/              # Frontend (React)
│   ├── src/
│   ├── components/
│   ├── pages/
│
├── server/              # Backend (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/
│
├── uploads/             # Student photos
├── .env
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/student-management-system.git
cd student-management-system
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

#### Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### Start Backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

### 📌 Student APIs

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /students     | Get all students   |
| GET    | /students/:id | Get single student |
| POST   | /students     | Create new student |
| PUT    | /students/:id | Update student     |
| DELETE | /students/:id | Delete student     |

---

## 🗄️ Database Design (MongoDB Schema)

### Student Schema

```js
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  gender: { type: String },
  address: { type: String },
  admissionNumber: { type: String, unique: true },
  photo: { type: String }
}, { timestamps: true });
```

---

## 🔑 Key Functional Logic

### Admission Number Generation

* Automatically generated for each student
* Format example: **ADM001, ADM002**
* Ensured uniqueness using database checks

---

## 🌐 Deployment (Optional)

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 📸 Screenshots (Optional)

*Add screenshots here for UI preview*

---

## 📌 Submission Details

* GitHub Repository Link: *(Add here)*
* Hosted Website Link: *(If deployed)*

---

## 👨‍💻 Author

**Gareeb Nawaz**
MERN Stack Developer

---

## ⭐ Notes

* Built using MERN stack principles
* Clean and maintainable code structure
* Proper API integration between frontend and backend
* Environment variables used for sensitive data
* Scalable architecture for future enhancements

---
