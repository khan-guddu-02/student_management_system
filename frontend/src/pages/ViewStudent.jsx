import { useEffect, useState } from "react";
import { getStudent } from "../services/studentService";
import { useParams, Link } from "react-router-dom";

function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    getStudent(id).then((res) => setStudent(res.data.data));
  }, [id]);

  if (!student)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Loading...</p>
      </div>
    );

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <div className="card shadow-lg border-0 p-4">

            {/* Profile Image */}
            <div className="text-center mb-3">
              {student.photo ? (
                <img
                  src={`${student.photo}`}
                  alt="student"
                  className="rounded-circle shadow"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    border: "3px solid #0d6efd"
                  }}
                />
              ) : (
                <div className="text-muted">No Image</div>
              )}
            </div>

            {/* Name */}
            <h3 className="text-center fw-bold text-primary mb-3">
              {student.name}
            </h3>

            <hr />

            {/* Details */}
            <div className="row g-2">

              <div className="col-12">
                <strong>Admission No:</strong> {student.admissionNo}
              </div>

              <div className="col-12 col-md-6">
                <strong>Course:</strong> {student.course}
              </div>

              <div className="col-12 col-md-6">
                <strong>Year:</strong> {student.year}
              </div>

              <div className="col-12">
                <strong>Email:</strong> <span className="text-break">{student.email}</span>
              </div>

              <div className="col-12 col-md-6">
                <strong>Mobile:</strong> {student.mobile}
              </div>

              <div className="col-12 col-md-6">
                <strong>Gender:</strong> {student.gender}
              </div>

              <div className="col-12 col-md-6">
                <strong>DOB:</strong> {new Date(student.dob).toLocaleDateString()}
              </div>

              <div className="col-12">
                <strong>Address:</strong> {student.address}
              </div>

            </div>

            {/* Back Button */}
            <div className="text-center mt-4">
              <Link to="/" className="btn btn-outline-primary px-4">
                ← Back
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
