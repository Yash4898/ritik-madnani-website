"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [renderedText, setRenderedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (renderedText.length < words.length) {
        setRenderedText(words.slice(0, renderedText.length + 1))
      } else {
        setIsComplete(true)
      }
    }, 40)

    return () => clearTimeout(timeout)
  }, [renderedText, words])

  return (
    <span>
      {renderedText}
      {!isComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}
