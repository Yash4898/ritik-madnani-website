"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  // Use scroll on the ref itself
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Update SVG height on mount and when content changes
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }

    // ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight)
      }
    })

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  // Smooth spring animations for the gradient
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={`relative w-full ${className || ""}`}>
      {/* SVG Tracing Beam - Fixed positioning */}
      <div className="absolute -left-4 md:-left-20 top-0 h-full">
        <motion.div
          animate={{
            height: svgHeight,
          }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="relative h-full w-20 hidden md:block"
        >
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="absolute left-8 top-0 h-full w-[2px] overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Main beam line */}
            <motion.path
              d={`M 1 0 L 1 ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="stroke-foreground"
            />

            {/* Gradient definition */}
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#2563eb" stopOpacity="0" />
                <stop stopColor="#2563eb" />
                <stop offset="0.325" stopColor="#0d9488" />
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Content container - NO max-width constraint */}
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </motion.div>
  )
}