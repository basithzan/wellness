'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, ChevronRight, CheckCircle } from 'lucide-react';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00',
];

function getNextDays(count: number) {
  const days: { date: Date; label: string; value: string }[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d,
      label: d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }),
      value: d.toISOString().slice(0, 10),
    });
  }
  return days;
}

type Step = 'date' | 'time' | 'details' | 'success';

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>('date');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const days = useMemo(() => getNextDays(14), []);

  const reset = () => {
    setStep('date');
    setDate('');
    setTime('');
    setName('');
    setEmail('');
    setMessage('');
    setSubmitting(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Replace with your API: e.g. send to backend, email, or CRM
    await new Promise((r) => setTimeout(r, 1200));
    setStep('success');
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A2E1C] border border-white/10 shadow-2xl rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10 z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <h2
              className="text-2xl font-semibold text-white mb-1"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Book a Consultation
            </h2>
            <p className="text-white/60 text-sm mb-8">
              Free 15-minute discovery call. Select a date and time that works for you.
            </p>

            {step === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-[#C9A96E] mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                  Request received
                </h3>
                <p className="text-white/60 text-sm mb-8 max-w-xs mx-auto">
                  We&apos;ll confirm your consultation by email shortly. Check your inbox for next steps.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-primary px-6 py-3 rounded-none"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 'date' && (
                    <motion.div
                      key="date"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-4"
                    >
                      <p className="text-white/70 text-sm flex items-center gap-2">
                        <Calendar size={18} className="text-[#C9A96E]" />
                        Choose a date
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {days.map((d) => (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setDate(d.value)}
                            className={`px-4 py-3 rounded-lg text-left text-sm transition-all border ${
                              date === d.value
                                ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-white'
                                : 'border-white/15 text-white/80 hover:border-white/30 hover:bg-white/5'
                            }`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        disabled={!date}
                        onClick={() => date && setStep('time')}
                        className="btn-primary w-full rounded-none flex items-center justify-center gap-2 py-3 mt-6 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Next <ChevronRight size={18} />
                      </button>
                    </motion.div>
                  )}

                  {step === 'time' && (
                    <motion.div
                      key="time"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-4"
                    >
                      <button
                        type="button"
                        onClick={() => setStep('date')}
                        className="text-white/50 text-sm hover:text-white/80 mb-2"
                      >
                        ← Change date
                      </button>
                      <p className="text-white/70 text-sm flex items-center gap-2">
                        <Clock size={18} className="text-[#C9A96E]" />
                        Choose a time (GST)
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`px-3 py-2.5 rounded-lg text-sm transition-all border ${
                              time === t
                                ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-white'
                                : 'border-white/15 text-white/80 hover:border-white/30 hover:bg-white/5'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        disabled={!time}
                        onClick={() => time && setStep('details')}
                        className="btn-primary w-full rounded-none flex items-center justify-center gap-2 py-3 mt-6 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Next <ChevronRight size={18} />
                      </button>
                    </motion.div>
                  )}

                  {step === 'details' && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      <button
                        type="button"
                        onClick={() => setStep('time')}
                        className="text-white/50 text-sm hover:text-white/80"
                      >
                        ← Change time
                      </button>
                      <p className="text-white/70 text-sm flex items-center gap-2">
                        <User size={18} className="text-[#C9A96E]" />
                        Your details
                      </p>
                      <div className="form-group">
                        <input
                          id="booking-name"
                          type="text"
                          placeholder=" "
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-input bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder:text-white/30 border-b border-white/10"
                          autoComplete="name"
                        />
                        <label htmlFor="booking-name" className="form-label text-white/50">
                          Full name
                        </label>
                      </div>
                      <div className="form-group">
                        <input
                          id="booking-email"
                          type="email"
                          placeholder=" "
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-input bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder:text-white/30 border-b border-white/10"
                          autoComplete="email"
                        />
                        <label htmlFor="booking-email" className="form-label text-white/50">
                          Email
                        </label>
                      </div>
                      <div className="form-group">
                        <textarea
                          id="booking-message"
                          placeholder=" "
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          className="form-input bg-white/5 border border-white/10 rounded-lg px-4 pt-4 min-h-[80px] resize-y text-white placeholder:text-white/30 border-b border-white/10"
                        />
                        <label htmlFor="booking-message" className="form-label text-white/50">
                          Message (optional)
                        </label>
                      </div>
                      <p className="text-white/40 text-xs">
                        {date} at {time} · We&apos;ll send a calendar invite to confirm.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full rounded-none flex items-center justify-center gap-2 py-3.5 disabled:opacity-70"
                      >
                        {submitting ? 'Scheduling…' : 'Confirm consultation'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
