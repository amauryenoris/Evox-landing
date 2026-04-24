import { useState, useEffect, useCallback } from 'react';
import { Calendar, Home, TrendingUp, Car, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const caseStudies = [
  {
    company: 'My Proud Havana',
    icon: Home,
    challenge: 'Managing 30+ Airbnb properties with manual calendar updates',
    solution: 'Automated reservation processing to calendar integration',
    result: 'Significant time savings and increased team productivity',
    metrics: [
      { label: 'Properties Automated', value: '30+' },
      { label: 'Time Saved Weekly', value: '20hrs' },
      { label: 'Error Reduction', value: '95%' },
    ],
  },
  {
    company: 'Emerald Bay',
    icon: Calendar,
    challenge: 'Manual apartment quote generation and follow-up',
    solution: 'Custom web app for quote generation + automated email workflows to prospects',
    result: 'Faster response times and improved lead conversion',
    metrics: [
      { label: 'Response Time', value: '10x faster' },
      { label: 'Lead Conversion', value: '+45%' },
      { label: 'Manual Work', value: '-80%' },
    ],
  },
  {
    company: 'BOI',
    icon: Zap,
    challenge: 'Sales process running manually — no CRM, no pipeline tracking, no follow-up automation',
    solution: 'Full GoHighLevel CRM setup, custom sales funnel build, and end-to-end pipeline automation',
    result: 'Structured sales process with automated follow-ups and full pipeline visibility',
    metrics: [
      { label: 'CRM Setup', value: '100%' },
      { label: 'Pipeline Stages', value: 'Automated' },
      { label: 'Follow-up Time', value: 'Zero' },
    ],
  },
  {
    company: 'Luz Wash Detailing',
    icon: Car,
    challenge: 'No online presence — clients had no way to find services or pricing before calling',
    solution: 'Professional landing page with services, pricing, WhatsApp booking and mobile-first design',
    result: 'Online presence established and ready to capture leads 24/7',
    metrics: [
      { label: 'Online Presence', value: 'Zero → Live' },
      { label: 'Pricing & Services', value: 'Online 24/7' },
      { label: 'Mobile Optimized', value: '100%' },
    ],
  },
];

function StudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-8">
        {/* Company header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <study.icon className="w-7 h-7 text-[#1DAA6C]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{study.company}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <TrendingUp className="w-4 h-4 text-[#1DAA6C]" />
              <span>Success Story</span>
            </div>
          </div>
        </div>

        {/* Challenge / Solution / Result */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-500 text-xs font-bold">!</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
              <p className="text-white text-sm">{study.challenge}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-500 text-xs font-bold">→</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
              <p className="text-white text-sm">{study.solution}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#1DAA6C]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#1DAA6C] text-xs font-bold">✓</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Result</h4>
              <p className="text-white text-sm">{study.result}</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-800">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-bold text-[#1DAA6C] mb-1">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = caseStudies.length;
  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  const goNext = useCallback(() => setCurrent(i => (i + 1) % total), [total]);

  const handleManual = (fn: () => void) => {
    setPaused(true);
    fn();
    setTimeout(() => setPaused(false), 5000);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 4000);
    return () => clearInterval(id);
  }, [paused, goNext]);

  return (
    <section id="case-studies" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Results for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we've helped businesses like yours save time and increase efficiency
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '420px' }}>

          {/* Cards — all same size, positioned only via transform */}
          <div style={{ position: 'relative', width: '100%', minHeight: '420px' }}>
            {caseStudies.map((study, i) => {
              const pos = ((i - current) % total + total) % total;
              const isCenter = pos === 0;
              const isRight  = pos === 1;
              const isLeft   = pos === total - 1;

              let transform = 'translate(-50%, -50%) scale(0.82)';
              let opacity = 0;
              let zIndex = 0;

              if (isCenter) {
                transform = 'translate(-50%, -50%) scale(1)';
                opacity = 1;
                zIndex = 2;
              } else if (isLeft) {
                transform = 'translate(-130%, -50%) scale(0.82)';
                opacity = 0.4;
                zIndex = 1;
              } else if (isRight) {
                transform = 'translate(30%, -50%) scale(0.82)';
                opacity = 0.4;
                zIndex = 1;
              }

              return (
                <div
                  key={i}
                  onClick={() => {
                    if (isLeft)  handleManual(() => setCurrent(prevIdx));
                    if (isRight) handleManual(() => setCurrent(nextIdx));
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '560px',
                    transform,
                    opacity,
                    zIndex,
                    transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
                    pointerEvents: isCenter ? 'auto' : 'none',
                    cursor: (!isCenter && (isLeft || isRight)) ? 'pointer' : 'default',
                  }}
                >
                  <StudyCard study={study} />
                </div>
              );
            })}
          </div>

          {/* Arrow left */}
          <button
            onClick={() => handleManual(() => setCurrent(prevIdx))}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border border-gray-700 hover:border-[#1DAA6C] text-gray-400 hover:text-[#1DAA6C] flex items-center justify-center transition-all duration-200"
            style={{ zIndex: 3 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Arrow right */}
          <button
            onClick={() => handleManual(() => setCurrent(nextIdx))}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border border-gray-700 hover:border-[#1DAA6C] text-gray-400 hover:text-[#1DAA6C] flex items-center justify-center transition-all duration-200"
            style={{ zIndex: 3 }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManual(() => setCurrent(i))}
              style={{
                width: i === current ? '1.75rem' : '0.6rem',
                height: '0.6rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: i === current ? '#1DAA6C' : 'rgba(255,255,255,0.25)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
