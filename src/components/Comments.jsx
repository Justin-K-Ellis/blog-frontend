import CommentCard from "./CommentCard";

function Comments({ comments }) {
  if (comments.length === 0)
    return <p className="font-thin italic my-2">No comments.</p>;

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <CommentCard comment={comment} />
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
