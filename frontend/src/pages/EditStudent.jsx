import { useEffect, useState } from "react";
import { getStudent, updateStudent } from "../services/studentService";
import { useNavigate, useParams, Link } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    getStudent(id).then((res) => setForm(res.data.data));
  }, [id]);

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
      formData.append(key, form[key]);
    });

    await updateStudent(id, formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">

          <div className="card shadow-lg border-0 p-4">
            <h3 className="text-center text-warning fw-bold mb-4">
              Edit Student
            </h3>

            <form onSubmit={handleSubmit} className="row g-3">

              {/* Name */}
              <div className="col-12 col-md-6">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={form.name || ""}
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
                  value={form.course || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Year */}
              <div className="col-12 col-md-6">
                <label className="form-label">Year</label>
                <input
                  className="form-control"
                  name="year"
                  value={form.year || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* DOB */}
              <div className="col-12 col-md-6">
                <label className="form-label">DOB</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name="email"
                  value={form.email || ""}
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
                  value={form.mobile || ""}
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
                  value={form.gender || ""}
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
                  value={form.address || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Photo */}
              <div className="col-12">
                <label className="form-label">Upload Photo</label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="col-12 d-flex justify-content-between mt-3">
                <Link to="/" className="btn btn-outline-secondary px-4">
                  Cancel
                </Link>

                <button className="btn btn-warning px-4">
                  Update
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditStudent;