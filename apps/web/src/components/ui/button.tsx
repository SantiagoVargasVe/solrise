import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lila-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-lila-950 dark:focus-visible:ring-lila-300",
  {
    variants: {
      variant: {
        default:
          "bg-lila-900 text-lila-50 hover:bg-lila-900/90 dark:bg-lila-50 dark:text-lila-900 dark:hover:bg-lila-50/90",
        destructive:
          "bg-red-500 text-lila-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-lila-50 dark:hover:bg-red-900/90",
        outline:
          "border border-lila-200 bg-white hover:bg-lila-100 hover:text-lila-900 dark:border-lila-800 dark:bg-lila-950 dark:hover:bg-lila-800 dark:hover:text-lila-50",
        secondary:
          "bg-lila-100 text-lila-900 hover:bg-lila-100/80 dark:bg-lila-800 dark:text-lila-50 dark:hover:bg-lila-800/80",
        ghost:
          "hover:bg-lila-100 hover:text-lila-900 dark:hover:bg-lila-800 dark:hover:text-lila-50",
        link: "text-lila-900 underline-offset-4 hover:underline dark:text-lila-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
