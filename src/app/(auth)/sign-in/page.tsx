import GoogleAuthButton from "@/components/buttons/auth/GoogleAuthButton";
import LoginForm from "@/components/forms/LoginForm";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center gap-12 max-w-[1440px] mx-auto">
      {/* Image Container */}
      <div className="w-full m-8">
        <Image
          src="/movies.png"
          alt="movies"
          className="border-2 dark:border-black dark:border-none rounded-3xl"
          height={1000}
          width={1000}
        />
      </div>
      {/* Login Container */}
      <div className="w-full m-8">
        <div className="flex flex-col gap-12">
          {/* Back to Webside */}
          <div className="flex gap-4 ml-4 justify-start items-center">
            <Link className="" href="/">
              <div className="border dark:border-white border-black active:border-none rounded-full p-2 flex justify-center items-center">
                <ChevronLeft className=" size-6" />
              </div>
            </Link>
            <p className="">Back to Webside</p>
          </div>
          {/* Login Message */}
          <div className="flex flex-col gap-4">
            <h3 className="">Welcome!</h3>
            <p className="">
              <strong>Create a free account</strong> and log in to get started
            </p>
          </div>
          {/* Login Form with Email and Password */}
          <div className="">
            <LoginForm />
          </div>
          {/* Login With Google */}
          <div className="">
            <GoogleAuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
