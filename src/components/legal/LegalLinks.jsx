import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { LiaCookieSolid } from "react-icons/lia";
import { MdPrivacyTip } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";



const LegalLinks = ({ className = '' }) => {
  const [modalOpen, setModalOpen] = useState({ type: null, isOpen: false });

  const openModal = (type) => {
    setModalOpen({ type, isOpen: true });
  };

  const closeModal = () => {
    setModalOpen({ type: null, isOpen: false });
  };

  const links = [
    { 
      key: 'privacy', 
      label:'Privacidad',
      icon: <MdPrivacyTip />
    },
    { 
      key: 'cookies', 
      label:'Cookies',
      icon:  <LiaCookieSolid />
    },
    { 
      key: 'terms', 
      label:'Términos',
      icon: <FaClipboardList />
    }
  ];

  return (
    <>
      <div className={`flex gap-4 ${className}`}>
        {links.map((link) => (
          <button
            key={link.key}
            onClick={() => openModal(link.key)}
            className="flex items-center gap-2 text-xs opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 px-2 py-1 rounded-md hover:bg-white/10"
            style={{ color:'#e2e8f0' }}
          >
            <span className="opacity-80">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div>
      
      <LegalModal 
        isOpen={modalOpen.isOpen}
        onClose={closeModal}
        type={modalOpen.type}
      />
    </>
  );
};

export default LegalLinks;