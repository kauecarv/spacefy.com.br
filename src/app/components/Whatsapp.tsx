"use client";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/+556281615951?text=Olá, gostaria de falar com vocês."
    target="_blank" >
      <motion.div
        className="fixed right-8 bottom-6 z-50 bg-white text-black rounded-full p-4 shadow-lg transition duration-300 hover:bg-[#101010] hover:text-white"
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 1.9, duration: 0.4 }} 
      >
        <FaWhatsapp className='text-lg'/>
      </motion.div>
    </Link>
  );
};

export default WhatsAppButton;
