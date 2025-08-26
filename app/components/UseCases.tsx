'use client';

import { useEffect, useRef, useState } from 'react';

export default function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

  const useCases = [
    {
      industry: '製造業',
      icon: 'ri-tools-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20manufacturing%20facility%20with%20AI-powered%20quality%20control%20systems%2C%20automated%20production%20line%20with%20computer%20vision%20inspection%2C%20industrial%20robots%20and%20smart%20sensors%20in%20clean%20factory%20environment&width=600&height=400&seq=manufacturing-ai&orientation=landscape',
      cases: [
        {
          title: '品質検査の自動化',
          description: 'AIによる画像解析で製品の欠陥検出を自動化し、検査精度向上と工数削減を実現いたします',
          benefits: ['検査精度99.8%', '検査時間50%短縮', '人件費30%削減']
        },
        {
          title: '予知保全システム',
          description: '設備データをAI分析し、故障を事前に予測して計画的なメンテナンスを実現いたします',
          benefits: ['設備停止時間60%削減', '保全コスト40%削減', '生産性20%向上']
        },
        {
          title: '生産計画最適化',
          description: 'AIが需要予測と生産能力を分析し、最適な生産計画を自動生成いたします',
          benefits: ['在庫コスト25%削減', '納期遵守率98%', '残業時間30%削減']
        }
      ]
    },
    {
      industry: '流通業',
      icon: 'ri-store-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20retail%20warehouse%20with%20AI%20inventory%20management%20system%2C%20automated%20sorting%20conveyor%20belts%2C%20smart%20logistics%20and%20distribution%20center%20with%20digital%20displays%20and%20robotic%20systems&width=600&height=400&seq=retail-logistics-ai&orientation=landscape',
      cases: [
        {
          title: '需要予測・在庫最適化',
          description: '販売データと外部データをAI分析し、精度の高い需要予測で適正在庫を実現いたします',
          benefits: ['予測精度85%向上', '在庫コスト35%削減', '機会損失50%削減']
        },
        {
          title: 'パーソナライゼーション',
          description: '顧客の行動データをAI分析し、一人ひとりに最適な商品・コンテンツを提供いたします',
          benefits: ['CVR150%向上', '客単価30%アップ', 'LTV40%向上']
        },
        {
          title: '価格最適化',
          description: '競合価格や需要動向をAI分析し、収益を最大化する動的価格設定を実現いたします',
          benefits: ['売上15%向上', '利益率12%改善', '価格競争力強化']
        }
      ]
    },
    {
      industry: 'コールセンター',
      icon: 'ri-customer-service-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20call%20center%20with%20AI-powered%20customer%20service%20systems%2C%20agents%20using%20voice%20analytics%20and%20sentiment%20analysis%20tools%2C%20digital%20dashboards%20showing%20real-time%20customer%20interaction%20data&width=600&height=400&seq=callcenter-ai&orientation=landscape',
      cases: [
        {
          title: 'リアルタイム通話分析',
          description: 'AIが通話内容をリアルタイム分析し、オペレーターにベストな対応を提案いたします',
          benefits: ['顧客満足度25%向上', '初回解決率80%', '平均通話時間20%短縮']
        },
        {
          title: 'チャットボット導入',
          description: 'よくある質問をAIが自動回答し、複雑な問い合わせのみ人間が対応いたします',
          benefits: ['問い合わせ対応60%自動化', '24時間対応実現', '人件費40%削減']
        },
        {
          title: '感情分析・エスカレーション',
          description: '顧客の感情をAI分析し、不満度が高い場合は自動でベテランにエスカレーションいたします',
          benefits: ['クレーム解決時間50%短縮', '顧客ロイヤルティ向上', 'オペレーター負荷軽減']
        }
      ]
    },
    {
      industry: 'バックオフィス',
      icon: 'ri-building-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20environment%20with%20AI-powered%20document%20processing%20systems%2C%20automated%20workflow%20management%2C%20digital%20transformation%20of%20administrative%20tasks%20with%20smart%20document%20scanners%20and%20data%20analysis%20screens&width=600&height=400&seq=backoffice-ai&orientation=landscape',
      cases: [
        {
          title: '請求書・契約書の自動処理',
          description: 'OCRとAIで帳票を自動読み取り・分類し、データ入力業務を完全自動化いたします',
          benefits: ['データ入力工数90%削減', '処理速度10倍向上', 'エラー率95%削減']
        },
        {
          title: '社内問い合わせ自動化',
          description: '社内規程や手続きに関する問い合わせをAIが自動回答し、業務効率化を実現いたします',
          benefits: ['問い合わせ対応80%自動化', '回答時間即座に', '担当者負荷70%軽減']
        },
        {
          title: '稟議・承認プロセス最適化',
          description: 'AIが稟議内容を分析し、適切な承認者への自動振り分けとリスク評価を実施いたします',
          benefits: ['承認プロセス50%短縮', 'リスク検出精度向上', '意思決定スピード向上']
        }
      ]
    },
    {
      industry: '金融・保険',
      icon: 'ri-bank-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20financial%20institution%20with%20AI-powered%20risk%20analysis%20systems%2C%20digital%20banking%20technology%2C%20fraud%20detection%20algorithms%2C%20automated%20investment%20advisory%20services%20in%20clean%20professional%20environment&width=600&height=400&seq=finance-insurance-ai&orientation=landscape',
      cases: [
        {
          title: '不正取引検知システム',
          description: 'AIが取引パターンをリアルタイム分析し、不正な取引を自動検知・ブロックいたします',
          benefits: ['不正検知率98.5%', '誤検知50%削減', 'レスポンス時間0.1秒']
        },
        {
          title: '与信審査の高度化',
          description: '従来の財務データに加え、AIが多面的なデータを分析して精度の高い与信判定を実現いたします',
          benefits: ['審査精度20%向上', '審査時間70%短縮', '貸倒率15%削減']
        },
        {
          title: 'ロボアドバイザー',
          description: '顧客の投資目標とリスク許容度をAI分析し、最適なポートフォリオを自動提案いたします',
          benefits: ['運用効率25%向上', '顧客満足度85%', '運用コスト60%削減']
        }
      ]
    },
    {
      industry: '医療・ヘルスケア',
      icon: 'ri-hospital-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20healthcare%20facility%20with%20AI%20medical%20diagnosis%20systems%2C%20digital%20health%20monitoring%20equipment%2C%20smart%20patient%20management%20technology%2C%20medical%20imaging%20analysis%20workstations%20in%20hospital%20environment&width=600&height=400&seq=healthcare-medical-ai&orientation=landscape',
      cases: [
        {
          title: '医療画像診断支援',
          description: 'AIがCTやMRI画像を解析し、医師の診断を支援して診断精度と効率を向上させます',
          benefits: ['診断精度95%以上', '読影時間40%短縮', '見落とし率80%削減']
        },
        {
          title: '薬剤相互作用チェック',
          description: '患者の服薬履歴をAI分析し、危険な薬剤相互作用を事前に検知・警告いたします',
          benefits: ['薬物有害事象70%削減', 'チェック時間90%短縮', '医療安全性向上']
        },
        {
          title: '患者状態予測システム',
          description: 'バイタルサインや検査データをAI分析し、患者の容態変化を早期予測いたします',
          benefits: ['重篤化予防率85%', '入院期間20%短縮', '医療コスト削減']
        }
      ]
    },
    {
      industry: '建設・不動産',
      icon: 'ri-building-2-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20construction%20site%20with%20AI-powered%20project%20management%20systems%2C%20drone%20surveying%20technology%2C%20smart%20building%20design%20software%2C%20automated%20construction%20monitoring%20in%20professional%20environment&width=600&height=400&seq=construction-real-estate-ai&orientation=landscape',
      cases: [
        {
          title: '施工進捗管理の自動化',
          description: 'ドローンとAIで現場を定期撮影・解析し、施工進捗を自動把握・管理いたします',
          benefits: ['進捗把握精度95%', '管理工数50%削減', '工期遵守率90%']
        },
        {
          title: '不動産価格査定の高精度化',
          description: '立地・建物・市場データをAI分析し、精度の高い不動産価格査定を実現いたします',
          benefits: ['査定精度90%以上', '査定時間80%短縮', '成約率25%向上']
        },
        {
          title: '建物劣化診断システム',
          description: 'AIが建物の写真や点検データを分析し、劣化状況と修繕計画を自動提案いたします',
          benefits: ['診断精度88%', '点検工数60%削減', '修繕コスト最適化']
        }
      ]
    },
    {
      industry: '教育・研修',
      icon: 'ri-graduation-cap-line',
      image: 'https://readdy.ai/api/search-image?query=modern%20educational%20facility%20with%20AI-powered%20learning%20management%20systems%2C%20personalized%20education%20technology%2C%20adaptive%20learning%20platforms%2C%20smart%20classroom%20with%20digital%20teaching%20tools&width=600&height=400&seq=education-training-ai&orientation=landscape',
      cases: [
        {
          title: 'パーソナライズド学習',
          description: '学習者の理解度や学習パターンをAI分析し、一人ひとりに最適な学習プランを提供いたします',
          benefits: ['学習効果30%向上', '学習時間20%短縮', '継続率85%以上']
        },
        {
          title: '自動採点・フィードバック',
          description: 'AIが記述式問題を自動採点し、詳細なフィードバックを即座に提供いたします',
          benefits: ['採点工数95%削減', 'フィードバック即時提供', '採点精度92%']
        },
        {
          title: '学習支援チャットボット',
          description: '24時間対応のAIチャットボットが学習者の質問に答え、学習サポートを提供いたします',
          benefits: ['質問対応24時間化', '回答精度80%', '学習満足度向上']
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="usecases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            ユースケース（業界別）
          </h2>
          <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            様々な業界でAI活用による大幅な業務改善を実現しています
          </p>
        </div>

        {/* Industry Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                activeTab === index
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              <i className={`${useCase.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
              <span>{useCase.industry}</span>
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={useCases[activeTab].image}
                alt={useCases[activeTab].industry} 
                className="w-full rounded-xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                {useCases[activeTab].industry}でのAI活用事例
              </h3>
              
              <div className="space-y-8">
                {useCases[activeTab].cases.map((caseItem, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{caseItem.title}</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{caseItem.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {caseItem.benefits.map((benefit, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-50 text-blue-800 font-medium rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              あなたの業界での活用可能性を探ってみませんか？
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              業界特有の課題に対するAI活用のアイデアを、アイデアラボで一緒に考えましょう
            </p>
            <button className="px-10 py-4 bg-blue-800 text-white font-bold text-lg rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 cursor-pointer">
              アイデアラボで相談する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}