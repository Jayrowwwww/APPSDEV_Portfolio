import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar/index";
import Footer from "@/components/common/Footer/index";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
