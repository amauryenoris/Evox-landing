export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="logo">
            <img
              src="/assets/logo/sobre_fondo_oscuro.png"
              alt="EVOX LLC"
              className="logo-image"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-[#1DAA6C] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-gray-300 hover:text-[#1DAA6C] transition-colors font-medium"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#1DAA6C] transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="tel:3463807938"
              className="px-6 py-2 bg-[#1DAA6C] hover:bg-[#168B57] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              (346) 380-7938
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
