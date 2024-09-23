import React from "react";

export const SkeletonCard: React.FC = () => {
  return (
    <div className="flex animate-pulse flex-col justify-between rounded-lg bg-customBg shadow-md">
      <div className="relative h-60 w-full rounded-t-lg bg-skeletonGray"></div>

      <div className="p-4">
        <div className="mb-2 h-6 w-3/4 rounded bg-customBorder"></div>
        <div className="mb-1 h-4 w-full rounded bg-customBorder"></div>
        <div className="h-4 w-5/6 rounded bg-customBorder"></div>
        <div className="mt-2 flex h-16 items-center justify-between">
          <div className="w-1/3 rounded bg-customBorder"></div>
          <div className="w-20 rounded-full bg-customBorder"></div>
        </div>
      </div>
    </div>
  );
};
