import { Outlet } from "react-router";
import "@/src/ui/App.css";

function Layout() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default Layout;
