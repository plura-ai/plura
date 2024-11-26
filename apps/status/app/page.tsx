import StatusCard from "@/components/custom/status.card";
import { Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-full w-full items-center justify-center my-10 overflow-auto">
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(211,211,211,0.15),rgba(255,255,255,0))]" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="p-2 bg-secondary rounded-full">
        <Activity className="size-8 text-green-500"/>
        </div>
      <h1 className="text-4xl font-bold">All services are online</h1>
      <span className="text-sm text-muted-foreground">Last updated on Nov 16 at 10:36am IST</span>
      </div>
      <div className="flex w-full h-full px-10 md:px-40">
      <StatusCard/>
      </div>
    </div>
  );
}
