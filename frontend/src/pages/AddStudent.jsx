import { useState } from "react";
import { createStudent } from "../services/studentService";
import { useNavigate, Link } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    course: "",
    year: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setForm({ ...form, photo: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null && form[key] !== "") {
        formData.append(key, form[key]);
      }
    });

    await createStudent(formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">

          <div className="card shadow-lg border-0 p-4">
            <h3 className="text-center text-success fw-bold mb-4">
              Add Student
            </h3>

            <form onSubmit={handleSubmit} className="row g-3">

              {/* Name */}
              <div className="col-12 col-md-6">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Course */}
              <div className="col-12 col-md-6">
                <label className="form-label">Course</label>
                <input
                  className="form-control"
                  name="course"
                  placeholder="Enter course"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Year */}
              <div className="col-12 col-md-6">
                <label className="form-label">Year</label>
                <select
                  className="form-select"
                  name="year"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              {/* DOB */}
              <div className="col-12 col-md-6">
                <label className="form-label">DOB</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="col-12 col-md-6">
                <label className="form-label">Mobile</label>
                <input
                  className="form-control"
                  name="mobile"
                  placeholder="Enter mobile"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Gender */}
              <div className="col-12 col-md-6">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Address */}
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  rows="2"
                  placeholder="Enter address"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Photo */}
              <div className="col-12">
                <label className="form-label">Upload Photo</label>
                <input
                  className="form-control"
                  type="file"
                  name="photo"
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="col-12 d-flex justify-content-between mt-3">
                <Link to="/" className="btn btn-outline-secondary px-4">
                  Cancel
                </Link>

                <button className="btn btn-success px-4">
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddStudent;