// import { NavLink } from "react-router";

function Tag({ text }) {
  return (
    // <NavLink
    //   to={`tags/${name}`}
    //   className={({ isActive }) =>
    //     isActive ? "bg-black" : "bg-white text-black"
    //   }
    // >
    <p className="border border-solid border-black rounded-xl p-1 w-fit hover:bg-black hover:text-white">
      {text}
    </p>
    // <p>{text}</p>
    // </NavLink>
  );
}

export default Tag;
