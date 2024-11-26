"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function to start progress when navigation begins
  const startProgress = useCallback(() => {
    setProgress(0);
    setIsVisible(true);
  }, []);

  // Function to complete the progress bar with a delay for smoothness
  const completeProgress = useCallback(() => {
    setProgress(100);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    startProgress();

    // Gradually increase progress to give a smooth loading effect
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + 10; // Adjust the increment and speed as needed
        }
        return prev;
      });
    }, 200); // Update every 200ms for smoothness

    // Complete the progress on route change completion
    const complete = setTimeout(() => {
      completeProgress();
      clearInterval(interval);
    }, 800); // Total time for the progress to complete

    return () => {
      clearTimeout(complete);
      clearInterval(interval);
    };
  }, [pathname, searchParams, startProgress, completeProgress]);

  if (!isVisible) return null;

  return (
    <Progress
      value={progress}
      className="fixed top-0 left-0 right-0 z-50 h-1 w-full transition-opacity duration-200 bg-transparent"
    />
  );
}
