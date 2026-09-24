import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Copy, Check, MessageSquare } from 'lucide-react';

export function ContactCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('ECOM Brand Scaling');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSubmitted(true);
  };

  const formattedText = `Hi Bilal,
My name is ${name} (${email}).
Interested in: ${interest}
Message:
${message}`;

  const mailtoLink = `mailto:bilalashrafawan1494@gmail.com?subject=${encodeURIComponent(
    `Inquiry: ${interest} - ${name}`
  )}&body=${encodeURIComponent(formattedText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section className="w-full pt-3 pb-6">
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#0b1325] via-[#080e1c] to-[#050913] border border-blue-500/25 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative overflow-hidden">
        {/* Subtle accent light */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
              Direct Communication
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Have a Specific Project or Question?
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300/80 mb-4">
          Send a fast direct message directly to Bilal's desk.
        </p>

        {isSubmitted ? (
          <div className="py-4 text-center space-y-4 bg-slate-900/60 rounded-xl border border-blue-500/20 p-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Thank you, {name}!</p>
              <p className="text-xs text-slate-300/80 mt-0.5">
                Your message is prepared. Send it directly via email or copy it:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={mailtoLink}
                className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-blue-600/30"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
              }}
              className="text-[11px] text-slate-500 hover:text-slate-400"
            >
              Send another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jordan@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Primary Goal / Area
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              >
                <option value="ECOM Brand Scaling">ECOM Brand Scaling</option>
                <option value="Business Strategy Session">Business Strategy Session</option>
                <option value="Store Optimization & Marketing">Store Optimization & Marketing</option>
                <option value="General Partnership">General Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Message & Current Business Stage
              </label>
              <textarea
                required
                rows={2}
                placeholder="Briefly describe what you are building, your store link, or what challenges you're facing..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message Directly</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
