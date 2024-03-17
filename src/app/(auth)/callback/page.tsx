"use client";

import "aws-amplify/auth/enable-oauth-listener";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useEffect } from "react";
import useAuth from "@/lib/auth-store";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function Callback() {
  const router = useRouter();
  const setUserAuth = useAuth((state) => state.setUserAuth);
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if(!code) {
      router.push("/");
    }

    const unsubscribe = Hub.listen("auth", async ({ payload }) => {
      console.log(payload.event)
      switch (payload.event) {
        case "signInWithRedirect":
          const userAttributes = await fetchUserAttributes();
          const name = userAttributes?.name ?? "";
          const email = userAttributes?.email ?? "";
          const id = userAttributes?.sub ?? "";

          if (name !== "" && email !== "" && id !== "") {
            setUserAuth({ id, name, email });
          }
          break;
        case "signInWithRedirect_failure":
          break;
        case "customOAuthState":
          const state = payload.data;
          console.log(state);
          break;
        case "signedIn":
          router.push("/portal/admin");
          break;
        default:
          router.push("/");
          break;
      }
    });
    return unsubscribe;
  }, [code]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoaderCircle className="mr-2 size-12 animate-spin" />
    </div>
  );
}
