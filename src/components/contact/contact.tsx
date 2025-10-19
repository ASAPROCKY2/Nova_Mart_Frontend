import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  CheckCircle2,
  Store,
  Truck
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
  contactMethod: 'phone' | 'whatsapp' | 'email';
}

interface SubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'phone'
  });
  
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: 'idle' });
  const [activeField, setActiveField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState({ status: 'submitting' });
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmissionState({ 
        status: 'success', 
        message: 'Message sent! John will get back to you soon.' 
      });
      setFormData({ name: '', phone: '', subject: '', message: '', contactMethod: 'phone' });
    } catch (error) {
      setSubmissionState({ 
        status: 'error', 
        message: 'Failed to send message. Please try calling us directly.' 
      });
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Shop',
      details: 'Isiolo Town Center',
      description: 'Next to Isiolo Market',
      subDescription: 'Isiolo County, Kenya',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      details: '+254 7XX XXX XXX',
      description: 'Talk to John or our team',
      subDescription: '7:00 AM - 9:00 PM Daily',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Send Us Email',
      details: 'info@novamart.co.ke',
      description: 'We reply within 12 hours',
      subDescription: 'For general inquiries',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Mon-Sat: 7AM - 9PM',
      description: 'Sunday: 8AM - 8PM',
      subDescription: 'Closed on Public Holidays',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const contactMethods = [
    { value: 'phone', label: 'Phone Call', icon: '📞', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { value: 'whatsapp', label: 'WhatsApp', icon: '💬', color: 'bg-green-100 text-green-800 border-green-300' },
    { value: 'email', label: 'Email', icon: '📧', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' }
  ];

  const quickServices = [
    {
      icon: Truck,
      title: 'Local Delivery',
      description: 'Free delivery within Isiolo Town for orders over KSh 2,000',
      action: 'Order Now →'
    },
    {
      icon: Store,
      title: 'Bulk Orders',
      description: 'Special prices for large orders from businesses and organizations',
      action: 'Get Quote →'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
              GET IN TOUCH
            </h1>
          </motion.div>
          
          <div className="inline-block bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-8 py-4 mb-6 shadow-lg">
            <span className="text-blue-700 text-lg font-semibold tracking-widest">
              WE'RE HERE TO HELP
            </span>
          </div>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions about our products? Need a bulk order? We're your local shop in Isiolo and we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 font-semibold text-base">{item.details}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.subDescription}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Quick Services</h3>
              </div>
              
              <div className="space-y-6">
                {quickServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="w-5 h-5" />
                      <h4 className="font-semibold text-lg">{service.title}</h4>
                    </div>
                    <p className="text-blue-50 text-sm mb-3">{service.description}</p>
                    <button className="text-white font-semibold text-sm hover:underline">
                      {service.action}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center"
              >
                <p className="text-blue-200 text-sm mb-2">For urgent orders after hours:</p>
                <p className="text-white font-bold text-lg">+254 7XX XXX XXX</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-cyan-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-800 mb-2">Send Us a Message</h2>
              <p className="text-gray-600">We'll get back to you as soon as possible</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Your Name *</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+254 XXX XXX XXX"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject *</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onFocus={() => setActiveField('subject')}
                  onBlur={() => setActiveField(null)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What would you like to know?"
                  required
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">How should we contact you?</label>
                <div className="flex gap-3">
                  {contactMethods.map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => handleChange('contactMethod', method.value)}
                      className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium text-center ${
                        formData.contactMethod === method.value
                          ? `${method.color} scale-105`
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{method.icon}</div>
                      <div className="text-sm">{method.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message *</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us what you need... (e.g., product inquiry, bulk order, delivery question)"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submissionState.status === 'submitting'}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <AnimatePresence mode="wait">
                  {submissionState.status === 'submitting' ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                  ) : submissionState.status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {submissionState.status === 'submitting'
                  ? 'Sending...'
                  : submissionState.status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message to Novamart'}
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {submissionState.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      submissionState.status === 'success'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                  >
                    {submissionState.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Direct Contact Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 text-center"
            >
              <p className="text-blue-700 text-sm font-medium">
                Prefer to talk directly? Call us at{' '}
                <span className="font-bold">+254 7XX XXX XXX</span> - We're here to help!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-cyan-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
              FIND OUR SHOP
            </h3>
            <p className="text-gray-600 text-lg">Come visit us in Isiolo Town Center</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 text-center">
            <div className="max-w-md mx-auto">
              <MapPin className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Novamart Isiolo</h4>
              <p className="text-gray-700 mb-1">Isiolo Town Center</p>
              <p className="text-gray-600 mb-1">Next to Isiolo Market</p>
              <p className="text-gray-500">Isiolo County, Kenya</p>
              
              <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Landmark:</span> Look for the blue and cyan sign next to Isiolo Market. 
                  We're right in the heart of town!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;