import Image from "next/image"
import AnimatedSection from "./AnimatedSection"

export default function Suggestions() {
  const suggestions = [
    {
      name: "Faris Jawa",
      role: "Mahasiswa Kelautan",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Web ini sangat informatif! Saya berharap ada lebih banyak artikel tentang ekosistem laut lokal di Indonesia."
    },
    {
      name: "Raden Samed",
      role: "Instruktur Selam",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Desainnya menarik, tetapi mungkin fitur interaktif seperti kuis tentang kehidupan laut bisa ditambahkan."
    },
    {
      name: "Sultan Dharu",
      role: "Aktivis Lingkungan",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Web ini sudah sangat bagus, tapi saya rasa informasi tentang aksi nyata untuk konservasi laut bisa lebih diperbanyak."
    }
  ]

  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Saran untuk Web SeaWorld Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((suggestion, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Image 
                    src={suggestion.image} 
                    alt={suggestion.name} 
                    width={50} 
                    height={50} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-blue-800">{suggestion.name}</h3>
                    <p className="text-blue-600 text-sm">{suggestion.role}</p>
                  </div>
                </div>
                <p className="text-blue-700 italic">"{suggestion.quote}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
