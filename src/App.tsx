/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { ProfileHero } from './components/ProfileHero';
import { WorkSection } from './components/WorkSection';
import { ContactCard } from './components/ContactCard';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('ECOM Brand Scaling');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Bilal Awan — ECOM Strategist & Business Consultant',
      text: 'Helping entrepreneurs build ECOM brands, improve their business strategy, and grow through social media.',
      url: window.location.href,
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return;
      }
    } catch {
      // User cancelled share or share unavailable
    }
    copyToClipboard();
  };

  const copyToClipboard = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href);
        triggerToast('Profile link copied to clipboard');
        return;
      }
    } catch {
      // fallback
    }
    triggerToast('Profile link ready to share');
  };

  const openContactWithTopic = (topic: string = 'ECOM Brand Scaling') => {
    setContactTopic(topic);
    setIsContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#05070B] text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Ambient Radial Spotlight (Electric Blue & Deep Navy) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-15%,rgba(37,99,235,0.22),transparent_70%)]" 
      />

      {/* Subtle secondary bottom ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_60%_40%_at_50%_120%,rgba(30,58,138,0.15),transparent_70%)]" 
      />

      {/* Main Content Container (Mobile-first, max-w-xl) */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        {/* Top Bar */}
        <Header 
          onShare={handleShare} 
          onOpenContact={() => openContactWithTopic('General Inquiry')} 
        />

        {/* Central Card Stream with smooth page entrance animation */}
        <motion.main 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl mx-auto px-4 pb-8 flex-1"
        >
          {/* Centered Profile Hero */}
          <ProfileHero 
            onOpenContact={() => openContactWithTopic('Strategy Consultation')} 
          />

          {/* Section 1: Work With Bilal */}
          <WorkSection />

          {/* Seamless High-Converting Inline Contact Card */}
          <ContactCard />

          {/* Section 2: Connect With Me */}
          <SocialSection />

          {/* Small ECOM Accelerator Branding & Footer */}
          <Footer />
        </motion.main>
      </div>

      {/* Contact & Inquiry Modal Drawer */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultTopic={contactTopic}
      />

      {/* Floating Action Feedback Toast */}
      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  );
}
