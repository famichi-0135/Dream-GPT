import { Navbar } from "@/components/navbar";
import { Menu } from "@/components/part/humbergar";
import { RepSideBar } from "@/components/responsibleSidebar";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-55 shrink-0 border-r-1 border-r-gray-300 hidden md:block">
          <Sidebar />
        </div>
        <div className="block md:hidden flex absolute m-4 right-0">
          <RepSideBar />
        </div>
        <main className="flex-1 overflow-auto p-8 pb-0 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
