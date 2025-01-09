import processDate from "../services/processDate";

import Back from "./Back";
import Comments from "./Comments";
import PostTitle from "./PostTitle";

function PostContent({ post }) {
  const date = processDate(post.postedOn);

  return (
    <div>
      <PostTitle text={post.title} />
      <h3 className="underline text-right my-2 font-light">
        Posted by {post.author.username} on {date}
      </h3>
      <p className="text-justify font-notoSerif">{post.content}</p>
      {<Comments comments={post.comments} />}
      <Back />
    </div>
  );
}

export default PostContent;
