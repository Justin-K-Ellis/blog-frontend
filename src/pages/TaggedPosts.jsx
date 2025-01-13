import { useParams } from "react-router";

function TaggedPosts() {
  const { tag } = useParams();
  return <h2>All Posts for {tag}.</h2>;
}

export default TaggedPosts;
