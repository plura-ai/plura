import React, { useState } from "react";
import { UserRound } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
interface ChatsProps {
  chats: any;
}

export const Chats: React.FC<ChatsProps> = ({ chats }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <div className="border rounded-xl bg-card py-2 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-2 md:px-4">Ticket</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(isDropdownOpen ? chats : chats.slice(0, 5)).map(
              (chat: any, i: number) => (
                <TableRow key={i}>
                  <TableCell className="px-2 md:px-4">
                    <div className="flex items-center">
                      <div className="rounded-full flex items-center justify-center">
                        <UserRound />
                      </div>
                      <div className="ml-2">
                        <p className="text ">{chat.ticketId}</p>
                        <Badge
                          variant={`${chat.status === "open" ? "secondary" : "destructive"}`}
                        >
                          {chat.status}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {chat.status2}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p>
                        {new Date(chat.dateTime).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(chat.dateTime).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-center">
        <button
          className="p-2 border rounded-lg text-sm w-full bg-card"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {isDropdownOpen ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
};
