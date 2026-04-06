import { Calendar, Home, TrendingUp, Clock } from 'lucide-react';

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
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-[#1DAA6C] transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center">
                    <study.icon className="w-8 h-8 text-[#1DAA6C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <TrendingUp className="w-4 h-4 text-[#1DAA6C]" />
                      <span>Success Story</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 bg-red-500/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
                        <p className="text-white">{study.challenge}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-500 text-xs font-bold">→</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
                        <p className="text-white">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 bg-[#1DAA6C]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#1DAA6C] text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Result</h4>
                        <p className="text-white">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[#1DAA6C] mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
