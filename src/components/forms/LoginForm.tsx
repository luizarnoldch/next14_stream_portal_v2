"use client";

type Props = {};

import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "../buttons/auth/SubmitButton";
import { signIn, type SignInInput } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation'
import { useState } from "react";

type FormInputs = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    const {username, password} = data

    try {
      const signInResponse = await signIn({ username, password });
      console.log("signed-in", signInResponse.isSignedIn)
      // console.log(signInResponse.nextStep)
      // console.log(signInResponse)
      setIsLoggedIn(true)
    } catch (e:any) {
      console.log('error signing in', e);
      setIsLoggedIn(false)
    }
    router.push('/portal/admin')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="">
        <label
          htmlFor="username"
          className="block dark:text-white text-black text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          id="username"
          {...register("username", { required: true, minLength: 4 })}
          className="dark:bg-transparent dark:border dark:border-white border border-black rounded-full w-full h-12 py-2 px-4"
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic mt-2 font-bold">
            Username is required and should be at least 4 characters.
          </p>
        )}
      </div>

      <div className="">
        <label
          htmlFor="password"
          className="block dark:text-white text-black text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          className="dark:bg-transparent dark:border dark:border-white border border-black rounded-full w-full h-12 py-2 px-4"
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic mt-2 font-bold">
            Password is required and should be at least 6 characters.
          </p>
        )}
      </div>
      <SubmitButton
        className="border border-none dark:active:bg-white/70 active:bg-black/70 dark:border-white rounded-full w-full h-12 py-2 px-4 disabled:bg-transparent"
        isLoggedIn={isLoggedIn}
      >
        <p>Log In</p>
      </SubmitButton>
    </form>
  );
};

export default LoginForm;
