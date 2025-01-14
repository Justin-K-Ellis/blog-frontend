import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-2">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Logical Space 🪐</h1>
        <p className="italic font-light">
          Exploring the space of reasons in philosophy and programming
        </p>
      </div>
      <ul className="flex flex-row text-xl gap-4">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
