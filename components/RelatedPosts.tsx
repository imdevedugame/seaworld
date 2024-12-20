'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RelatedPosts() {
  const posts = [
    { id: 1, title: "Coral Reefs: The Rainforests of the Sea", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Ocean Pollution: Challenges and Solutions", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "The Amazing World of Bioluminescent Marine Life", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section className="mt-16">
      <h2 className={`text-3xl font-bold text-blue-800 mb-6`}>Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <Link href={`/blog/${post.id}`} className="block">
              <Image 
                src={post.image} 
                alt={post.title}
                width={300}
                height={200}
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 hover:text-blue-500 transition-colors">
                {post.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

