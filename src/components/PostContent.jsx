import processDate from "../services/processDate";

import Back from "./Back";
import PostTitle from "./PostTitle";

function PostContent({ post }) {
  const date = processDate(post.postedOn);

  return (
    <div>
      <PostTitle text={post.title} />
      <h3 className="underline text-right my-2 font-light">
        Posted by {post.author.username} on {date}
      </h3>
      <p className="text-justify">{post.content}</p>
      <Back />
    </div>
  );
}

export default PostContent;
