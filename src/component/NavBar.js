import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink className="nav" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/page404">
            Page404
          </NavLink>{" "}
        </li>
      </ul>
    </>
  );
}
export default NavBar;
