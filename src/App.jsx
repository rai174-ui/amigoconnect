import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote'); // 'quote' or 'meeting'

  const handleOpenModal = (type = 'quote') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-amber-500 selection:text-slate-950">
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
          <Route path="/about" element={<About onOpenModal={handleOpenModal} />} />
          <Route path="/services" element={<Services onOpenModal={handleOpenModal} />} />
          <Route path="/projects" element={<Projects onOpenModal={handleOpenModal} />} />
          <Route path="/resources" element={<Resources onOpenModal={handleOpenModal} />} />
          <Route path="/contact" element={<Contact onOpenModal={handleOpenModal} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Quote & Meeting Popup Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />
    </div>
  );
}
