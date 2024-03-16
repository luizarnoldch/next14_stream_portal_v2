"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signInWithRedirect } from "aws-amplify/auth";

type Props = {};

const GoogleAuthButton = (props: Props) => {
  const handleSignWithGoogle = async () => {
    try {
      await signInWithRedirect({
        provider: "Google",
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  return (
    <Button
      className="dark:border dark:border-white border border-black rounded-full w-full flex gap-4 h-12 py-2 bg-transparent dark:text-white dark:hover:text-black dark:active:bg-white/60 text-black"
      onClick={handleSignWithGoogle}
    >
      <Image src="/google.png" alt="google-icon" height={30} width={30} />
      <p>
        <strong>Log in with Google</strong>
      </p>
    </Button>
  );
};

export default GoogleAuthButton;
