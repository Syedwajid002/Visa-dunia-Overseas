import { FaWhatsapp } from "react-icons/fa";
import React from "react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/message/HWVQLD5MNCM7O1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our WhatsApp group"
      className="
        fixed bottom-5 right-5 z-[9999]
        flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        shadow-lg hover:shadow-2xl
        transition-all duration-300
      "
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </a>
  );
};

export default WhatsAppFloat;
