
'use client';

import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ctaRef} id="contact" className="py-24 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            まずは無料相談から始めませんか？
          </h2>
          
          <p className="text-xl mb-16 max-w-4xl mx-auto leading-relaxed">
            AI活用でお困りのことがございましたら、お気軽にご相談ください。<br />
            専門チームがあなたの課題に最適なソリューションをご提案いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Service Options */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="ri-lightbulb-line text-3xl text-gray-900"></i>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">アイデアラボで初回体験</h3>
              <p className="mb-8 text-lg leading-relaxed">
                まずは2回のワークショップで、あなたの業務課題とAI活用の可能性を整理しましょう。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">料金：30〜50万円</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">期間：2週間</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">成果物：課題整理・活用提案</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors duration-300 cursor-pointer">
                アイデアラボを申し込む
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="ri-message-3-line text-3xl text-gray-900"></i>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">まずは無料相談</h3>
              <p className="mb-8 text-lg leading-relaxed">
                どこから始めればよいかわからない方は、無料相談でお気軽にご相談ください。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">料金：無料</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">時間：60分</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-lg">オンライン・対面両対応</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-green-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-green-300 transition-colors duration-300 cursor-pointer">
                無料相談を申し込む
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-3xl font-bold mb-8 text-center">お問い合わせフォーム</h3>
            <form id="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-lg font-medium text-gray-900 mb-3">
                    会社名 *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                    placeholder="株式会社○○"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-lg font-medium text-gray-900 mb-3">
                    部署
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                    placeholder="経営企画部"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-3">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-3">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-900 mb-3">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-lg font-medium text-gray-900 mb-3">
                  ご興味のあるサービス
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 pr-8 text-lg"
                >
                  <option value="">選択してください</option>
                  <option value="アイデアラボ">アイデアラボ</option>
                  <option value="PoC伴走支援">PoC伴走支援</option>
                  <option value="導入・展開支援">導入・展開支援</option>
                  <option value="継続伴走">継続伴走</option>
                  <option value="無料相談">まずは無料相談</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-3">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-lg"
                  placeholder="現在の課題やご相談内容をお聞かせください（500文字以内）"
                ></textarea>
                <div className="text-right text-gray-600 mt-2">
                  <span id="message-count">0</span>/500文字
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-800 text-white font-bold text-lg rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <i className="ri-phone-line text-4xl mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold mb-3">お電話でのお問い合わせ</h4>
            <p className="text-lg mb-2">03-1234-5678</p>
            <p className="text-white/80">平日 9:00-18:00</p>
          </div>
          <div>
            <i className="ri-mail-line text-4xl mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold mb-3">メールでのお問い合わせ</h4>
            <p className="text-lg mb-2">contact@ktp-ai-lab.com</p>
            <p className="text-white/80">24時間受付</p>
          </div>
          <div>
            <i className="ri-time-line text-4xl mb-6 w-10 h-10 flex items-center justify-center mx-auto"></i>
            <h4 className="text-xl font-bold mb-3">対応時間</h4>
            <p className="text-lg mb-2">初回対応：24時間以内</p>
            <p className="text-white/80">詳細回答：48時間以内</p>
          </div>
        </div>
      </div>
    </section>
  );
}
