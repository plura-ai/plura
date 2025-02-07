"use client";
import InfoBreadCrumb from "@/components/custom/infobar/bread-crumb";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
export default function AgentsCreateDialog() {
  return (
    <>
      <AlertDialog>
        <div className="flex w-full items-center justify-between">
          <InfoBreadCrumb />
          <AlertDialogTrigger asChild>
            <Button className="flex items-center gap-2">
              Create
              <Plus />
            </Button>
          </AlertDialogTrigger>
        </div>

        <AlertDialogContent>
          <AlertDialogTitle>Create Agent</AlertDialogTitle>
          <AlertDialogDescription>
            Fill in the details to create a new agent.
          </AlertDialogDescription>
          <div className="space-y-2">
            <div>
              <Label htmlFor="agent-name">Agent Name</Label>
              <Input id="agent-name" placeholder="Enter agent name" />
            </div>
            <div>
              <Label htmlFor="system-prompt">System Prompt</Label>
              <Textarea
                id="system-prompt"
                placeholder="Enter system prompt"
                className="border"
              />
            </div>
            <div>
              <Label>Model</Label>
              <ModelDropDownMenu />
            </div>
            <div>
              <Label htmlFor="api-key">API Key</Label>
              <Input id="api-key" placeholder="Enter API key" />
            </div>
            <div>
              <Label htmlFor="image">Image</Label>
              <Input id="image" type="file" />
            </div>
          </div>
          <AlertDialogFooter className="flex gap-4">
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
            <AlertDialogAction className="w-full">Create</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function ModelDropDownMenu() {
  const [model, setModel] = useState<string>("Claude");
  const models = [
    "Claude",
    "Bert",
    "Perplexity AI",
    "Bard",
    "Google Gemini",
    "OpenAI",
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
        >
          {model}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={model}
          onValueChange={(val) => setModel(val)}
        >
          {models.map((m) => (
            <DropdownMenuRadioItem key={m} value={m}>
              {m}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
