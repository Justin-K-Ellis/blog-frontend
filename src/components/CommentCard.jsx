function CommentCard({ comment }) {
  return (
    <div className="rounded bg-white my-1 p-2">
      <p className="underline">{comment.author.username}</p>
      <p>{comment.content}</p>
    </div>
  );
}

export default CommentCard;
