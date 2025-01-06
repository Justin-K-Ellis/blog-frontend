function trimPost(post) {
  const postArray = post.split(" ");
  const shortedArray = postArray.slice(0, 99);
  return shortedArray.join(" ") + "...";
}

export default trimPost;
