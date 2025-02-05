/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react'
import { addDays, format } from "date-fns";
import { CalendarIcon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import AnalyticsTable from './analytics-table';

export interface AnalyticsData {
    action: string;
    target: string;
    date: string;
}

export default function page() {
    const [loading, setLoading] = useState(false);
    const [fliteredAnalyticsData, setFliteredAnalyticsData] = useState<AnalyticsData[]>([]);
    const [dateRange, setDateRange] = useState<DateRange>({
        from: addDays(new Date(), -6),
        to: new Date(),
    });

    const handleDateSelect = (range: DateRange | undefined) => {
        if (range) {
            setDateRange(range as { from: Date; to: Date });
            if (range.from) {
                format(new Date(range.from), "yyyy-MM-dd");
            }
            if (range.to) {
                format(new Date(range.to), "yyyy-MM-dd");
            }
        }
    };

    const analyticsData = [
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:50:34" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:50:23" },
        { action: "Send analytics group reset event", target: "-", date: "05 Feb 2025, 12:50:21" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:50:20" },
        { action: "Send analytics group reset event", target: "-", date: "05 Feb 2025, 12:49:46" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:49:43" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:49:19" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:49:16" },
        { action: "Send analytics group identify event", target: "-", date: "05 Feb 2025, 12:49:04" },
        { action: "Send analytics group identify event", target: "-", date: "04 Feb 2025, 23:03:32" },
        { action: "Send analytics group reset event", target: "-", date: "04 Feb 2025, 23:03:31" },
        { action: "Send analytics group identify event", target: "-", date: "30 Jan 2025, 18:15:10" },
        { action: "Send analytics group identify event", target: "-", date: "28 Jan 2025, 15:42:55" },
        { action: "Send analytics group reset event", target: "-", date: "25 Jan 2025, 09:23:12" },
        { action: "Send analytics group identify event", target: "-", date: "22 Jan 2025, 14:35:48" },
        { action: "Send analytics group reset event", target: "-", date: "20 Jan 2025, 20:17:30" },
    ];

    function filterAnalyticsDataByDate({ data, dateRange }: { data: AnalyticsData[], dateRange: { from: string, to: string } }): AnalyticsData[] {
        const fromDate = new Date(dateRange.from);
        const toDate = new Date(dateRange.to);
        return data.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= fromDate && itemDate <= toDate;
        });
    }

    const handleRefresh = () => {
        setLoading(true);
        const formattedDateRange = {
            from: dateRange.from ? format(dateRange.from, 'dd MMM yyyy, HH:mm:ss') : '',
            to: dateRange.to ? format(addDays(dateRange.to, 1), 'dd MMM yyyy, HH:mm:ss') : ''
        };

        const fliteredAnalyticsDataRes = filterAnalyticsDataByDate({ data: analyticsData, dateRange: formattedDateRange });
        setTimeout(() => {
            setFliteredAnalyticsData(fliteredAnalyticsDataRes);
            setLoading(false);
        }, 1200);
    };

    useEffect(() => {
        handleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="container  px-5 md:px-2 text-primary rounded-lg">
            <h2 className="text-3xl font-semibold">Account audit logs</h2>
            <p className="text-sm text-muted-foreground mt-1">
                View the audit log trail of actions made from your account
            </p>

            <div className="block md:flex items-center justify-between mt-4">
                <div className="block md:flex items-center space-x-0 md:space-x-3">
                    <div className='flex items-center my-6 md:my-0 space-x-3 md:mb-0'>
                        <p className='text-muted-foreground text-sm'>Filter by</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="flex items-center space-x-2 bg-secondary border-dashed text-primary">
                                    <CalendarIcon className="w-4 h-4" />
                                    <span>
                                        {dateRange.from && dateRange.to
                                            ? `${format(dateRange.from, "dd MMM")} - ${format(dateRange.to, "dd MMM")}`
                                            : "Select Date Range"}
                                    </span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="border bg-[#222] text-white p-2">
                                <Calendar mode="range" selected={dateRange} onSelect={handleDateSelect} />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <span className="text-muted-foreground text-sm">Viewing {fliteredAnalyticsData?.length} logs in total</span>
                </div>

                <Button variant="default" className={`text-secondary border flex items-center space-x-2 my-6 md:my-0 ${loading ? "opacity-[0.30]" : ""}`} onClick={handleRefresh}>
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    <span>Refresh</span>
                </Button>
            </div>
            {fliteredAnalyticsData?.length > 0 ? (
                <AnalyticsTable data={fliteredAnalyticsData}/>
            ) : (
                <div>
                    <Card className={cn("mt-6 border py-3 pl-5 text-start")}>
                        <p className="text-muted-foreground text-sm">You do not have any audit logs available yet</p>
                    </Card>
                </div>
            )
            }
        </div>
    );
}
