'use client'

import Image from "next/image"
import { motion } from "framer-motion"


export default function BlogHeader({ title, image }: { title: string, image: string }) {
  return (
    <header className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
        <motion.h1 
          className={`aquatico text-4xl md:text-6xl text-white text-center px-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
      </div>
    </header>
  )
}

