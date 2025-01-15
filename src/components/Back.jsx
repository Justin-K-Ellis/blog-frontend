import { Link } from "react-router";

function Back() {
  return (
    <div className="flex justify-center items-center my-4 font-light text-xl">
      <Link to={"/"} className="underline">
        Home
      </Link>
    </div>
  );
}

export default Back;
