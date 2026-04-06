import { Clock, Zap, Award, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability & Support',
    description: 'Round-the-clock monitoring and support to ensure your automations never miss a beat',
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Fast turnaround times to get your automations up and running quickly',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Successfully deployed 100+ workflows for satisfied clients across industries',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Automation systems that grow with your business needs',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              EVOX
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're committed to delivering exceptional automation solutions that transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1DAA6C]/20 to-[#1DAA6C]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-[#1DAA6C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
