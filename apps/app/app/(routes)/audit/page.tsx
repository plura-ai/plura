/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from 'react'
import { format } from "date-fns";
import { CalendarIcon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';

export default function page() {
    const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });

    // Logs the selected range to the console
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
                        <Button variant="outline" className="border-dashed bg-secondary text-primary">
                            Projects
                        </Button>
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
                    <span className="text-muted-foreground text-sm">Viewing 0 logs in total</span>
                </div>

                <Button variant="default" className="text-secondary border flex items-center space-x-2 my-6 md:my-0">
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh</span>
                </Button>
            </div>

            <Card className={cn("mt-6 border py-3 pl-5 text-start")}>
                <p className="text-muted-foreground text-sm">You do not have any audit logs available yet</p>
            </Card>
        </div>
    );
}
