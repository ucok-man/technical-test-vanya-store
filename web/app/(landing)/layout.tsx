import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main className="mb-24">{children}</main>
      <Footer />
    </div>
  );
}
