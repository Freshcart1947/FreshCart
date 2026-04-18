import React from "react";
// Import Icons
import { Mail, Lock, ShieldCheck } from "lucide-react";
import { FaCircle } from "react-icons/fa";
import ForgetPasswordForm from "@/components/ForgetPassword/ForgetPasswordForm";

export default function ForgetPassword() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto py-10 px-4">
      <div className="hidden lg:block">
        <div className="text-center space-y-6">
          <div className="w-full h-96 bg-gradient-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-primary-100/50"></div>
            <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50"></div>
            <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50"></div>

            <div className="relative flex flex-col items-center gap-6 z-10">
              <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <Lock className="w-10 h-10 text-primary-600" />
                </div>
              </div>

              {/* Dots Animation using React Icons */}
              <div className="flex gap-3">
                <FaCircle className="w-3 h-3 text-primary-400 animate-pulse" />
                <FaCircle className="w-3 h-3 text-primary-500 animate-pulse [animation-delay:150ms]" />
                <FaCircle className="w-3 h-3 text-primary-600 animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Reset Your Password
            </h2>
            <p className="text-lg text-gray-600">
              Don't worry, it happens to the best of us. We'll help you get back
              into your account in no time.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600" /> Email Verification
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-600" /> Secure
                Reset
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ForgetPasswordForm />
      </div>
    </div>
  );
}
