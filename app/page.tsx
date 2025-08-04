"use client" // This component uses client-side features like useState and framer-motion

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArvoxTechLandingContent from "./arvox-tech-landing-content" // Import the main content component

const Page = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000) // Show splash for 3 seconds
    return () => clearTimeout(timer)
  }, [])

  // Variants for the main splash screen container
  const splashContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", // Animate container first, then children
        staggerChildren: 0.2, // Stagger logo and text
        duration: 0.5, // Quick fade in for the container
      },
    },
    exit: {
      opacity: 0,
      y: -100, // Slide up quickly on exit
      transition: {
        duration: 0.7, // Slightly longer exit to feel smooth
        ease: [0.76, 0, 0.24, 1], // Custom ease for a fast start, slow end (easeOutExpo-like)
      },
    },
  }

  // Variants for the individual items (logo group and text) within the splash screen
  const splashItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Slower entry for items
        ease: [0.17, 0.67, 0.83, 0.67], // Spring-like ease (easeOutBack-like)
      },
    },
  }

  // Variants for the individual squares within the logo
  const logoSquareVariants = (delayOffset: number) => ({
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 45, // Final rotation for all squares
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55], // Overshoot effect
        delay: delayOffset * 0.1, // Staggered delay for each square
      },
    },
  })

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={splashContainerVariants} // Apply container variants
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center z-[9999]" // Subtle dark gradient background
          >
            <motion.div className="flex flex-col items-center space-y-4">
              <motion.div className="w-24 h-24 relative">
                {/* Individual motion.div for each square with staggered animations */}
                <motion.div
                  variants={logoSquareVariants(0)}
                  className="absolute inset-0 bg-white rounded-lg"
                ></motion.div>
                <motion.div
                  variants={logoSquareVariants(1)}
                  className="absolute inset-1 bg-black rounded-lg"
                ></motion.div>
                <motion.div
                  variants={logoSquareVariants(2)}
                  className="absolute inset-2 bg-white rounded-lg"
                ></motion.div>
              </motion.div>
              <motion.span
                variants={splashItemVariants}
                className="text-5xl md:text-6xl font-bold uppercase text-white"
              >
                ARVOX TECH
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <ArvoxTechLandingContent /> // Render the main content component after splash
      )}
    </>
  )
}

export default Page
