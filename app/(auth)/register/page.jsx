"use client";

import { Email } from "../../../components/form/Email";
import { Password } from "../../../components/form/Password";
import { Username } from "../../../components/form/Username";
import { Submit } from "../../../components/form/Submit";
import Link from "next/link";
import { authAction } from "@/app/actions/auth.action";
import { useActionState, useEffect, useState } from "react";
import { handleWarnSwal } from "@/utils/swal";
import { useRouter } from "next/navigation";
import { InputOTPForm } from "@/components/custom/InputOtp";

export default function Register() {
  const [state, formAction, isPending] = useActionState(authAction);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state) {
      if (!state.success) {
        handleWarnSwal(state?.message);
      } else {
        setEmail(state?.email);
        setIsOpen(true);
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
      {isOpen && <InputOTPForm email={email} setIsOpen={setIsOpen} />}
    </section>
  );
}
