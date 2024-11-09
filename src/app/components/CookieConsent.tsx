"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdCookie } from "react-icons/md";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Mostra o banner após 5 segundos
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-0 right-0 mx-auto z-50 w-full px-4 flex justify-center"
        >
          <div className="bg-[#0A0A0A] border border-zinc-800 px-6 py-3 rounded-lg shadow-lg flex items-center justify-between gap-6 max-w-[600px] w-full">
            <div className="flex items-center gap-4 flex-1">
              <MdCookie className="text-indigo-600 text-2xl flex-shrink-0" />
              <p className="text-[#ccc] text-sm font-dmsans">
                Usamos cookies para melhorar sua experiência no site.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors font-dmsans whitespace-nowrap"
              >
                Aceitar cookies
              </motion.button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-zinc-500 hover:text-zinc-400 transition-colors p-1"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 