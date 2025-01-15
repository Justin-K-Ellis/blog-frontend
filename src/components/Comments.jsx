import CommentCard from "./CommentCard";

function Comments({ comments }) {
  if (comments.length === 0)
    return <p className="font-thin italic my-2">No comments.</p>;

  return (
    <section className="rounded-lg bg-slate-100 my-1 p-2">
      <h3 className="font-bold">Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="rounded bg-slate-100 my-1 p-2">
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
