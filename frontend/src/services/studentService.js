import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL +"/api/students",
});

// GET all students
export const getStudents = () => API.get("/");

// GET single student
export const getStudent = (id) => API.get(`/${id}`);

// CREATE student (with photo)

export const createStudent = (data) =>
  API.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// UPDATE student
export const updateStudent = (id, data) =>
  API.put(`/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


// DELETE student
export const deleteStudent = (id) => API.delete(`/${id}`);
