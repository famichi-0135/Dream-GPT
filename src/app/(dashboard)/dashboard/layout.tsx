import { Navbar } from "@/components/navbar";
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
        <div className="w-55 shrink-0 border-r-1 border-r-gray-300">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-auto p-8 pb-0 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
