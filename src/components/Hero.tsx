import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
  onStoriesClick: () => void;
}

export default function Hero({ onCTAClick, onStoriesClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1DAA6C] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1DAA6C] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#1DAA6C] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="floating-node animate-node-float" style={{ top: '20%', left: '15%' }}></div>
      <div className="floating-node animate-node-float animation-delay-2000" style={{ top: '60%', right: '20%' }}></div>
      <div className="floating-node animate-node-float animation-delay-4000" style={{ bottom: '25%', left: '50%' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 border border-[#1DAA6C]/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#1DAA6C]" />
            <span className="text-sm text-gray-300">Miami's Premier Automation Agency</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Automate Your Business,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
            Multiply Your Results
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          We transform repetitive tasks into intelligent automated workflows
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={onCTAClick}
            className="group px-8 py-4 bg-[#1DAA6C] hover:bg-[#168B57] text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#1DAA6C]/20 hover:shadow-[#1DAA6C]/40 hover:scale-105"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onStoriesClick}
            className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-[#1DAA6C] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DAA6C]/20"
          >
            View Success Stories
          </button>
        </div>

        <div className="mt-20 animate-fade-in-up animation-delay-600">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1DAA6C] mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1DAA6C] mb-2">100+</div>
              <div className="text-gray-400 text-sm">Workflows Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1DAA6C] mb-2">30+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#1DAA6C] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
