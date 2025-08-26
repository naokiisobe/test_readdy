
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold font-['Pacifico'] text-blue-300">KTP AI Lab.</span>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              企業のAI活用を戦略立案から内製化支援まで一気通貫でサポートする「社外AI部門」として機能するR&D BPO型サービスです。
            </p>
            <div className="flex space-x-6">
              <div className="text-gray-300">
                <i className="ri-phone-line text-xl mr-2"></i>
                <span>03-1234-5678</span>
              </div>
              <div className="text-gray-300">
                <i className="ri-mail-line text-xl mr-2"></i>
                <span>contact@ktp-ai-lab.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">サービス</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  AI戦略コンサルティング
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  AI人材育成・内製化支援
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  AIアイデア創出ワークショップ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  生成AIアプリ・システム開発
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  画像・音声解析システム
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6">メニュー</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors duration-200">
                  サービス概要
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition-colors duration-200">
                  提供サービス
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('usecases')} className="hover:text-blue-300 transition-colors duration-200">
                  ユースケース
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-300 transition-colors duration-200">
                  料金プラン
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-blue-300 transition-colors duration-200">
                  よくある質問
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300 transition-colors duration-200">
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 KTP AI Lab. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">プライバシーポリシー</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">利用規約</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">セキュリティ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
