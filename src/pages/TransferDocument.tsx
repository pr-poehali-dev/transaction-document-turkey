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
                    {/* Подпись - одной линией без отрыва */}
                    <svg viewBox="0 0 400 140" className="h-full w-auto">
                      <defs>
                        <filter id="inkBlur">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
                        </filter>
                      </defs>
                      
                      {/* Непрерывная линия подписи */}
                      <path 
                        d="M 20 80 Q 30 30, 50 60 Q 55 75, 52 85 Q 50 90, 48 88 L 50 85 Q 52 82, 55 80 Q 62 75, 70 78 Q 75 80, 78 85 L 80 95 Q 82 100, 85 98 Q 88 96, 90 92 Q 92 88, 95 85 Q 100 80, 108 82 Q 115 84, 120 88 Q 125 92, 128 95 Q 130 98, 132 96 L 135 92 Q 138 88, 142 85 Q 148 80, 155 82 Q 162 84, 168 88 Q 172 91, 175 94 Q 178 97, 182 95 L 188 90 Q 195 84, 205 82 Q 215 80, 225 85 L 230 90 Q 232 93, 235 95 L 240 100 Q 245 105, 250 102 L 255 95 Q 260 88, 268 85 Q 275 82, 283 85 Q 290 88, 295 92 L 300 98 Q 305 103, 312 100 Q 318 97, 322 92 L 328 85 Q 333 80, 340 82 Q 348 85, 355 90 L 365 100 Q 372 107, 380 105 Q 388 103, 392 98" 
                        stroke="#001f5c" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        filter="url(#inkBlur)" 
                        opacity="0.88"
                      />
                      
                      {/* Легкие вариации толщины для реалистичности */}
                      <path 
                        d="M 50 60 Q 52 58, 54 60 M 120 88 Q 122 86, 124 88 M 240 100 Q 242 98, 244 100" 
                        stroke="#001f5c" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#inkBlur)" 
                        opacity="0.5"
                      />
                    </svg>
                    
                    {/* Печать банка поверх подписи */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="95" fill="none" stroke="#003d82" strokeWidth="3" opacity="0.35"/>
                        <circle cx="100" cy="100" r="85" fill="none" stroke="#003d82" strokeWidth="2" opacity="0.35"/>
                        <path d="M 100 30 L 100 50 M 170 100 L 150 100 M 100 170 L 100 150 M 30 100 L 50 100" stroke="#003d82" strokeWidth="2" opacity="0.35"/>
                        <text x="100" y="80" textAnchor="middle" fill="#003d82" fontSize="14" fontWeight="bold" opacity="0.4">TÜRKİYE İŞ</text>
                        <text x="100" y="95" textAnchor="middle" fill="#003d82" fontSize="14" fontWeight="bold" opacity="0.4">BANKASI</text>
                        <text x="100" y="112" textAnchor="middle" fill="#003d82" fontSize="11" opacity="0.4">MERKEZ ŞUBESİ</text>
                        <text x="100" y="130" textAnchor="middle" fill="#003d82" fontSize="10" opacity="0.4">İSTANBUL</text>
                        <text x="100" y="145" textAnchor="middle" fill="#003d82" fontSize="9" fontFamily="monospace" opacity="0.35">06.12.2025</text>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-slate-400 pt-1 mt-2">
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