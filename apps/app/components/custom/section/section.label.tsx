import React from "react";

interface SectionProps {
  label: string;
  msg: string;
}
export default function SectionLabel({ label, msg }: SectionProps) {
  return (
    <div>
      <p className="text-lg font-medium mb-2">{label}</p>
      <p className="text-sm text-muted-foreground">{msg}</p>
    </div>
  );
}
