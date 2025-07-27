"use client";

import { Email } from "../../../component/Form/Email";
import { Password } from "../../../component/Form/Password";
import { Username } from "../../../component/Form/Username";
import { Submit } from "../../../component/Form/Submit";
import Link from "next/link";
import { authAction } from "@/app/actions/auth.action";
import { useActionState, useEffect, useState } from "react";
import { handleWarnSwal } from "@/utils/swal";
import { useRouter } from "next/navigation";

export default function Register() {
  const [state, formAction, isPending] = useActionState(authAction);
  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (!state.success) {
        handleWarnSwal(state?.message);
      } else {
        router.push("/");
      }
    }
  }, [state]);

  return (
    <section
      className="my-18 max-w-md p-12 border border-rose-200 bg-gray-100 rounded-md mx-8 h-fit"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <h2 className="text-2xl font-bold text-center mb-2">
        Get Started for Free
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Provide your information below to register with us.
      </p>
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="isLogin" value={false} />
        <Username />
        <Email />
        <Password />
        <div>
          <Submit isPending={isPending} />
          <p className="text-center text-sm text-gray-600">
            Already? have an Account{" "}
            <Link href={"/login"} className="cursor-pointer text-indigo-800">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
