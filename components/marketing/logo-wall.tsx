"use client"

import Image from "next/image"

const logos = [
  { name: "Acme Corp", src: "/logos/acme.svg" }, // Placeholder paths
  { name: "GlobalTech", src: "/logos/global.svg" },
  { name: "Nebula", src: "/logos/nebula.svg" },
  { name: "Trio", src: "/logos/trio.svg" },
  { name: "FoxRun", src: "/logos/fox.svg" },
  { name: "Circle", src: "/logos/circle.svg" },
]

export function LogoWall() {
  return (
    <section className="py-12 bg-neutral-950 border-b border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-neutral-500 mb-8 uppercase tracking-wider">
          Trusted by forward-thinking companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Since I don't have actual SVG logos, I'll use text placeholders styled to look like logos */}
           {["Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun", "Circle"].map((logo, i) => (
             <div key={i} className="text-xl font-bold text-neutral-400 hover:text-white transition-colors cursor-default select-none">
               {logo}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
