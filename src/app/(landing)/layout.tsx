import MobileLandingNavbar from "@/components/navbar/LandingPage/MobileLandingNavbar";
import LandingNavbar from "@/components/navbar/LandingPage/LandingNavbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <MobileLandingNavbar className="lg:hidden" />
      <LandingNavbar className="hidden lg:block" />
      {children}
    </section>
  );
}
