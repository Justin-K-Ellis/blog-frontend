import { Link } from "react-router";

import PostTitle from "../components/PostTitle";
import Tag from "./Tag";

import processDate from "../services/processDate";
import trimPost from "../services/trimPost";
import makeSlug from "../services/makeSlug";

function PostPreviewCard({ post }) {
  const date = processDate(post.postedOn);
  const postPreview = trimPost(post.content);
  const tags =
    post.tags.length !== 0
      ? post.tags.map((tag) => <Tag key={tag.id} text={tag.name} />)
      : "No tags";
  const slug = makeSlug(post.title);

  return (
    <div className="p-4 hover:shadow">
      <PostTitle text={post.title} />
      <p className="mb-2 text-justify font-notoSerif">{postPreview}</p>
      <Link className="text-red-500" to={`posts/${post.id}/${slug}`}>
        Read more
      </Link>
      <div className="font-light">
        <p className="text-slate-500">
          Posted by {post.author.username} on {date}
        </p>
        <div className="flex flex-row gap-2">{tags}</div>
        <p>{post._count.comments} comments</p>
      </div>
      <hr className="mt-8" />
    </div>
  );
}

export default PostPreviewCard;
