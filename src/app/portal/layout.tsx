import MobilePortalNavbar from "@/components/navbar/PortalPage/MobilePortalNavbar";
import PortalSidebarNavbar from "@/components/navbar/PortalPage/PortalSidebarNavbar";

export default function PortalLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full min-h-screen">
            <MobilePortalNavbar className="lg:hidden" />
            <PortalSidebarNavbar className="hidden lg:block" />
            {children}
        </section>
    );
}
