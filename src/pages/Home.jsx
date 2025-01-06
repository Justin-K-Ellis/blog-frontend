import { useState, useEffect } from "react";

import PostPreviewCard from "../components/PostPreviewCard";
import Title from "../components/Title";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <main className="flex flex-col items-center">
      <div className="md:w-1/2 w-11/12">
        <Title text={"Latest Posts"} />
        {posts.map((post) => {
          return <PostPreviewCard key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}

export default Home;
