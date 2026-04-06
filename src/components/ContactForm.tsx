import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { submitContactForm, sendEmailNotification, ContactSubmission } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    preferred_time: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.company_name.trim()) {
      newErrors.company_name = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      await submitContactForm(formData);

      try {
        await sendEmailNotification(formData);
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        preferred_time: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (field: keyof ContactSubmission, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DAA6C] to-[#168B57]">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can automate your business and drive growth
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="tel:3463807938"
                  className="flex items-start gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-[#1DAA6C] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1DAA6C]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#1DAA6C]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <div className="text-white font-semibold">(346) 380-7938</div>
                  </div>
                </a>

                <a
                  href="mailto:admin@evoxautomation.cloud"
                  className="flex items-start gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-[#1DAA6C] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1DAA6C]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#1DAA6C]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-white font-semibold break-all">admin@evoxautomation.cloud</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-[#1DAA6C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1DAA6C]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white font-semibold">Miami, Florida</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1DAA6C]/10 to-transparent border border-[#1DAA6C]/20 rounded-lg p-6 animate-fade-in-up animation-delay-200">
              <h4 className="text-lg font-bold text-white mb-3">Why Contact Us?</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1DAA6C] rounded-full"></div>
                  Free 30-minute consultation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1DAA6C] rounded-full"></div>
                  Custom automation strategy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1DAA6C] rounded-full"></div>
                  No obligation, no pressure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1DAA6C] rounded-full"></div>
                  Quick response time
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-8 animate-fade-in-up animation-delay-300">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company_name" className="block text-sm font-semibold text-white mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => handleChange('company_name', e.target.value)}
                    className={`w-full px-4 py-3 bg-black border ${
                      errors.company_name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors`}
                    placeholder="Your Company"
                  />
                  {errors.company_name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.company_name}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="preferred_time" className="block text-sm font-semibold text-white mb-2">
                  Preferred Consultation Time <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="preferred_time"
                  value={formData.preferred_time}
                  onChange={(e) => handleChange('preferred_time', e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors"
                  placeholder="e.g., Monday afternoons, Tuesday 2-4pm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message <span className="text-red-500">*</span>
                  <span className="text-gray-500 text-xs ml-2">(Max 500 characters)</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  maxLength={500}
                  className={`w-full px-4 py-3 bg-black border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white focus:outline-none focus:border-[#1DAA6C] transition-colors resize-none`}
                  placeholder="Tell us about your automation needs..."
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <p className="text-gray-500 text-xs">{formData.message.length}/500</p>
                </div>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-[#1DAA6C] hover:bg-[#168B57] text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#1DAA6C]/20 hover:shadow-[#1DAA6C]/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1DAA6C] disabled:hover:scale-100 hover:scale-105"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
