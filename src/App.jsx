import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="posts">
          <Route path=":postId" element={<SinglePost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
