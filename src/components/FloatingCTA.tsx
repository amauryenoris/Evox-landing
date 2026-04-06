import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({ onClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showThreshold = 800;

      if (scrollPosition > showThreshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPosition <= showThreshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="relative group">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        <button
          onClick={onClick}
          className="px-6 py-4 bg-[#1DAA6C] hover:bg-[#168B57] text-black font-semibold rounded-full shadow-2xl hover:shadow-[#1DAA6C]/40 transition-all duration-300 flex items-center gap-3 hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          Get Free Consultation
        </button>

        <div className="absolute inset-0 bg-[#1DAA6C] rounded-full blur-xl opacity-30 -z-10 animate-pulse"></div>
      </div>
    </div>
  );
}
