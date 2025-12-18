'use client';

import { useState, useEffect } from 'react';
import ServiceModal from './ServiceModal';
import type { Service } from '@data/services';

interface OpenServiceModalEvent extends CustomEvent {
  detail: { service: Service };
}

declare global {
  interface WindowEventMap {
    openServiceModal: OpenServiceModalEvent;
  }
}

export default function ServiceModalWrapper() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for custom event to open modal
    const handleOpenModal = (event: WindowEventMap['openServiceModal']) => {
      setSelectedService(event.detail.service);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openServiceModal', handleOpenModal);

    return () => {
      window.removeEventListener('openServiceModal', handleOpenModal);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedService(null);
    document.body.style.overflow = '';
  };

  return <ServiceModal service={selectedService} isOpen={isOpen} onClose={handleClose} />;
}

