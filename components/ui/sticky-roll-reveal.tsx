"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
    content,
    contentClassName,
  }: {
    content: {
      title: string
      description: string
      content?: React.ReactNode | any
    }[]
    contentClassName?: string
  }) => {
    const [activeCard, setActiveCard] = React.useState(0)
    const ref = useRef<HTMLDivElement | null>(null)
  
    const { scrollYProgress } = useScroll({
      target: ref,
      container: ref,                 // inner scroll container
      offset: ["start start", "end start"],
    })
  
    const cardLength = content.length
  
    useMotionValueEvent(scrollYProgress, "change", latest => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength)
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint)
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index
          return acc
        },
        0,
      )
      setActiveCard(closestBreakpointIndex)
    })
  
    return (
      <motion.div
        ref={ref}
        className="
          relative flex h-[30rem] justify-center space-x-10 rounded-md bg-gray-50 p-10
          overflow-y-auto
          scrollbar-none                       /* tailwind plugin or custom class */
        "
      >
        {/* LEFT – TEXT */}
        <div className="relative flex items-start px-4">
          <div className="max-w-3xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-16">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                  className="text-lg md:text-xl font-semibold text-gray-900"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                  className="mt-4 max-w-md text-sm md:text-base text-gray-700 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-20" />
          </div>
        </div>
  
        {/* RIGHT – PREVIEW CARD */}
        <div
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-xl bg-white shadow-lg lg:block",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    )
  }
  