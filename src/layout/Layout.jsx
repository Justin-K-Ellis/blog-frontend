import { Outlet } from "react-router";

import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <div className="md:w-1/2 w-11/12">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
