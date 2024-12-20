
'use client'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-600 text-white shadow-lg sticky top-0 z-50"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">SeaWorld Blog</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
          <Link href="/blog" className="hover:text-blue-200 transition-colors duration-300">Blog</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors duration-300">About</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors duration-300">Contact</Link>
        </div>
      </nav>
    </motion.header>
  )
}
