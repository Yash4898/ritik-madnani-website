"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Item {
  title: string
  description: string
  link?: string
}

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: Item[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
          <motion.div
            className="relative h-full rounded-xl p-6 bg-white border border-gray-200 shadow-md overflow-hidden"
            initial={{ borderColor: "rgba(229, 231, 235, 1)" }}
            animate={{
              borderColor: hoveredIndex === idx ? "rgba(59, 130, 246, 0.5)" : "rgba(229, 231, 235, 1)",
              y: hoveredIndex === idx ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
