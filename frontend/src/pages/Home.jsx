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

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-2">
        <h2 className="fw-bold text-primary">Student List</h2>

        <Link to="/add" className="btn btn-primary px-4">
          + Add Student
        </Link>
      </div>

      {/* Card Wrapper */}
      <div className="card shadow-lg border-0">
        <div className="card-body">
          {/* Table */}
          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead className="table-dark text-center">
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Year</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {students.length > 0 ? (
                  students.map((s) => (
                    <tr key={s._id} className="text-center">
                      {/* Photo */}
                      <td>
                        {s.photo ? (
                          <img
                            src={`${s.photo}`}
                            alt="student"
                            className="rounded-circle shadow-sm"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <span className="text-muted">No Image</span>
                        )}
                      </td>

                      <td className="fw-semibold">{s.name}</td>
                      <td>{s.course}</td>
                      <td>{s.year}</td>
                      <td className="text-break">{s.email}</td>

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
 
