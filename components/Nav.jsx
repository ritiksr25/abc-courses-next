import NavLink from "react-bootstrap/NavLink";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        background: "#fff!important",
      }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand tag text-left"
          style={{
            fontWeight: "700",
            color: "#000000",
            fontSize: "25px",
          }}
          href="/"
        >
          ABC COURSES
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto nav justify-content-end custom_nav"
            style={{ width: "100%" }}
          >
            <li className="nav-item">
              <NavLink className="nav-link " href="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " href="/courses">
                Courses
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
