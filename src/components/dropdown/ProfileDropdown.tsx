"use client";

import { getInitials } from "@/utils/email";
import useAuth from "@/lib/auth-store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {};

const ProfileDropdown = (props: Props) => {
  const User = useAuth((state) => state.user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="dark:border dark:border-white/50 rounded-md">
          <p>{getInitials(User?.name ?? "")}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p>Name: {User?.name}</p>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <p>Email: {User?.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/portal/admin/${User?.id ?? ""}`}>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
