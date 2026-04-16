import { Student } from "../models/studentModel.js";
import path from "path";
import fs from "fs";

import generateAdmissionNumber from "../utils/generateAdmissionNo.js";

// ADD STUDENT (with photo upload)

export const createStudent = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    const { name, course, year, dob, email, mobile, gender, address } =
      req.body;

    //  Basic Validation
    if (!name || !course || !year || !dob || !email || !mobile) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    //  Check duplicate email
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student with this email already exists",
      });
    }

    // Generate Admission Number
    const admissionNo = await generateAdmissionNumber();

    // Handle photo upload
    let photo = null;

    if (req.file) {
       photo = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }
    console.log("step1")
    const student = await Student.create({
      admissionNo,
      name,
      course,
      year: Number(year),
      dob: new Date(dob),
      email,
      mobile,
      gender,
      address,
      photo,
    });
      console.log("step2")
    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  }catch (error) {
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `${field} already exists`,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Server error",
  });
}
};

// GET ALL STUDENTS

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.error("Get All Students Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//  GET SINGLE STUDENT

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.error("Get Student Error:", error);
    return res.status(500).json({
      success: false,
      message: "Invalid ID or Server error",
    });
  }
};

// . UPDATE STUDENT

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    let student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // If new photo uploaded
    if (req.file) {
      if (student.photo) {
        const oldFileName = student.photo.split("/uploads/")[1];

        if (oldFileName) {
          const oldPath = path.join(process.cwd(), "uploads", oldFileName);

          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
      }

      //  NEW FIXED URL
      req.body.photo = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      {
        ...req.body,
        year: Number(req.body.year),
        dob: new Date(req.body.dob),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });

  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

  return res.status(500).json({
    success: false,
    message: "Server error",
  });
}
};
// DELETE STUDENT
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Delete photo from folder
    if (student.photo && fs.existsSync(student.photo)) {
      fs.unlinkSync(student.photo);
    }

    await Student.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("Delete Student Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
