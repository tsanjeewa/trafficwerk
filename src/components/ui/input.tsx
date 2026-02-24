import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-2 border-[#94A3B8] bg-[#F1F5F9] px-3 py-2 text-base text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#3B82F6] focus-visible:shadow-[0_0_0_3px_rgba(59,130,246,0.3)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
