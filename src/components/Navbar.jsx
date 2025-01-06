import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-2">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <ul className="flex flex-row text-xl gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
