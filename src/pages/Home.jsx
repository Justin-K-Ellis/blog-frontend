import { useState, useEffect } from "react";

import PostPreviewCard from "../components/PostPreviewCard";
import Title from "../components/Title";

function Home() {
  const [posts, setPosts] = useState([]);
  const apiUri = import.meta.env.VITE_API;

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`${apiUri}/api/posts`);
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <>
      <Title text={"Latest Posts"} />
      {posts.map((post) => {
        return <PostPreviewCard key={post.id} post={post} />;
      })}
    </>
  );
}

export default Home;
