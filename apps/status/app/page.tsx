"use client";
import { useEffect, useState } from "react";
import StatusCard from "@/components/custom/status.card";
import { StatusData } from "@/components/custom/status.tracker";
import { Activity } from "lucide-react";

interface StatusT {
  timestamp: string;
  latencies: {
    WEB: number;
    API: number;
    APP: number;
  };
  statuses: {
    WEB: string;
    API: string;
    APP: string;
  };
  totalLatency: number;
  operationCount: number;
  averageLatency: number;
}

const Page = () => {
  const [webStatus, setWebStatus] = useState<StatusData[]>([]);
  const [apiStatus, setApiStatus] = useState<StatusData[]>([]);
  const [appStatus, setAppStatus] = useState<StatusData[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    
    const BASE_API =
  process.env.NODE_ENV === "production"
    ? "https://api.plura.pro"
    : "http://localhost:3001";

    const fetchStatusData = async () => {
      try {
        setIsFetching(true);
        const siteResponse = await fetch(`${BASE_API}/v1/status/site`);
        const data = await siteResponse.json();
  
        if (data.siteStatus && data.siteStatus.length > 0) {
          const today = new Date().toISOString().split("T")[0];
  
          const todayStatus = data.siteStatus.filter((status: StatusT) =>
            status.timestamp.startsWith(today)
          );
  
          if (todayStatus.length > 0) {
            const getServiceStatus = (
              latency: number,
              originalStatus: string
            ): "operational" | "warning" | "down" => {
              if (originalStatus === "DOWN" || latency >= 1000) return "down";
              if (latency >= 700) return "warning";
              return "operational";
            };
  
            const webData = todayStatus.map((status: StatusT) => ({
              status: getServiceStatus(
                status.latencies.WEB,
                status.statuses.WEB
              ),
              timestamp: status.timestamp,
            }));

            const apiData = todayStatus.map((status: StatusT) => ({
              status: getServiceStatus(
                status.latencies.API,
                status.statuses.API
              ),
              timestamp: status.timestamp,
            }));

            const appData = todayStatus.map((status: StatusT) => ({
              status: getServiceStatus(
                status.latencies.APP,
                status.statuses.APP
              ),
              timestamp: status.timestamp,
            }));
            console.log(webData);
            console.log("apidata", apiData);
            console.log("appdata", appData);
  
            setWebStatus(webData);
            setApiStatus(apiData);
            setAppStatus(appData);
          } else {
            setWebStatus([]);
            setApiStatus([]);
            setAppStatus([]);
          }
        }
      } catch (error) {
        console.error("Error fetching status data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchStatusData();
    const interval = setInterval(fetchStatusData, 4 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-10 h-full w-full items-center justify-center my-10 overflow-auto">
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(211,211,211,0.15),rgba(255,255,255,0))]" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="p-2 bg-secondary rounded-full">
          <Activity className="size-8 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold">
          {isFetching
            ? "All services are ..."
            : webStatus.length > 0 &&
                apiStatus.length > 0 &&
                appStatus.length > 0 &&
                webStatus[webStatus.length - 1].status === "operational" &&
                apiStatus[apiStatus.length - 1].status === "operational" &&
                appStatus[appStatus.length - 1].status === "operational"
              ? "All services are online"
              : "Some services are experiencing issues"}
        </h1>
        <span className="text-sm text-muted-foreground">
          Last updated:{" "}
          {webStatus.length > 0
            ? `${new Date(webStatus[webStatus.length - 1].timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`
            : "..."}
        </span>
      </div>
      <div className="flex w-full h-full px-10 md:px-40 gap-4">
        <StatusCard
          wwwData={[
            ...webStatus.map((item) => ({ ...item, source: "webStatus" })),
            ...apiStatus.map((item) => ({ ...item, source: "apiStatus" })),
            ...appStatus.map((item) => ({ ...item, source: "appStatus" })),
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
