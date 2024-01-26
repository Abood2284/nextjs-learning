'use client'
import { Progress } from "@/components/ui/progress";
import React from "react";


export default function LoadingComponent(){
  const [progress, setProgress] = React.useState(13);
  console.log(`Initial progress: ${progress}`); // For debugging

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Update state inside the callback
      setProgress(progress + 10);
      console.log(`Updated progress: ${progress}`); // For debugging
    }, 100);
    // Always return the cleanup function
    return () => clearTimeout(timer);
  }, [progress]); // Add progress as a dependency

  return (
    <Progress value={progress} className="w-[60%]" />
  );
}