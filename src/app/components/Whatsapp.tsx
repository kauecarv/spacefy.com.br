"use client";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/55XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
      <motion.div
        className="fixed bottom-6 right-10 text-xl bg-white text-black rounded-full p-4 shadow-lg transition duration-300 hover:bg-[#101010] hover:text-white"
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 1.9, duration: 0.4 }} 
      >
        <FaWhatsapp />
      </motion.div>
    </Link>
  );
};

export default WhatsAppButton;
