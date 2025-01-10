import { useState, useEffect } from "react";
import { useParams } from "react-router";

import PostContent from "../components/PostContent";

function SinglePost() {
  const [post, setPost] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { postId } = useParams();
  const apiUri = import.meta.env.VITE_API;

  useEffect(() => {
    async function getPostData() {
      try {
        const response = await fetch(`api/${apiUri}/posts/${postId}`);
        if (!response.ok) {
          setIsError(true);
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.log(`There was an error: ${error}.`);
        setIsError(true);
      }
    }
    getPostData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <p className="text-xl">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center">
        <p className="text-xl">Sorry, something went wrong :(</p>
      </div>
    );

  return <PostContent post={post} />;
}

export default SinglePost;
