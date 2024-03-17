import Link from "next/link";
import LogoutButton from "../buttons/auth/LogoutButton";

type SidebarNavigationItems = {
    name: string
    uri: string
}


const navigationItems: SidebarNavigationItems[] = [
    {
        name: "Admin Profile",
        uri: "/portal/admin"
    },
    {
        name: "Workers",
        uri: "/portal/admin/workers"
    },
    {
        name: "Streams",
        uri: "/portal/admin/streams"
    }

]

type Props = {};

const AdminSidebar = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
        {
            navigationItems.map((item) => (
                <Link href={item.uri} key={item.uri} className="py-2 hover:bg-white hover:text-black active:bg-white/80 rounded-md flex justify-center item-center transition-all duration-300">
                    <div>
                        <p>{item.name}</p>
                    </div>
                </Link>
            ))
        }
        <LogoutButton />
    </div>
  );
};

export default AdminSidebar;
