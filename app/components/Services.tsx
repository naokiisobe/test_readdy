'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const consultingServices = [
    {
      title: 'AI戦略コンサルティング',
      icon: 'ri-lightbulb-line',
      description: '業種別・業務別のAI活用可能性を分析し、最適な戦略を策定いたします',
      features: [
        'AI活用可能性分析',
        'ロードマップ作成・ROI試算',
        'KPI設計・効果測定方法の策定',
        '他社事例・競合調査',
        '社内説明資料作成支援'
      ]
    },
    {
      title: 'AI人材育成・内製化支援',
      icon: 'ri-team-line',
      description: '生成AIリテラシー向上から内製化まで、人材育成を総合的にサポートいたします',
      features: [
        '生成AIリテラシー研修（役員・社員向け）',
        'AIDD導入支援・ツール選定',
        '社内AIプロジェクト運営支援',
        'AI開発チーム立ち上げ支援',
        '継続的スキルアップサポート'
      ]
    },
    {
      title: 'AIアイデア創出ワークショップ',
      icon: 'ri-lightbulb-line',
      description: '業務課題を洗い出し、AI活用のアイデアを体系的に創出いたします',
      features: [
        '業務課題の洗い出し',
        'AIアイデアの抽出・整理',
        '実現性マトリクス作成',
        '優先順位づけ・ロードマップ化',
        'クイックPoC提案'
      ]
    }
  ];

  const technicalServices = [
    {
      title: '生成AIアプリ・システム研究開発',
      icon: 'ri-code-line',
      description: 'ChatGPT・Claude等を活用したカスタムAIシステムを開発いたします',
      technologies: ['ChatGPT API', 'Claude API', 'Gemini API', 'カスタムRAG', 'ファインチューニング']
    },
    {
      title: '社内文書の分類・検索AI（RAG構築）',
      icon: 'ri-file-search-line',
      description: '社内の膨大な文書データを活用できる検索・分析システムを構築いたします',
      technologies: ['Elasticsearch', 'Vector DB', 'LangChain', '文書前処理', 'セマンティック検索']
    },
    {
      title: '画像・映像解析（異常検知、顔認証、OCR）',
      icon: 'ri-image-line',
      description: '画像・映像データから価値ある情報を抽出するAIシステムを開発いたします',
      technologies: ['Computer Vision', 'Object Detection', 'OCR', 'Face Recognition', 'Anomaly Detection']
    },
    {
      title: '音声・音響解析（議事録、コールセンター分析）',
      icon: 'ri-mic-line',
      description: '音声データの自動転写・分析から業務改善につなげるシステムを構築いたします',
      technologies: ['Speech-to-Text', 'Natural Language Processing', '感情分析', 'キーワード抽出', 'レポート自動生成']
    }
  ];

  return (
    <section ref={servicesRef} id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            提供サービス
          </h2>
          <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            コンサルティングから技術開発まで、企業のAI活用に必要な全てのサービスを提供いたします
          </p>
        </div>

        {/* Consulting Services */}
        <div className="mb-24">
          <h3 className={`text-3xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            コンサルティングメニュー
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-lg mb-8 mx-auto">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">{service.title}</h4>
                <p className="text-gray-700 mb-8 text-center leading-relaxed">{service.description}</p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <i className="ri-check-line text-blue-800 text-lg mt-0.5 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Services */}
        <div>
          <h3 className={`text-3xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            技術支援メニュー
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200 + 1600}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-lg mb-8">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h4>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-50 text-blue-800 font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}