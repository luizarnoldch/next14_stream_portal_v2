"use client";
import { Button } from "@/components/ui/button";
import { signOut } from 'aws-amplify/auth';
import { LogOut } from 'lucide-react';
type Props = {}

const LogoutButton = (props: Props) => {
    const handleLogout = async () => {
        try {
            await signOut({ global: true });
          } catch (error) {
            console.log('error signing out: ', error);
          }
      };
  return (
    <Button
      className="flex gap-2 justify-center items-center dark:active:bg-white/60 active:bg-slate-600"
      onClick={handleLogout}
    >
      <LogOut />
      <p>
        <strong>Log out</strong>
      </p>
    </Button>
  )
}

export default LogoutButton