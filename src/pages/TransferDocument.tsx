import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TransferDocument = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Para Transfer Belgesi</h1>
          <Button onClick={() => window.print()} variant="outline">
            <Icon name="Printer" size={18} className="mr-2" />
            Yazdır
          </Button>
        </div>

        <Card className="relative overflow-hidden bg-white shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-bold text-slate-800 rotate-[-30deg] whitespace-nowrap">
              VERIFIED • ONAYLANMIŞ
            </div>
          </div>

          <div className="relative p-8 md:p-12">
            <div className="mb-8 pb-6 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <img 
                    src="https://cdn.poehali.dev/files/f673445c-e403-43f3-86db-8bb619122c6e.jpg" 
                    alt="İşbank Logo" 
                    className="h-12 mb-3"
                  />
                  <p className="text-sm text-slate-600 mt-1">Türkiye İş Bankası A.Ş. • Merkez Şubesi - İstanbul</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-sm">ONAYLANDI</span>
                  </div>
                  <p className="text-sm text-slate-600">Referans No:</p>
                  <p className="text-lg font-bold text-slate-900">TRF-2025-120645</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Gönderen Bilgileri</h3>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="User" size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">Ad Soyad</p>
                        <p className="text-lg font-semibold text-slate-900">Elif Şen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CreditCard" size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">Hesap Türü</p>
                        <p className="text-sm font-medium text-slate-700">Bireysel Hesap</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Transfer Tarihi</h3>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-slate-900">06 Aralık 2025</p>
                        <p className="text-sm text-slate-600">Saat: 14:32 (UTC+3)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Alıcı Bilgileri</h3>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="UserCheck" size={20} className="text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">Ad Soyad</p>
                        <p className="text-lg font-semibold text-slate-900">Semih Çilingir</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Landmark" size={20} className="text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">IBAN</p>
                        <p className="text-sm font-mono font-medium text-slate-900 break-all">
                          TR64 0006 4000 0026 3020 3744 22
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Transfer Tutarı</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-4 border-2 border-blue-300">
                    <div className="flex items-baseline gap-2">
                      <Icon name="DollarSign" size={24} className="text-primary" />
                      <span className="text-4xl font-bold text-slate-900">275,000</span>
                      <span className="text-2xl font-semibold text-slate-600">USD</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">İki yüz yetmiş beş bin Amerikan Doları</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={24} className="text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Güvenlik Onayı</h4>
                  <p className="text-sm text-blue-700">
                    Bu transfer işlemi 256-bit SSL şifreleme ile korunmuş ve BDDK denetimi altında gerçekleştirilmiştir.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-slate-200">
              <div>
                <p className="text-xs text-slate-500 mb-2">İşlem Tipi</p>
                <p className="font-semibold text-slate-900">SWIFT/SEPA Transfer</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">İşlem Durumu</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="font-semibold text-green-700">Başarılı</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Transfer Ücreti</p>
                <p className="font-semibold text-slate-900">$25.00</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Toplam Çekilen Tutar</p>
                <p className="font-semibold text-slate-900">$275,025.00</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Dijital İmza</p>
                  <p className="font-mono text-sm text-slate-700">SHA-256: 8f7a2b...</p>
                </div>
                
                <div className="text-right">
                  <div className="mb-3 h-32 flex items-center justify-end relative">
                    <svg viewBox="0 0 420 140" className="h-full w-auto">
                      <defs>
                        <filter id="inkBlur">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                        </filter>
                      </defs>
                      
                      {/* Непрерывная плавная каллиграфическая подпись "Yılmaz" */}
                      <path 
                        d="M 25 65 Q 28 55, 35 50 Q 42 46, 50 52 Q 58 58, 65 68 L 75 85 Q 80 95, 82 105 Q 83 115, 78 122 Q 75 126, 70 124 Q 68 122, 70 118 Q 72 112, 78 108 Q 85 105, 93 108 Q 100 112, 105 120 Q 108 125, 112 126 Q 116 126, 120 122 Q 125 116, 130 108 Q 136 98, 143 92 Q 150 88, 158 90 Q 166 93, 173 100 Q 178 106, 182 113 Q 185 118, 189 120 Q 193 121, 197 118 Q 202 113, 208 104 Q 215 92, 224 85 Q 233 80, 243 82 Q 253 85, 261 93 Q 268 100, 273 109 Q 276 115, 280 118 Q 284 120, 289 116 Q 295 110, 302 98 Q 310 84, 320 76 Q 330 70, 342 73 Q 354 77, 364 87 Q 372 95, 378 105 Q 382 112, 387 116 Q 392 119, 398 115 Q 405 109, 410 100" 
                        stroke="#1c2a6b" 
                        strokeWidth="2.4" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        filter="url(#inkBlur)" 
                        opacity="0.87"
                      />
                      
                      {/* Дополнительные акценты для естественности */}
                      <path 
                        d="M 50 52 Q 52 50, 54 52" 
                        stroke="#1c2a6b" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.70"
                      />
                      
                      <path 
                        d="M 158 90 Q 160 88, 162 90" 
                        stroke="#1c2a6b" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.70"
                      />
                      
                      {/* Тонкий завершающий росчерк */}
                      <path 
                        d="M 30 130 Q 120 135, 220 128 Q 320 122, 405 130" 
                        stroke="#1c2a6b" 
                        strokeWidth="1.4" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.45"
                      />
                    </svg>
                    
                    {/* Яркая печать банка поверх подписи */}
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 pointer-events-none">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="96" fill="none" stroke="#003d82" strokeWidth="4" opacity="0.65"/>
                        <circle cx="100" cy="100" r="88" fill="none" stroke="#003d82" strokeWidth="3" opacity="0.60"/>
                        <circle cx="100" cy="100" r="78" fill="none" stroke="#003d82" strokeWidth="2" opacity="0.50"/>
                        <path d="M 100 20 L 100 45 M 180 100 L 155 100 M 100 180 L 100 155 M 20 100 L 45 100" stroke="#003d82" strokeWidth="3" opacity="0.60"/>
                        <text x="100" y="72" textAnchor="middle" fill="#003d82" fontSize="16" fontWeight="bold" opacity="0.68">TÜRKİYE İŞ</text>
                        <text x="100" y="90" textAnchor="middle" fill="#003d82" fontSize="16" fontWeight="bold" opacity="0.68">BANKASI A.Ş.</text>
                        <text x="100" y="110" textAnchor="middle" fill="#003d82" fontSize="13" opacity="0.65">MERKEZ ŞUBESİ</text>
                        <text x="100" y="128" textAnchor="middle" fill="#003d82" fontSize="12" opacity="0.65">İSTANBUL</text>
                        <text x="100" y="148" textAnchor="middle" fill="#003d82" fontSize="11" fontFamily="monospace" opacity="0.60">06.12.2025</text>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-slate-400 pt-1">
                    <p className="font-semibold text-slate-900">Ahmet Yılmaz</p>
                    <p className="text-xs text-slate-500">Şube Müdürü</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Bu belge elektronik ortamda oluşturulmuş olup yasal geçerliliğe sahiptir. • BDDK Lisans No: 34567
              </p>
            </div>
          </div>


        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Belge Oluşturma Zamanı: 06 Aralık 2025, 14:32:18 UTC+3
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            background: white;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TransferDocument;