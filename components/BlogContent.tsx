'use client'

import { motion } from "framer-motion"

export default function BlogContent({ content }: { content: string }) {
  return (
    <motion.div 
      className="prose prose-lg prose-blue mx-auto mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p>{content}</p>
      {/* Add more paragraphs or sections as needed */}
    </motion.div>
  )
}

