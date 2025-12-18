'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      // If consent was given, enable third-party cookies if accepted
      const thirdPartyConsent = localStorage.getItem('thirdPartyCookies');
      if (thirdPartyConsent === 'true') {
        enableThirdPartyCookies();
      }
    }
  }, []);

  const enableThirdPartyCookies = () => {
    // Add your third-party cookie scripts here
    // For example: Google Analytics, Facebook Pixel, etc.
    // This is where you would initialize analytics if user accepts
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('thirdPartyCookies', 'true');
    setIsVisible(false);
    enableThirdPartyCookies();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('thirdPartyCookies', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-white rounded-xl shadow-lg border border-nude-beige/30 p-4">
            <p className="text-dark-brown/70 text-sm mb-3">
              We use cookies to enhance your experience.{' '}
              <a href="/privacy-policy#cookies" className="text-gold hover:text-gold/80 underline">
                Learn more
              </a>
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 border border-dark-brown/20 text-dark-brown rounded-lg text-sm font-medium hover:border-dark-brown/40 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-gold text-white rounded-lg text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

