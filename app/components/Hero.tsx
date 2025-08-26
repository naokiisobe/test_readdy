'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-white flex items-center"
      suppressHydrationWarning={true}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20AI%20technology%20workspace%20with%20holographic%20neural%20network%20visualizations%2C%20advanced%20artificial%20intelligence%20data%20streams%20flowing%20through%20digital%20space%2C%20quantum%20computing%20interfaces%20with%20glowing%20circuit%20patterns%20and%20machine%20learning%20algorithms%2C%20sophisticated%20tech%20environment%20with%20blue%20neon%20lighting%20and%20floating%20data%20nodes%2C%20cyberpunk%20AI%20laboratory%20atmosphere%20with%20transparent%20displays%20showing%20complex%20algorithms&width=1920&height=1080&seq=ktp-ai-hero-tech-bg&orientation=landscape')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/5 to-blue-900/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block text-gray-900 mb-4">企業のAI活用を</span>
            <span className="block text-blue-800">完全伴走支援</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            AI戦略立案から技術選定、PoC、導入支援、運用保守、内製化支援まで<br />
            「社外AI部門」として企業のAI活用を一気通貫でサポートいたします
          </p>

          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-12 py-5 bg-blue-800 text-white font-bold text-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 rounded-lg whitespace-nowrap cursor-pointer"
            >
              無料相談を申し込む
            </button>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="px-12 py-5 border-2 border-blue-800 text-blue-800 font-bold text-lg hover:bg-blue-800 hover:text-white transition-all duration-300 rounded-lg whitespace-nowrap cursor-pointer"
            >
              サービス資料をダウンロード
            </button>
          </div>

          <div className={`flex flex-wrap justify-center items-center gap-8 text-gray-700 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-blue-800 text-lg w-5 h-5 flex items-center justify-center"></i>
              <span className="font-medium">初回体験：アイデアラボ</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-blue-800 text-lg w-5 h-5 flex items-center justify-center"></i>
              <span className="font-medium">AI人材不要でスタート可能</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-blue-800 text-lg w-5 h-5 flex items-center justify-center"></i>
              <span className="font-medium">月額10万円から対応</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}