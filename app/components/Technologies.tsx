"use client";

import { useState } from "react";
import Image from "next/image";

export default function Technologies() {
  const categories = {
    All: [
      { name: "HTML", image: "/html.png" },
       { name: "CSS", image: "/css.png" },
      {name: "Javascript", image:"/js.webp"},
      { name: "React", image: "/react.png" },
      { name: "NextJs", image: "/next.png" },
      { name: "Node js", image: "/node.png" },
      
      { name: "Flutter", image: "/flutter.png" },
      { name: "React Native", image: "/rnative.png" },
    //    { name: "MySql", image: "/mysql.png" },
      { name: "MongoDB", image: "/mongo.png" },
       { name: "Supabase", image: "/supabases.png" },
        { name: "Firebase", image: "/firebase.webp" },
        { name: "Redis", image: "/redis.webp" },
      
    ],
    "Mobile App": [
      { name: "Flutter", image: "/flutter.png" },
      { name: "React Native", image: "/rnative.png" },
    ],
    "Web App": [
      { name: "HTML", image: "/html.png" },
      { name: "CSS", image: "/css.png" },
      {name: "Javascript", image:"/js.png"},
      { name: "React", image: "/react.png" },
      { name: "NextJs", image: "/next.png" },
    ],
    Backend: [
    //   { name: "Python", image: "/technologies/python.png" },
    //   { name: "Java", image: "/technologies/java.png" },
      { name: "NOde js", image: "/node.png" },
    ],
    Database: [
    //   { name: "MySql", image: "/mysql.png" },
      { name: "MongoDB", image: "/mongo.png" },
       { name: "Supabase", image: "/supabases.png" },
        { name: "Firebase", image: "/firebase.webp" },
        { name: "Redis", image: "/redis.webp" },
        

    ],
  };

  // const [active, setActive] = useState("All");
  const [active, setActive] = useState<keyof typeof categories>("All");

  return (
    <section id="technology" className="py-24 bg-[#eaf2f7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-[#02a9f7]">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-[#02a9f7] mx-auto mt-4 rounded"></div>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {/* {Object.keys(categories).map((category) => ( */}
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition ${
                active === category
                  ? "bg-[#02a9f7] text-white border-[#02a9f7]"
                  : "border-gray-300 text-gray-700 hover:border-[#02a9f7]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
          {categories[active].map((tech, index) => (
            // <div
            //   key={index}
            //   className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            // >
              <div className="w-20 h-20 bg-[#eaf2f7] rounded-full mx-auto flex items-center justify-center mb-2 ">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              {/* </div> */}
              <p className="text-gray-700 text-sm font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}