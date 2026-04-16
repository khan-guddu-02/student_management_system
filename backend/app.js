import express from "express";
import studentRoutes from "./routes/studentRoute.js";
import cors from 'cors';



const app = express();

app.use(cors({
  origin: "https://student-management-system-inky-seven.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/students",studentRoutes)

export default app;
