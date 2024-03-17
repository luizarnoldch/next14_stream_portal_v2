import AdminNavbar from "@/components/navbars/AdminNavbar";
import AdminSidebar from "@/components/navbars/AdminSidebar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full rounded-lg"
    >
      <ResizablePanel defaultSize={18} className="max-w-xs min-w-40">
        <div className="flex h-screen items-center justify-center p-6">
          {/* <AdminNavbar /> */}
          <AdminSidebar />
        </div>
      </ResizablePanel>
      <ResizableHandle className="w-[1px] bg-white/80" />
      <ResizablePanel defaultSize={82}>
        <div className="flex h-full items-center justify-center p-6">
          {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default AdminLayout;
