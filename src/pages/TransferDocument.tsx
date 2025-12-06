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
              <div className="relative">
                <p className="text-xs text-slate-500 mb-2">Toplam Çekilen Tutar</p>
                <p className="font-semibold text-slate-900">$275,025.00</p>
                
                {/* Печать банка поверх суммы */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="#003d82" strokeWidth="3.5" opacity="0.38"/>
                    <circle cx="100" cy="100" r="85" fill="none" stroke="#003d82" strokeWidth="2.5" opacity="0.38"/>
                    <circle cx="100" cy="100" r="75" fill="none" stroke="#003d82" strokeWidth="1.5" opacity="0.25"/>
                    <path d="M 100 25 L 100 48 M 175 100 L 152 100 M 100 175 L 100 152 M 25 100 L 48 100" stroke="#003d82" strokeWidth="2.5" opacity="0.38"/>
                    <text x="100" y="75" textAnchor="middle" fill="#003d82" fontSize="15" fontWeight="bold" opacity="0.42">TÜRKİYE İŞ</text>
                    <text x="100" y="92" textAnchor="middle" fill="#003d82" fontSize="15" fontWeight="bold" opacity="0.42">BANKASI A.Ş.</text>
                    <text x="100" y="112" textAnchor="middle" fill="#003d82" fontSize="12" opacity="0.42">MERKEZ ŞUBESİ</text>
                    <text x="100" y="128" textAnchor="middle" fill="#003d82" fontSize="11" opacity="0.42">İSTANBUL</text>
                    <text x="100" y="145" textAnchor="middle" fill="#003d82" fontSize="10" fontFamily="monospace" opacity="0.38">06.12.2025</text>
                  </svg>
                </div>
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
                    <svg viewBox="0 0 480 140" className="h-full w-auto">
                      <defs>
                        <filter id="inkBlur">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
                        </filter>
                      </defs>
                      
                      {/* Элегантная каллиграфическая подпись с начальным завитком */}
                      <path 
                        d="M 30 80 Q 25 70, 27 60 Q 30 50, 40 47 Q 50 45, 58 52 Q 65 58, 67 68 Q 68 78, 62 86 Q 58 90, 52 88 Q 48 86, 48 82 L 50 75 Q 53 68, 60 65 Q 68 63, 76 66 Q 84 70, 90 76 L 98 86 Q 102 92, 105 96 Q 108 100, 112 98 Q 116 95, 120 90 L 128 80 Q 135 72, 143 68 Q 152 65, 162 68 Q 172 72, 180 78 L 190 88 Q 196 94, 202 98 Q 208 102, 215 99 Q 222 95, 228 88 L 238 76 Q 246 68, 256 65 Q 266 63, 276 67 Q 286 72, 294 80 L 304 92 Q 310 98, 316 102 Q 322 105, 329 102 Q 336 98, 342 91 L 352 80 Q 360 72, 370 69 Q 380 67, 390 71 Q 400 76, 408 84 L 418 95 Q 424 102, 430 106 Q 436 109, 443 106 Q 450 102, 455 96 L 462 88 Q 468 82, 472 80" 
                        stroke="#1e2a6e" 
                        strokeWidth="2.2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        filter="url(#inkBlur)" 
                        opacity="0.88"
                      />
                      
                      {/* Перекрестный штрих через подпись для аутентичности */}
                      <path 
                        d="M 95 78 L 110 92" 
                        stroke="#1e2a6e" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.82"
                      />
                      
                      {/* Декоративный финальный росчерк снизу */}
                      <path 
                        d="M 25 100 Q 80 105, 140 102 Q 200 100, 260 103 Q 320 106, 380 102 Q 420 100, 445 98" 
                        stroke="#1e2a6e" 
                        strokeWidth="1.8" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.55"
                      />
                      
                      {/* Точки нажима для реалистичности */}
                      <circle cx="60" cy="65" r="1.5" fill="#1e2a6e" opacity="0.7" filter="url(#inkBlur)"/>
                      <circle cx="162" cy="68" r="1.5" fill="#1e2a6e" opacity="0.7" filter="url(#inkBlur)"/>
                      <circle cx="276" cy="67" r="1.5" fill="#1e2a6e" opacity="0.7" filter="url(#inkBlur)"/>
                      <circle cx="390" cy="71" r="1.5" fill="#1e2a6e" opacity="0.7" filter="url(#inkBlur)"/>
                    </svg>
                    
                    {/* Яркая печать банка поверх подписи */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 w-32 h-32 pointer-events-none">
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