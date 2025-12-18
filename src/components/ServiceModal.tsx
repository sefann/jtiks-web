import { motion, AnimatePresence } from 'framer-motion';
import type { Service } from '@data/services';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white shadow-lg rounded-full transition-colors z-50"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image - Full Width Hero */}
          <div className="w-full h-96 md:h-[500px] bg-nude-beige/20">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
                {service.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-dark-brown/70">
                <span>Duration: {service.duration}</span>
                <span className="capitalize">Category: {service.category}</span>
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-dark-brown/80 leading-relaxed mb-6 text-lg">
                  {service.fullDescription || service.description}
                </p>
              </div>

              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-dark-brown mb-4">
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-dark-brown/70">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/booking"
                  onClick={onClose}
                  className="flex-1 bg-blush-pink text-white px-6 py-3 rounded-full text-center font-medium hover:bg-blush-pink/90 transition-colors"
                >
                  Book This Service
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-dark-brown/20 text-dark-brown rounded-full font-medium hover:border-dark-brown/40 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

