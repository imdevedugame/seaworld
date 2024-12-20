import Image from "next/image"
import AnimatedSection from "./AnimatedSection"

export default function BlogSection() {
  const posts = [
    { title: "Kehidupan Misterius Makhluk Laut Dalam", image: "/image/blog1.jpg?height=200&width=300", excerpt: "Jelajahi dunia menakjubkan makhluk bercahaya dan organisme yang tampak seperti alien..." },
    { title: "Terumbu Karang: Hutan Hujan di Laut", image: "/image/blog2.jpg?height=200&width=300", excerpt: "Temukan ekosistem yang berwarna-warni dan mendukung seperempat dari semua kehidupan laut..." },
    { title: "Polusi Laut: Tantangan dan Solusi", image: "/image/blog3.jpg?height=200&width=300", excerpt: "Pelajari ancaman terbesar bagi laut kita dan bagaimana kita dapat berkontribusi untuk perubahan..." },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Postingan Blog Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src={post.image} alt={post.title} width={300} height={200} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{post.title}</h3>
                  <p className="text-blue-600 mb-4">{post.excerpt}</p>
                  <button className="text-blue-700 font-semibold hover:text-blue-900">Baca Selengkapnya →</button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
