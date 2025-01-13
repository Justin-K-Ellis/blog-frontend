import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import TagsSideBar from "../components/TagsSidebar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flew-row">
        <main className="flex flex-col items-center">
          <div className="md:w-1/2 w-11/12">
            <Outlet />
          </div>
        </main>
        <TagsSideBar />
      </div>
    </>
  );
}

export default Layout;
