import { Mail, MessageCircle, Network, Workflow, Shield } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: 'Email Workflow Automation',
    description: 'Automate email processing, responses, and data extraction',
  },
  {
    icon: MessageCircle,
    title: 'Intelligent Chatbots',
    description: 'AI-powered chatbots with persistent memory using PostgreSQL',
  },
  {
    icon: Network,
    title: 'Custom Integrations',
    description: 'Connect your tools: CRM, spreadsheets, calendars, databases',
  },
  {
    icon: Workflow,
    title: 'Process Optimization',
    description: 'Streamline operations from lead capture to customer service',
  },
  {
    icon: Shield,
    title: '24/7 Monitoring & Support',
    description: 'Round-the-clock support ensuring automations run smoothly',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Automation Solutions That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive automation services designed to increase efficiency and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#1DAA6C] transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DAA6C]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1DAA6C]/20 transition-colors">
                  <service.icon className="w-8 h-8 text-[#1DAA6C]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
