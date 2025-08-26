
'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800 font-['Pacifico']">KTP AI Lab.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200">
              サービス概要
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200">
              提供サービス
            </button>
            <button onClick={() => scrollToSection('usecases')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200">
              ユースケース
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200">
              料金プラン
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200">
              よくある質問
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200"
            >
              お問い合わせ
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 p-2"
            >
              <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl w-6 h-6 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
              >
                サービス概要
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
              >
                提供サービス
              </button>
              <button 
                onClick={() => scrollToSection('usecases')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
              >
                ユースケース
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
              >
                料金プラン
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
              >
                よくある質問
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-3 py-2 bg-blue-800 text-white rounded-lg font-medium mx-3 mt-2"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
