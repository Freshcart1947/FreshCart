"use client";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { ForgotStep } from "./ForgetPasswordForm";
import { useForm } from "react-hook-form";
import { sendResetCodeApi } from "@/services/forgetPassword/sendResetCodeFunc";

interface EmailFormProps {
  setForm: React.Dispatch<React.SetStateAction<ForgotStep>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

interface EmailValues {
  email: string;
}

export default function EmailForm({ setForm, setEmail }: EmailFormProps) {
  const { register, handleSubmit } = useForm<EmailValues>({
    defaultValues: {
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSendResetCode(values: EmailValues) {
    try {
      setLoading(true);
      const data = await sendResetCodeApi(values.email);
      if (data.statusMsg === "success") {
        setEmail(values.email);
        setForm("verifyCode");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(handleSendResetCode)}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg flex items-center justify-center gap-2 "
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send Reset Code"
          )}
        </button>
      </form>
    </>
  );
}
