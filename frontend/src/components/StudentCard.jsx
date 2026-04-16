import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 shadow border-0 student-card">

        {/* Image */}
        <div className="text-center mt-4">
          {student.photo ? (
            <img
              src={`http://localhost:5000/${student.photo}`}
              alt="student"
              className="rounded-circle shadow"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                border: "3px solid #0d6efd",
              }}
            />
          ) : (
            <div className="text-muted">No Image</div>
          )}
        </div>

        {/* Body */}
        <div className="card-body text-center">

          <h5 className="fw-bold mb-1">{student.name}</h5>

          <p className="mb-1 text-secondary">{student.course}</p>

          <p className="text-muted small">
            Year: <span className="fw-semibold">{student.year}</span>
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">

            <Link
              to={`/view/${student._id}`}
              className="btn btn-outline-info btn-sm px-3"
            >
              View
            </Link>

            <Link
              to={`/edit/${student._id}`}
              className="btn btn-outline-warning btn-sm px-3"
            >
              Edit
            </Link>

            <button
              className="btn btn-outline-danger btn-sm px-3"
              onClick={() => onDelete(student._id)}
            >
              Delete
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;