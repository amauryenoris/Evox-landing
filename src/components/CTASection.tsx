import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onBookClick: () => void;
  onMessageClick: () => void;
}

export default function CTASection({ onBookClick, onMessageClick }: CTASectionProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DAA6C]/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 radial-glow"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1DAA6C] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1DAA6C] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              Automate Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation and discover how much time and money you could save
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookClick}
              className="group px-8 py-4 bg-[#1DAA6C] hover:bg-[#168B57] text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#1DAA6C]/20 hover:shadow-[#1DAA6C]/40 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onMessageClick}
              className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-[#1DAA6C] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              Send us a message
            </button>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="cta-feature-text">Quick Response</div>
            </div>

            <div className="cta-feature">
              <div className="cta-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                </svg>
              </div>
              <div className="cta-feature-text">Free Consultation</div>
            </div>

            <div className="cta-feature">
              <div className="cta-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="cta-feature-text">Custom Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
