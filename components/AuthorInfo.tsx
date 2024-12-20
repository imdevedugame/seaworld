'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface Author {
  name: string
  image: string
  bio: string
}

export default function AuthorInfo({ author }: { author: Author }) {
  return (
    <motion.div 
      className="flex items-center mt-8 p-6 bg-blue-100 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Image 
        src={author.image} 
        alt={author.name}
        width={80}
        height={80}
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-blue-800">{author.name}</h3>
        <p className="text-blue-600">{author.bio}</p>
      </div>
    </motion.div>
  )
}

