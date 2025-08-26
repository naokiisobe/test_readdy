
'use client';

import { useEffect, useRef, useState } from 'react';

export default function PricingPlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'アイデアラボ',
      price: '30〜50万円',
      period: '全2回',
      description: '課題洗い出し＋アイデア抽出ワークショップ',
      popular: false,
      features: [
        '全2回のワークショップ（課題洗い出し＋アイデア抽出）',
        '業務プロセス分析・課題整理',
        'AI活用アイデアの体系的抽出',
        '実現性マトリクス作成',
        '優先順位づけ・ロードマップ提案',
        '詳細資料・レポート提供',
        'クイックPoC提案（オプション）'
      ],
      buttonText: 'まずはここから開始'
    },
    {
      name: 'PoC伴走支援',
      price: '100〜300万円',
      period: '3〜6ヶ月',
      description: '要件整理からPoC運用支援まで',
      popular: true,
      features: [
        'プロジェクト要件整理・仕様策定',
        'AI/LLM技術選定・比較評価',
        'PoC環境構築・開発支援',
        'データ準備・前処理支援',
        'プロトタイプ設計・実装',
        '効果測定・評価レポート作成',
        '本番展開への移行計画策定',
        '週次進捗会議・課題解決サポート'
      ],
      buttonText: 'PoC支援を依頼する'
    },
    {
      name: '導入・展開支援',
      price: '200〜500万円',
      period: '6〜12ヶ月',
      description: 'PoC後の本番展開から定着化まで',
      popular: false,
      features: [
        'PoC結果を踏まえた本番システム設計',
        'スケーラブルなインフラ構築',
        'セキュリティ・ガバナンス対応',
        'ユーザートレーニング・マニュアル作成',
        '段階的ロールアウト支援',
        'KPIモニタリング・ダッシュボード構築',
        '定着化サポート・改善提案',
        '成果レポート作成・効果検証'
      ],
      buttonText: '本格導入を相談する'
    },
    {
      name: '継続伴走',
      price: '10〜100万円',
      period: '月額',
      description: '継続的なアドバイザリー・実務サポート',
      popular: false,
      features: [
        'AI戦略アドバイザリー（月次）',
        '新規ユースケース発掘・提案',
        'システム運用・保守サポート',
        '継続的な改善・最適化提案',
        '最新AI技術動向の情報提供',
        '内製化チーム育成支援',
        'トラブルシューティング対応',
        '成果レビュー・次期計画策定'
      ],
      buttonText: '継続支援を検討する'
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            プラン・料金表
          </h2>
          <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            お客様の状況と目的に応じて、最適なプランをお選びいただけます
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-lg border-2 p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-800 ring-4 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    最も人気
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-lg">({plan.period})</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <i className="ri-check-line text-blue-800 text-lg mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-4 px-4 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-blue-800 text-white hover:bg-blue-900 hover:shadow-lg'
                    : 'border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <i className="ri-money-dollar-circle-line text-4xl text-blue-800 mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold text-gray-900 mb-4">柔軟な料金体系</h4>
            <p className="text-gray-700 leading-relaxed">プロジェクト規模や期間に応じて、柔軟に料金調整いたします</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <i className="ri-shield-check-line text-4xl text-blue-800 mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold text-gray-900 mb-4">成果保証</h4>
            <p className="text-gray-700 leading-relaxed">PoCで目標成果が得られない場合、追加支援を無償で実施します</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <i className="ri-customer-service-2-line text-4xl text-blue-800 mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold text-gray-900 mb-4">24時間サポート</h4>
            <p className="text-gray-700 leading-relaxed">導入後のトラブルや疑問に、24時間以内で必ず回答いたします</p>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-1600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              どのプランが最適か迷われていますか？
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              お客様の状況をお聞きして、最適なプランと進め方をご提案いたします
            </p>
            <button className="px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 cursor-pointer">
              無料相談で最適プランを診断
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
