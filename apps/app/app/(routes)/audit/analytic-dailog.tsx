import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { AnalyticsData } from "./page";
  
  export function AnalyicDialog({data}: {data: AnalyticsData}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" className="h-7 font-medium">View details</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl">Detailed audit logs</AlertDialogTitle>
            <AlertDialogDescription>
                Action: {data.action}
            </AlertDialogDescription>
            <AlertDialogDescription>
                Target: {data.target}
            </AlertDialogDescription>
            <AlertDialogDescription>
                Date: {data.date} 
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  