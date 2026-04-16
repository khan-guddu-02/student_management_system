import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          🎓 StudentMS
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link fw-semibold " +
                  (isActive ? "text-warning" : "text-light")
                }
              >
                Home
              </NavLink>
            </li>

            {/* Add Student Button */}
            <li className="nav-item">
              <NavLink
                to="/add"
                className="btn btn-primary px-3"
              >
                + Add Student
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;