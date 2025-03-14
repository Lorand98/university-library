import { auth } from "@/auth";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar"
import "@/styles/admin.css";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user?.id) redirect("/sign-in");
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />

      <div className="admin-container">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;
