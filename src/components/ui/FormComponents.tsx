"use client";

import { cx } from "class-variance-authority";
import React from "react";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className={cx("text-xs tracking-widest uppercase", className)}
    />
  );
});

Label.displayName = "FormLabel";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cx(
        "border border-gray-300 rounded-md overflow-hidden px-3 py-1",
        className
      )}
    />
  );
});

Input.displayName = "FormInput";
