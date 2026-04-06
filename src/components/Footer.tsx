import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/assets/logo/sobre_fondo_oscuro.png"
                alt="EVOX LLC"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Miami's premier business automation agency. We transform repetitive tasks into intelligent automated workflows.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:3463807938" className="text-gray-400 hover:text-[#1DAA6C] transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (346) 380-7938
              </a>
              <a href="mailto:admin@evoxautomation.cloud" className="text-gray-400 hover:text-[#1DAA6C] transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                admin@evoxautomation.cloud
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-[#1DAA6C] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="text-gray-400 hover:text-[#1DAA6C] transition-colors text-sm"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-[#1DAA6C] transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Location</h3>
            <p className="text-gray-400 text-sm">
              Miami, Florida
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            {currentYear} EVOX LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
