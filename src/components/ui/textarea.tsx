import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-[#94A3B8] bg-[#F1F5F9] px-3 py-2 text-sm text-black ring-offset-background placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#3B82F6] focus-visible:shadow-[0_0_0_3px_rgba(59,130,246,0.3)] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
