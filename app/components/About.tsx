
'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            KTP AI Lab.とは
          </h2>
          <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            企業のAI活用を戦略立案から内製化支援まで一気通貫でサポートする<br />
            「社外AI部門」として機能するR&D BPO型サービスです
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-10 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">社外AI部門として企業のAI活用を完全サポート</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                KTP AI Lab.は、AI戦略立案から技術選定、PoC実施、本格導入、運用保守、内製化支援まで、企業のAI活用に必要な全工程を一気通貫でサポートいたします。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                AI人材がいない企業でも安心してAI導入を進められるよう、専門チームが「社外AI部門」として機能し、お客様の業務に深く入り込んで支援いたします。
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">主な特徴</h4>
              <ul className="space-y-4">
                {[
                  'AI戦略から内製化まで一気通貫サポート',
                  'R&D BPO型の専門チーム体制', 
                  '業種別・業務別のAI活用ノウハウ',
                  '継続的な伴走支援による確実な定着'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20business%20team%20collaborating%20on%20AI%20strategy%20with%20digital%20screens%20showing%20data%20analytics%20and%20machine%20learning%20workflows%2C%20modern%20office%20environment%20with%20consultants%20working%20together%20on%20artificial%20intelligence%20solutions&width=600&height=400&seq=ktp-about-team&orientation=landscape"
                alt="KTP AI Lab.チーム" 
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-800/5 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-xl p-12 shadow-lg transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {[
            { number: '100+', label: 'プロジェクト実績' },
            { number: '95%', label: 'PoC成功率' },
            { number: '80%', label: '内製化達成率' },
            { number: '24時間', label: '平均初回対応時間' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
