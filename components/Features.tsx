import { Anchor, Fish, Droplet } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function Features() {
  const features = [
    { icon: Anchor, title: "Kehidupan Laut", description: "Jelajahi berbagai spesies yang hidup di lautan kita." },
    { icon: Fish, title: "Konservasi Laut", description: "Pelajari upaya untuk melindungi dan melestarikan ekosistem laut." },
    { icon: Droplet, title: "Fotografi Bawah Laut", description: "Temukan seni menangkap keindahan di bawah gelombang." },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Jelajahi Fitur Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-blue-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
