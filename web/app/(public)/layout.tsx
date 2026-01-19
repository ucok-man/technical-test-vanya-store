import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="h-screen"></div>
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  );
}
