import { useState, useEffect } from "react";

import { Link } from "react-router";
import { NavLink } from "react-router";
import Tag from "./Tag";

function TagsSideBar() {
  const [tags, setTags] = useState([]);
  const apiUri = import.meta.env.VITE_API;

  useEffect(() => {
    async function getTags() {
      const response = await fetch(`${apiUri}/api/tags/list`);
      const data = await response.json();
      setTags(data);
    }

    getTags();
  }, []);

  return (
    <section className="md:mr-12 p-2">
      <h2>Tags</h2>
      <ul className="flex flex-row md:flex-col gap-2">
        {tags?.map((tag) => {
          return (
            <li key={tag.id}>
              <NavLink
                to={`tags/${tag.name}`}
                className={({ isActive }) => (isActive ? "border-double" : "")}
              >
                <Tag text={tag.name} name={tag.name} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TagsSideBar;
