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
    <div className="p-2">
      <h2 className="my-2 text-center text-xl font-bold">{post.title}</h2>
      <p className="mb-2 text-justify">{postPreview}</p>
      <p className="text-slate-500">
        Posted by {post.author.username} on {date}
      </p>
      <p>{tags}</p>
    </div>
  );
}

export default PostPreviewCard;
