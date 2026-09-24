import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Copy, Check, Mail, Calendar, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function ContactModal({ isOpen, onClose, defaultTopic = 'ECOM Scaling' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: defaultTopic,
    revenue: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const topics = [
    'ECOM Brand Scaling',
    'Business Strategy Session',
    'Store Audit & Conversion Optimization',
    'Partnership / Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const formattedInquiry = `Hi Bilal,
My name is ${formData.name} (${formData.email}${formData.phone ? `, Phone: ${formData.phone}` : ''}).
Topic: ${formData.topic}
${formData.revenue ? `Monthly Revenue: ${formData.revenue}\n` : ''}
Message:
${formData.message}`;

  const mailtoLink = `mailto:bilalashrafawan1494@gmail.com?subject=${encodeURIComponent(
    `Inquiry: ${formData.topic} - ${formData.name}`
  )}&body=${encodeURIComponent(formattedInquiry)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: defaultTopic,
      revenue: '',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0a0f1d] border border-blue-500/20 rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/50 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Grab handle for mobile ergonomics */}
            <div className="sm:hidden w-12 h-1 bg-slate-700/60 rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Direct Channel
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  Send a Direct Inquiry
                </h3>
              </div>
              <button
                onClick={handleReset}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-5">
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Inquiry Prepared!</h4>
                  <p className="text-sm text-slate-300/80 mt-1 max-w-xs mx-auto">
                    Choose your preferred way to transmit your details directly to Bilal:
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={mailtoLink}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30 active:scale-[0.98]"
                  >
                    <Mail className="w-4 h-4" />
                    Open in Your Email Client
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        Copy Formatted Message
                      </>
                    )}
                  </button>

                  <a
                    href="https://calendly.com/bilalashrafawan1494/business-strategist-with-bilal-awan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-blue-500/20 text-blue-300 font-medium text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Or Book Directly on Calendly
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-300 pt-2 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    What are you looking to achieve?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`text-left text-xs p-2.5 rounded-lg border transition-all ${
                          formData.topic === t
                            ? 'bg-blue-600/20 border-blue-500 text-blue-200 font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      WhatsApp / Phone <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Current Monthly Revenue <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="">Select range...</option>
                      <option value="Pre-revenue / Starting">Pre-revenue / Starting out</option>
                      <option value="$5k - $25k / mo">$5k – $25k / month</option>
                      <option value="$25k - $100k / mo">$25k – $100k / month</option>
                      <option value="$100k+ / mo">$100k+ / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Business & Goals <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell Bilal about your current business, store link, or biggest bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Bilal typically responds within 24–48 hours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
