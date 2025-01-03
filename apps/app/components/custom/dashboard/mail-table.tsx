import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail } from "../../../app/(routes)/mails/columns";
type MailTableProps = {
  mails: Mail[];
};
export const MailTable = ({ mails }: MailTableProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-1 md:px-4">Email</TableHead>
              <TableHead className="hidden md:table-cell">Source</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(isDropdownOpen ? mails : mails.slice(0, 5)).map((mail) => (
              <TableRow key={mail.id}>
                <TableCell className="px-1 md:px-4">{mail.Email}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {mail.Source}
                </TableCell>
                <TableCell>{mail.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-center">
        <button
          className="py-2 border w-full rounded-xl bg-card"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {isDropdownOpen ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
};
