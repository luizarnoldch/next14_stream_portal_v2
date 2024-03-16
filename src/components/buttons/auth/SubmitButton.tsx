"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  [key: string]: any;
};

const SubmitButton = ({ children, isLoggedIn, ...props }: Props) => {
  const { pending } = useFormStatus();
  console.log("pending: ",pending)
  return (
    <Button
      type="submit"
      aria-disabled={pending || isLoggedIn}
      disabled={pending || isLoggedIn}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
