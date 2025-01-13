import { useState, useEffect } from "react";

import { Link } from "react-router";
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
    <section className="mr-12">
      <h2>Tags</h2>
      <ul className="flex flex-col gap-2">
        {tags?.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={`tags/${tag.name}`}>
                <Tag text={tag.name} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TagsSideBar;
