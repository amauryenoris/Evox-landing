import { Phone, Stethoscope, FileText, Code, GraduationCap, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Free call',
    description: 'Tell us your goals, budget and how you work today.',
  },
  {
    icon: Stethoscope,
    title: 'Diagnosis',
    description: 'What to fix first, which tools, cost and time.',
  },
  {
    icon: FileText,
    title: 'Clear proposal',
    description: 'Fixed scope and price. No surprises.',
  },
  {
    icon: Code,
    title: 'Setup',
    description: 'We build, connect and test.',
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Your team learns to use it.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing support',
    description: 'Monthly maintenance and adjustments.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Six steps, one point of contact.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent hidden lg:block"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1DAA6C] to-[#168B57] rounded-full flex items-center justify-center shadow-lg shadow-[#1DAA6C]/20 relative z-10">
                      <step.icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-[#1DAA6C] rounded-full flex items-center justify-center z-20 shadow-lg shadow-[#1DAA6C]/40">
                      <span className="text-[#1DAA6C] text-sm font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#1DAA6C] to-gray-800">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#1DAA6C] rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
