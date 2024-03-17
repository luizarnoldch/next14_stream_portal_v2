"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

const ButtonNavigationBack = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={`border dark:border-white border-black active:border-none rounded-full p-2 flex justify-center items-center ${
        pathname === "/portal/admin" ? "hidden" : "block"
      }`}
      onClick={() => router.back()}
    >
      <ChevronLeft className=" size-6" />
    </div>
  );
};

export default ButtonNavigationBack;
