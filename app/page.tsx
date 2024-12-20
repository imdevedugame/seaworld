import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import BlogSection from "../components/BlogSection"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Hero />
      <Features />
      <BlogSection />
      <Testimonial />
      <Footer />
    </div>
  )
}

