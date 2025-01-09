function CommentCard({ comment }) {
  return (
    <div className="rounded bg-slate-100 my-1 p-2">
      <p className="underline">{comment.author.username}</p>
      <p>{comment.content}</p>
    </div>
  );
}

export default CommentCard;
