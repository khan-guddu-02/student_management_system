import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

function Home() {
const [students, setStudents] = useState([]);

const fetchStudents = async () => {
const res = await getStudents();
setStudents(res.data.data);
};

const handleDelete = async (id) => {
if (window.confirm("Are you sure to delete?")) {
await deleteStudent(id);
fetchStudents();
}
};

useEffect(() => {
fetchStudents();
}, []);

return ( <div className="container py-4">
{/* Header */} <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3"> <h2 className="fw-bold text-primary">🎓 Student List</h2>

    <Link to="/add" className="btn btn-primary px-4 shadow-sm">
      + Add Student
    </Link>
  </div>

  {/* Card */}
  <div className="card shadow-lg border-0 rounded-4">
    <div className="card-body">

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="table align-middle table-hover text-center">

          <thead className="table-dark">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Course</th>
              <th>Year</th>
              <th className="d-none d-md-table-cell">Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((s) => (
                <tr key={s._id}>

                  {/* Photo */}
                  <td>
                    {s.photo ? (
                      <img
                        src={s.photo}
                        alt="student"
                        className="rounded-circle shadow-sm"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          border: "2px solid #eee"
                        }}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-light rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      >
                        👤
                      </div>
                    )}
                  </td>

                  {/* Name */}
                  <td className="fw-semibold">{s.name}</td>

                  {/* Course */}
                  <td>{s.course}</td>

                  {/* Year */}
                  <td>{s.year}</td>

                  {/* Email (hidden on mobile) */}
                  <td
                    className="d-none d-md-table-cell"
                    title={s.email}
                    style={{
                      maxWidth: "180px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {s.email}
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="d-flex flex-wrap justify-content-center gap-2">

                      <Link
                        to={`/view/${s._id}`}
                        className="btn btn-info btn-sm px-3"
                      >
                        View
                      </Link>

                      <Link
                        to={`/edit/${s._id}`}
                        className="btn btn-warning btn-sm px-3"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm px-3"
                        onClick={() => handleDelete(s._id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No Students Found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  </div>
</div>
);
}

export default Home;
