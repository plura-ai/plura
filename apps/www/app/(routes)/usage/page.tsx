import UsageHome from "@/components/custom/usage-home";
import LeftSidebar from "@/components/ui/Leftsidebar";
import RightSidebar from "@/components/ui/Rightsidebar";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function UsagePage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden">
        <div className="w-full lg:w-[20rem] p-4 lg:p-6 hidden lg:block">
          <LeftSidebar />
        </div>
        <ScrollArea>
          <div className="flex-1 w-full p-4 lg:p-0 ">
            <UsageHome />
            <UsageHome />
            <UsageHome />
          </div>
        </ScrollArea>
        <div className="w-full lg:w-[16rem] p-4 hidden lg:block">
          <RightSidebar />
        </div>
      </div>
      <hr className="w-full border" />
    </div>
  );
}
