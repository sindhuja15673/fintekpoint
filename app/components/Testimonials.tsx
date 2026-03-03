"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Stacy",
      role: "Business Owner",
      message:
        "How happy I am to see my dream translated nicely into app. The team crafted the user journey perfectly.",
    },
    {
      name: "Neil",
      role: "Director of Operations",
      message:
        "Convey my wishes to the support team. All our office 360 and SharePoint tickets are closed quickly.",
    },
    {
      name: "Steve",
      role: "Head of Customer Support",
      message:
        "Invoice process automation tool works perfectly and helped us save cost.",
    },
  ];

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number) => {
    return (current + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section id="testimonial" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-[#02a9f7] mx-auto mt-4 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 transition-all duration-500">

          {/* Left Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center opacity-70">
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <p className="text-gray-600 text-sm mb-6">
              {testimonials[getIndex(-1)].message}
            </p>
            <h4 className="font-semibold">
              {testimonials[getIndex(-1)].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[getIndex(-1)].role}
            </p>
          </div>

          {/* Center Card */}
          <div className="bg-white p-10 rounded-xl shadow-xl text-center scale-105">
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <p className="text-gray-700 text-sm mb-6">
              {testimonials[current].message}
            </p>
            <h4 className="font-semibold text-lg">
              {testimonials[current].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[current].role}
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center opacity-70">
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <p className="text-gray-600 text-sm mb-6">
              {testimonials[getIndex(1)].message}
            </p>
            <h4 className="font-semibold">
              {testimonials[getIndex(1)].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[getIndex(1)].role}
            </p>
          </div>

        </div>

        {/* Dots */}
        {/* <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index
                  ? "bg-[#02a9f7]"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div> */}
{/* Dots */}
<div className="flex justify-center gap-2 mt-12">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        current === index
          ? "bg-[#02a9f7] scale-125"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    ></button>
  ))}
</div>
      </div>
    </section>
  );
}