
'use client';

import { useEffect, useRef, useState } from 'react';

export default function BeforeAfter() {
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

  return (
    <section ref={sectionRef} id="beforeafter" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            導入前・導入後の変化
          </h2>
          <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            KTP AI Lab.の支援により、多くの企業で劇的な変化を実現しています
          </p>
        </div>

        {/* Before/After Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Before */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="bg-gray-100 rounded-xl p-8 h-full">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-close-line text-3xl text-red-600"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">導入前</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="ri-error-warning-line text-red-600 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">AI活用が進まない</h4>
                    <p className="text-gray-700">PoCで止まってしまい、本格導入に至らない</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-error-warning-line text-red-600 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">AI人材不足</h4>
                    <p className="text-gray-700">社内にAI専門知識を持つ人材がいない</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-error-warning-line text-red-600 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">効果が見えない</h4>
                    <p className="text-gray-700">投資対効果が不明確で、経営層の理解を得られない</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-error-warning-line text-red-600 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">技術選定に迷う</h4>
                    <p className="text-gray-700">数多くのAI技術から最適なものを選択できない</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-error-warning-line text-red-600 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">継続運用が困難</h4>
                    <p className="text-gray-700">システム導入後の運用・保守体制が整わない</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="bg-blue-50 rounded-xl p-8 h-full border-2 border-blue-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-check-line text-3xl text-blue-800"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">導入後</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">AI活用が本格稼働</h4>
                    <p className="text-gray-700">PoCから本番環境へ確実に移行し、実業務で活用</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">社内AI人材を育成</h4>
                    <p className="text-gray-700">段階的な研修と実践により、内製化チームを構築</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">効果を定量的に可視化</h4>
                    <p className="text-gray-700">ROIやKPIダッシュボードで成果を明確に測定</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">最適技術で効率的開発</h4>
                    <p className="text-gray-700">業務特性に合った技術選定により、短期間で成果を実現</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <i className="ri-check-line text-blue-800 text-xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">安定した継続運用</h4>
                    <p className="text-gray-700">24時間サポート体制で継続的な改善と拡張を実現</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={`mt-20 bg-gray-50 rounded-xl p-12 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">実際の成果事例</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-800 mb-4">60%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">業務効率化</div>
              <div className="text-gray-700">定型作業の自動化により大幅な工数削減を実現</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-800 mb-4">300%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">ROI向上</div>
              <div className="text-gray-700">AI投資に対する明確なリターンを実現</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-800 mb-4">95%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">精度向上</div>
              <div className="text-gray-700">従来手法と比較して大幅な精度向上を達成</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
