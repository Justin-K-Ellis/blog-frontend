import { NavLink } from "react-router";

function Tag({ text, name }) {
  return (
    <NavLink to={`tags/${name}`}>
      <p className="border border-solid border-black rounded-xl p-1 w-fit hover:bg-black hover:text-white">
        {text}
      </p>
    </NavLink>
  );
}

export default Tag;
