function makeSlug(text) {
  const result = text
    .toLowerCase()
    .replaceAll("the", "")
    .replaceAll(" ", "-")
    .replaceAll("--", "-");
  if (result[0] === "-") {
    return result.slice(1, result.length);
  } else {
    return result;
  }
}

export default makeSlug;
