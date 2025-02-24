"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AnalyicDialog } from "./analytic-dailog";

// Define the data type
interface AnalyticsData {
  action: string;
  target: string;
  date: string;
}

export default function AnalyticsTable({ data }: { data: AnalyticsData[] }) {
  return (
    <Card className="w-full rounded-lg border text-white mt-6 mb-3">
      <Table className="">
        <TableHeader className="rounded-t-lg">
          <TableRow className=" rounded-md py-3">
            <TableHead className="text-primary">Action</TableHead>
            <TableHead className="text-primary">Target</TableHead>
            <TableHead className="text-primary">Date</TableHead>
            <TableHead className="text-primary text-right px-9">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="rounded-b-lg">
          {data.map((row, index) => (
            <TableRow key={index} className="rounded-md">
              <TableCell className="text-muted-foreground">
                {row.action}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.target}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.date}
              </TableCell>
              <TableCell className="text-right">
                <AnalyicDialog key={index} data={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
