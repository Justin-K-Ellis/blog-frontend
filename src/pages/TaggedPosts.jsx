import { useState, useEffect } from "react";
import { useParams } from "react-router";

import PostPreviewCard from "../components/PostPreviewCard";
import Title from "../components/Title";

function TaggedPosts() {
  const [taggedPosts, setTaggedPosts] = useState([]);
  const [error, setError] = useState(false);
  const { tag } = useParams();
  const apiUri = import.meta.env.VITE_API + `/api/tags/name/${tag}`;

  useEffect(() => {
    async function getTaggedPosts() {
      try {
        const response = await fetch(apiUri);
        const data = await response.json();
        setTaggedPosts(data[0].posts);
      } catch (error) {
        console.log(`There was an error when fetching tagged posts. ${error}`);
        setError(true);
      }
    }
    getTaggedPosts();
  }, [apiUri]);

  if (error) return <p>Sorry, something went wrong :(</p>;
  taggedPosts && console.log(taggedPosts);
  console.log("tag:", tag);

  return (
    <>
      <Title text={tag} />
      <ul>
        {taggedPosts.map((post) => {
          return (
            <li key={post.id}>
              <PostPreviewCard post={post} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TaggedPosts;
