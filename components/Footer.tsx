export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SeaWorld Blog</h2>
            <p>Exploring the wonders of the ocean</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} SeaWorld Blog.Inovation from Nayra.
        </div>
      </div>
    </footer>
  )
}

