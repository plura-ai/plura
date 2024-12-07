"use client";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { IconWifi } from '@tabler/icons-react';
import Link from 'next/link';
import StatusTracker, { StatusData } from './status.tracker';

const calculateUptime = (statusData: StatusData[]): number => {
  type StatusT = 'operational' | 'degraded' | 'down' | 'warning';
  const weights: Record<StatusT, number> = {
    operational: 1, // Full uptime
    degraded: 0.8,  // Partial uptime
    warning: 0.5,   // Reduced uptime
    down: 0,        // No uptime
  };

  const totalStatuses = statusData.length;
  if (totalStatuses === 0) return 0;
  const uptimeScore = statusData.reduce(
    (sum, { status }) => sum + (weights[status] || 0),
    0
  );

  return parseFloat(((uptimeScore / totalStatuses) * 100).toFixed(2));
};

export default function StatusCard({wwwData}:{wwwData: StatusData[]}) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const isOpen = (value: string) => openItems.includes(value);

  return (
    <Card className="w-full p-2 bg-secondary rounded-xl">
      <Accordion
        type="multiple"
        className="space-y-5"
        onValueChange={(values) => setOpenItems(values)}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="flex w-full items-center justify-between rounded-xl hover:no-underline bg-background px-5 data-[state=open]:bg-transparent"
            onClick={() => handleToggle("item-1")}
          >
            <span className="text-sm font-medium">Websites</span>
            <Badge
              className={`mr-5 shadow-none rounded-xl text-white ${
                isOpen("item-1")
                  ? "bg-background hover:bg-background"
                  : "bg-secondary hover:bg-secondary"
              }`}
            >
              <IconWifi className="size-5 mr-2 text-green-500" /> Operational
            </Badge>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            <Card className="mx-auto bg-transparent shadow-none">
              <p className="text-tremor-default flex items-center justify-between font-semibold">
                <Link
                  href={"https://www.plura.pro"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{new URL("https://www.plura.pro").host}</span>
                </Link>
                <span className="text-emerald-500">
                  {calculateUptime(wwwData)}% uptime
                </span>
              </p>
              <div className='flex flex-col p-5'>
                {" "}
                webstatus
                <StatusTracker data={wwwData.filter((item) => item.source === 'webStatus')} />
                apiStatus
                <StatusTracker data={wwwData.filter((item) => item.source === 'apiStatus')} />
                appStatus
                <StatusTracker data={wwwData.filter((item) => item.source === 'appStatus')} />
              </div>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger
            className="flex w-full items-center justify-between rounded-xl hover:no-underline bg-background px-5 data-[state=open]:bg-transparent"
            onClick={() => handleToggle("item-2")}
          >
            <span className="text-sm font-medium">Database</span>
            <Badge
              className={`mr-5 shadow-none rounded-xl text-white ${
                isOpen("item-2")
                  ? "bg-background hover:bg-background"
                  : "bg-secondary hover:bg-secondary"
              }`}
            >
              <IconWifi className="size-5 mr-2 text-yellow-500" /> Operational
            </Badge>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger
            className="flex w-full items-center justify-between rounded-xl hover:no-underline bg-background px-5 data-[state=open]:bg-transparent"
            onClick={() => handleToggle("item-3")}
          >
            <span className="text-sm font-medium">Services</span>
            <Badge
              className={`mr-5 shadow-none rounded-xl text-white ${
                isOpen("item-3")
                  ? "bg-background hover:bg-background"
                  : "bg-secondary hover:bg-secondary"
              }`}
            >
              <IconWifi className="size-5 mr-2 text-red-500" /> Operational
            </Badge>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
