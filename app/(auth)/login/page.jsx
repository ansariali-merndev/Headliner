"use client";

import { authAction } from "@/app/actions/auth.action";
import { Email } from "@/component/Form/Email";
import { Password } from "@/component/Form/Password";
import { Submit } from "@/component/Form/Submit";
import { handleWarnSwal } from "@/utils/swal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function Login() {
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
        Sign in to Read Headlines
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Please sign in to your account to continue.
      </p>
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="isLogin" value={true} />
        <Email />
        <Password />
        <div>
          <Submit isPending={isPending} />
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account{" "}
            <Link href={"/register"} className="cursor-pointer text-indigo-800">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
