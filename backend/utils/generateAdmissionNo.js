import { Student } from "../models/studentModel.js";

const generateAdmissionNumber = async () => {
  try {
    const lastStudent = await Student.findOne().sort({ createdAt: -1 });

    let newAdmissionNo = "ADM001";

    if (lastStudent && lastStudent.admissionNo) {
      const lastNumber = parseInt(lastStudent.admissionNo.replace("ADM", ""));
      const nextNumber = lastNumber + 1;

      newAdmissionNo = `ADM${nextNumber.toString().padStart(3, "0")}`;
    }

    return newAdmissionNo;

  } catch (error) {
    console.error("ERROR generating admission number:", error);
    throw new Error("Failed to generate admission number");
  }
}

export default generateAdmissionNumber ;