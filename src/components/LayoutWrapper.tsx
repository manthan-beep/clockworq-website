"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AkiraChatbot from "@/components/AkiraChatbot";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className={!isDashboard ? "pt-20" : ""}>{children}</div>
      {!isDashboard && <Footer />}
      <AkiraChatbot />
    </>
  );
}