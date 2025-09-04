import { ReactNode } from "react";
import Footer from "components/sections/Footer";
import Navigation from "components/sections/Navigation";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex flex-grow flex-col">{children}</main>
      <Footer />
    </div>
  );
}

