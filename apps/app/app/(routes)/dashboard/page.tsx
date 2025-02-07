"use client";
import { IconCoins, IconInfoSquareRounded } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MailTable } from "../../../components/custom/dashboard/mail-table";
import { Mail } from "../mails/columns";
import { UserRound } from "lucide-react";
import { Chats } from "../../../components/custom/dashboard/chat-table";
import InfoBreadCrumb from "@/components/custom/infobar/bread-crumb";

const mails: Mail[] = [
  {
    Email: "saidevdhal@gmail.com",
    Source: "Agent2",
    date: "13-03-2023",
    id: "bsd45ghty",
  },
  {
    Email: "sarahsmith@gmail.com",
    Source: "Agent2",
    date: "13-03-2023",
    id: "bsd456ghty",
  },
  {
    Email: "rahulshah0728@gmail.com",
    Source: "Agent1",
    date: "12-01-2023",
    id: "asd123nadsf",
  },
  {
    Email: "hiteshchoudhary@gmail.com",
    Source: "Agent1",
    date: "14-02-2023",
    id: "csd789jklu",
  },
  {
    Email: "ayush@gmail.com",
    Source: "Agent2",
    date: "15-05-2023",
    id: "dsd012mnop",
  },
  {
    Email: "piyushgarg@gmail.com",
    Source: "Agent1",
    date: "16-04-2023",
    id: "esd345qrst",
  },
  {
    Email: "gautam@gmail.com",
    Source: "Agent2",
    date: "17-07-2023",
    id: "fsd678uvwx",
  },
  {
    Email: "rahuldev@gmail.com",
    Source: "Agent1",
    date: "18-06-2023",
    id: "gsd901yzab",
  },
  {
    Email: "shaurya@gmail.com",
    Source: "Agent2",
    date: "19-09-2023",
    id: "hsd234cdef",
  },
  {
    Email: "narendrachoudhary@gmail.com",
    Source: "Agent1",
    date: "20-08-2023",
    id: "isd567ghij",
  },
];

const chats = [
  {
    icon: UserRound,
    status2: "Automatic",
    status: "open",
    ticketId: "TCK-1001",
    dateTime: "2025-01-01T10:30:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "open",
    ticketId: "TCK-1002",
    dateTime: "2025-01-01T12:45:00Z",
  },
  {
    icon: UserRound,
    status2: "Manual",
    status: "open",
    ticketId: "TCK-1003",
    dateTime: "2025-01-01T14:20:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "closed",
    ticketId: "TCK-1004",
    dateTime: "2025-01-01T15:10:00Z",
  },
  {
    icon: UserRound,
    status2: "Manual",
    status: "open",
    ticketId: "TCK-1005",
    dateTime: "2025-01-01T16:50:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "closed",
    ticketId: "TCK-1006",
    dateTime: "2025-01-01T18:00:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "open",
    ticketId: "TCK-1007",
    dateTime: "2025-01-01T19:15:00Z",
  },
  {
    icon: UserRound,
    status2: "Manual",
    status: "closed",
    ticketId: "TCK-1008",
    dateTime: "2025-01-01T20:30:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "open",
    ticketId: "TCK-1009",
    dateTime: "2025-01-01T21:45:00Z",
  },
  {
    icon: UserRound,
    status2: "Automatic",
    status: "closed",
    ticketId: "TCK-1010",
    dateTime: "2025-01-01T23:00:00Z",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-start overflow-hidden px-3 md:px-1">
      <InfoBreadCrumb />
      <Tabs defaultValue="overview" className="w-full space-y-5">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-3">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Queries Resolved
                </CardTitle>
                <IconInfoSquareRounded className="size-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,321</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mails</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Events Logged
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Credits Left
                </CardTitle>
                <IconCoins className="size-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2346</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <MailTable mails={mails} />
          <Chats chats={chats} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
