import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative inline-flex overflow-hidden items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:absolute after:-left-[120%] after:top-0 after:h-full after:w-1/2 after:rotate-12 after:bg-white/20 after:blur-md after:transition-all after:duration-700 hover:after:left-[130%] [&>*]:relative [&>*]:z-10",
  {
    variants: {
      variant: {
        default:
          "bg-[#362a9b] text-white shadow-[0_10px_22px_-10px_rgba(54,42,155,0.85)] hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-12px_rgba(54,42,155,0.8)] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05)_40%,rgba(255,255,255,0.25))]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 before:bg-white/10",
        outline:
          "border border-input bg-background shadow-sm hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground before:bg-slate-900/[0.04]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/80 before:bg-white/20",
        ghost:
          "hover:bg-accent hover:text-accent-foreground before:bg-slate-900/[0.04]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
