'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import BookingModal from './BookingModal';

type BookingContextValue = {
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
