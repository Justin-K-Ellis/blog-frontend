function Tag({ text }) {
  return (
    <p className="border border-solid border-black rounded-xl p-1 w-fit hover:bg-black hover:text-white">
      {text}
    </p>
  );
}

export default Tag;
