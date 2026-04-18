"use client";
import { ArrowLeft, Key, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import EmailForm from "./EmailForm";
import ResetCode from "./ResetCode";
import ResetPassword from "./ResetPassword";
import Link from "next/link";

export type ForgotStep = "sendEmail" | "verifyCode" | "resetPassword";

export default function ForgetPasswordForm() {
  const [form, setForm] = useState<ForgotStep>("sendEmail");
  const [email , setEmail] = useState<string>('')
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-primary-600">
              Fresh<span className="text-gray-800">Cart</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Forgot Password?
          </h1>
          <p className="text-gray-600">
            No worries, we'll send you a reset code
          </p>
        </div>

        {/* Stepper Visualization */}
        <div className="flex items-center justify-center mb-8">
          {/* Step 1: Email */}
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                form === "sendEmail" ||
                form === "verifyCode" ||
                form === "resetPassword"
                  ? "bg-primary-600 text-white ring-4 ring-primary-100"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <Mail className="w-4 h-4" />
            </div>
            {/* Line 1 */}
            <div
              className={`w-16 h-0.5 mx-2 transition-all duration-500 ${
                form === "verifyCode" || form === "resetPassword"
                  ? "bg-primary-600"
                  : "bg-gray-200"
              }`}
            ></div>
          </div>

          {/* Step 2: Verification Code */}
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                form === "verifyCode" || form === "resetPassword"
                  ? "bg-primary-600 text-white ring-4 ring-primary-100"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <Key className="w-4 h-4" />
            </div>
            {/* Line 2 */}
            <div
              className={`w-16 h-0.5 mx-2 transition-all duration-500 ${
                form === "resetPassword" ? "bg-primary-600" : "bg-gray-200"
              }`}
            ></div>
          </div>

          {/* Step 3: New Password */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              form === "resetPassword"
                ? "bg-primary-600 text-white ring-4 ring-primary-100"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            <Lock className="w-4 h-4" />
          </div>
        </div>

        { form == "sendEmail" && <EmailForm setEmail = {setEmail} setForm = {setForm} />}
        { form == "verifyCode" && <ResetCode email = {email} setForm = {setForm} />}
        { form == "resetPassword" && <ResetPassword email = {email} setForm = {setForm} />}

        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Remember your password?{" "}
            <Link href={'/signin'} className="text-primary-600 font-semibold cursor-pointer">
              Sign In
            </Link>
          </p> 
        </div>
      </div>
    </>
  );
}
