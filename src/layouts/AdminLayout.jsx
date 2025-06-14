import { Outlet } from "react-router-dom";
import Sidebar from "../components/Common/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role="admin" />
      <main className="flex-1 overflow-y-auto bg-[#0a0025] text-white p-8">
        <div className="pt-16 md:pt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
