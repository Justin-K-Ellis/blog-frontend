import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import TagsSideBar from "../components/TagsSidebar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <main className="flex flex-col items-center md:w-4/5">
          <div className="md:w-1/2 w-11/12">
            <Outlet />
          </div>
        </main>
        <TagsSideBar className="md:w-1/5" />
      </div>
    </>
  );
}

export default Layout;
