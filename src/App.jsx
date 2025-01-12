import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import TaggedPosts from "./pages/TaggedPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="posts">
          <Route path=":postId/:slug" element={<SinglePost />} />
        </Route>
        <Route path="tags">
          <Route path=":tag" element={<TaggedPosts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
