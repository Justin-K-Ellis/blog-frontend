import { Link } from "react-router";

import PostTitle from "../components/PostTitle";

import processDate from "../services/processDate";
import trimPost from "../services/trimPost";

function PostPreviewCard({ post }) {
  const date = processDate(post.postedOn);
  const postPreview = trimPost(post.content);
  const tags =
    post.tags.length !== 0
      ? "Tags: " + post.tags.map((tag) => tag.name + ", ")
      : "No tags";

  return (
    <div className="p-4 hover:shadow">
      <PostTitle text={post.title} />
      <p className="mb-2 text-justify">{postPreview}</p>
      <Link className="text-red-500" to={`posts/${post.id}`}>
        Read more
      </Link>
      <div className="font-light">
        <p className="text-slate-500">
          Posted by {post.author.username} on {date}
        </p>
        <p>{tags}</p>
        <p>{post._count.comments} comments</p>
      </div>
      <hr className="mt-8" />
    </div>
  );
}

export default PostPreviewCard;
