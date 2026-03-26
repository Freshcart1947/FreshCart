import React from "react";
import {
  FaTruck,
  FaShieldHalved,
  FaArrowRotateLeft,
  FaHeadset,
} from "react-icons/fa6";

const features = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: <FaTruck className="text-xl" />,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: <FaShieldHalved className="text-xl" />,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: <FaArrowRotateLeft className="text-xl" />,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: <FaHeadset className="text-xl" />,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
            >
              {/* Icon Container */}
              <div
                className={`${feature.bgColor} ${feature.iconColor} w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
