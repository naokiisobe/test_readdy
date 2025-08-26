
'use client';

import { useEffect, useRef, useState } from 'react';

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: 'AI人材がいなくても大丈夫ですか？',
      answer: 'はい、大丈夫です。KTP AI Lab.が「社外AI部門」として機能するため、AI専門人材がいない企業でも安心してAI導入を進めていただけます。むしろAI人材がいない企業こそ、私たちのサービスが最も価値を発揮いたします。基礎的なリテラシー向上から内製化チーム育成まで、段階的に支援いたします。'
    },
    {
      question: 'どのくらいの期間で成果が出ますか？',
      answer: 'プロジェクトの規模により異なりますが、アイデアラボでは2週間程度で課題整理と活用方針が明確になります。PoCでは3-6ヶ月で実証結果が得られ、本格導入では6-12ヶ月で業務への定着と成果の可視化を実現いたします。継続伴走により、さらなる改善と拡大を支援いたします。'
    },
    {
      question: '他社のAIコンサルティングとの違いは何ですか？',
      answer: '戦略立案で終わらず、実装・運用・内製化まで一気通貫で支援する点が大きな違いです。R&D BPO型のサービスとして、お客様の業務に深く入り込み、「社外AI部門」として継続的に伴走いたします。また、業種別・業務別の豊富なユースケースに基づいた実践的な支援を提供しています。'
    },
    {
      question: '小規模な会社でも対応してもらえますか？',
      answer: '対応可能です。従業員数十名の中小企業から大企業まで、幅広くサポートしています。規模に応じて最適なプランをご提案し、月額10万円からの継続伴走プランもご用意しています。小規模だからこそ、迅速にAI活用の効果を実感していただけるケースも多くございます。'
    },
    {
      question: 'どのような業界・業務に対応していますか？',
      answer: '製造業、流通業、コールセンター、バックオフィスなど、幅広い業界・業務に対応しています。特に定型業務の自動化、データ分析・予測、顧客対応の効率化、品質管理の高度化などの領域で豊富な実績がございます。業界固有の課題にも柔軟に対応いたします。'
    },
    {
      question: 'セキュリティや情報漏洩の心配はありませんか？',
      answer: 'セキュリティには最大限の注意を払っています。秘密保持契約の締結、オンプレミスやプライベートクラウドでの構築、データの暗号化、アクセス制御など、お客様の要求レベルに応じたセキュリティ対策を実施いたします。金融機関や官公庁での実績もございます。'
    },
    {
      question: 'PoCが失敗した場合はどうなりますか？',
      answer: 'PoCで目標とする成果が得られなかった場合、原因分析を行い、追加の改善施策を無償で実施いたします。また、失敗要因を踏まえた改善案の提示や、別アプローチでの再挑戦も支援いたします。PoCは実験であり、失敗も貴重な学習と捉え、次のステップにつなげることが重要と考えています。'
    },
    {
      question: '内製化支援では具体的にどのようなことをしてもらえますか？',
      answer: 'AI開発チームの立ち上げ支援、技術研修・ハンズオン指導、開発環境の構築、プロジェクトマネジメント手法の導入、継続的な技術アドバイザリーなどを行います。最終的にはお客様のチームが自律的にAI開発・運用できる状態を目指し、段階的に支援レベルを調整してまいります。'
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            よくある質問
          </h2>
          <p className={`text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            お客様からよくいただく質問にお答えいたします
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <i className={`ri-arrow-down-s-line text-3xl text-gray-500 transition-transform duration-300 w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                  openItems.includes(index) ? 'transform rotate-180' : ''
                }`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6 border-t-2 border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed pt-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-50 rounded-xl p-12 border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              他にご質問がございますか？
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします
            </p>
            <button className="px-10 py-4 bg-blue-800 text-white font-bold text-lg rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 cursor-pointer">
              お問い合わせする
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
