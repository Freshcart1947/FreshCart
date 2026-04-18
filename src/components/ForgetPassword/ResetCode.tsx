"use client";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import { ForgotStep } from "./ForgetPasswordForm";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendResetCodeApi } from "@/services/forgetPassword/sendResetCodeFunc";

interface ResetCodeProps {
  setForm: React.Dispatch<React.SetStateAction<ForgotStep>>;
  email:string
}

interface ResetCodeValues {
  resetCode: string;
}

export default function ResetCode({ setForm , email }: ResetCodeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetCodeValues>({
    defaultValues: {
      resetCode: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  async function handleFunction(values: ResetCodeValues) {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verifyResetCode`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "content-type": "application/json" },
        },
      );

      const data = await res.json();

      if (data.status === "Success") {
        setForm("resetPassword");
      } else {
        setMsg(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  }


  async function handleResendCode() {
    try {
      setLoading(true);
      const data = await sendResetCodeApi(email);
      if (data.statusMsg === "success") {
        toast.success("Code resent successfully!");
      }
    } catch (err) {
      toast.error("Failed to resend code");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFunction)}>
      <div>
        <label
          htmlFor="resetCode"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Verification Code
        </label>
        <div className="relative">
          <input
            {...register("resetCode", {
              required: "Code is required",
              maxLength: { value: 6, message: "Code must be 6 or 5 digits" },
            })}
            id="resetCode"
            maxLength={6}
            className={`w-full px-4 py-3 pl-12 border-2 font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all text-center text-2xl tracking-[0.5em] font-mono placeholder:tracking-normal placeholder:text-sm 
              ${errors.resetCode ? "border-red-500" : "border-gray-200 focus:border-primary-500"}`}
            placeholder="• • • • • •"
            type="text"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>
        {errors.resetCode && (
          <p className="text-red-500 text-xs mt-1 font-medium">
            {errors.resetCode.message}
          </p>
        )}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          Didn't receive the code?{" "}
          <button
          onClick={handleResendCode}
            type="button"
            className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Resend Code
          </button>
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Verify Code"
        )}
      </button>
      {msg && <p className="text-red-500 text-md font-medium">{msg}</p>}

      <div className="text-center">
        <button
          type="button"
          onClick={() => setForm("sendEmail")}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Change email address
        </button>
      </div>
    </form>
  );
}
