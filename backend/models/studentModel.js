import mongoose from "mongoose";

//  Student Schema
const studentSchema = new mongoose.Schema(
  {
    admissionNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },

    year: {
      type: Number,
      required: [true, "Year is required"],
      min: [1, "Year must be at least 1"],
      max: [5, "Year cannot exceed 5"],
    },

    dob: {
      type: Date,
      required: [true, "Date of Birth is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please use a valid email address",
      ],
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian mobile number",
      ],
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },

    photo: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, 
  }
);



const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

export { Student };

