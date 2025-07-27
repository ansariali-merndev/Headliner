"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOTP } from "@/app/actions/auth.action";
import { handleWarnSwal } from "@/utils/swal";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm({ email, setIsOpen }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data) {
    console.log(data.pin, ": pin");
    console.log("Email: ", email);
    const res = await verifyOTP(data.pin, email);
    if (!res.success) {
      handleWarnSwal(res?.message);
    } else {
      setIsOpen(false);
      router.push("/");
    }
    form.reset();
  }

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  bg-[#1F1F1F]/90 backdrop-blur-md border border-neutral-700 rounded-2xl 
  shadow-2xl p-10 w-[400px] text-white"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className={""}>
                <FormLabel className="text-sm text-neutral-300 flex justify-center">
                  One-Time Password
                </FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup
                      className={"w-full flex justify-center items-center"}
                    >
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-neutral-400 text-xs mt-1 text-center">
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage className={"text-center"} />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
