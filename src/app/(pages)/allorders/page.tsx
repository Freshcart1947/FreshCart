"use client";
import React from "react";
import {
  FaBox,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShippingFast,
} from "react-icons/fa";

export default function AllOrders() {
  // داتا ستاتيك للتجربة لحد ما تربط الـ API
  const orders = [
    {
      id: "#8824",
      date: "Oct 24, 2025",
      status: "Delivered",
      totalPrice: 497,
      paymentMethod: "Cash",
      address: "Cairo, Nasr City",
      products: [
        {
          id: 1,
          name: "Woman Shawl",
          count: 2,
          price: 149,
          image:
            "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
        },
      ],
    },
    {
      id: "#8825",
      date: "Oct 25, 2025",
      status: "Processing",
      totalPrice: 1200,
      paymentMethod: "Card",
      address: "Alexandria, Gleem",
      products: [
        {
          id: 2,
          name: "Men Jacket",
          count: 1,
          price: 850,
          image:
            "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
        <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/20">
          <FaBox size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            My Orders
          </h1>
          <p className="text-gray-500 mt-1">
            Track and manage your recent purchases
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Order Header */}
            <div className="bg-gray-50/50 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">
                    Order ID
                  </p>
                  <p className="text-sm font-bold text-gray-900">{order.id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">
                    Date
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <FaCalendarAlt className="text-primary-500" /> {order.date}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">
                    Status
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status === "Delivered" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaClock />
                    )}
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">
                  Total Amount
                </p>
                <p className="text-lg font-black text-primary-600">
                  {order.totalPrice} EGP
                </p>
              </div>
            </div>

            {/* Order Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Products List */}
                <div className="space-y-4">
                  {order.products.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-gray-50 hover:border-primary-100 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gray-50 p-1 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.count} unit(s) × {item.price} EGP
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Info */}
                <div className="bg-gray-50/50 rounded-2xl p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Shipping Address
                      </p>
                      <p className="text-sm text-gray-700 mt-1 font-medium">
                        {order.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                      <FaShippingFast />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Payment Method
                      </p>
                      <p className="text-sm text-gray-700 mt-1 font-medium italic">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
