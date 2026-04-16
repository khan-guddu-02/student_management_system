import { useState, useEffect } from "react";

function StudentForm({ initialData = {}, onSubmit }) {
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

  // ✅ Fix: properly merge initialData
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setForm((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null && form[key] !== "") {
        formData.append(key, form[key]);
      }
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">

      {/* Name */}
      <div className="col-12 col-md-6">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          name="name"
          placeholder="Enter name"
          value={form.name}
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
          value={form.course}
          onChange={handleChange}
          required
        />
      </div>

      {/* Year */}
      <div className="col-12 col-md-4">
        <label className="form-label">Year</label>
        <input
          className="form-control"
          name="year"
          type="number"
          placeholder="Enter year"
          value={form.year}
          onChange={handleChange}
          required
        />
      </div>

      {/* DOB */}
      <div className="col-12 col-md-4">
        <label className="form-label">DOB</label>
        <input
          className="form-control"
          name="dob"
          type="date"
          value={form.dob ? form.dob.substring(0, 10) : ""}
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender */}
      <div className="col-12 col-md-4">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      {/* Email */}
      <div className="col-12 col-md-6">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
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
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </div>

      {/* Address */}
      <div className="col-12">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          name="address"
          rows="2"
          placeholder="Enter address"
          value={form.address}
          onChange={handleChange}
          required
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

      {/* Button */}
      <div className="col-12 text-center mt-3">
        <button className="btn btn-success px-5">
          Submit
        </button>
      </div>

    </form>
  );
}

export default StudentForm;