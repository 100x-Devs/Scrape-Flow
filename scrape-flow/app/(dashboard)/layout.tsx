import type { FC, ReactNode } from "react";

import { Separator } from "@/components/ui/separator";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileSidebar from "@/components/MobileSidebar";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { ModeToggle } from "@/components/ThemeToggle";

type Props = { children: ReactNode };

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-[50px] items-center justify-between px-6 py-4">
          <MobileSidebar />
          <BreadcrumbHeader />

          <div className="flex items-center gap-1 gap-x-2">
            <ModeToggle />
          </div>
        </header>

        <Separator />

        <div className="overflow-auto">
          <div className="container flex-1 py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
