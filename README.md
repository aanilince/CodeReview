# CoreError 
AI destekli ancak **deterministik** kurallarla çalışan bir kod analiz ve karşılaştırma platformu. Kullanıcılar projeler oluşturur, kod sürümleri yükler, otomatik analiz alır ve sürümleri karşılaştırarak gelişmeleri/gerilemeleri görür. Karşılaştırma sonuçları için açıklayıcı bir AI özeti sunulur.

## Özellikler
- Proje ve sürüm yönetimi
- Kod analizi (özet + issue listesi)
- Sürüm karşılaştırma (iyileşti/değişmedi/kötüleşti)
- AI açıklaması (yalnızca deterministik kararları **açıklar**)
- Dashboard istatistikleri (trendler, en sık issue’lar, aktivite)

## Teknolojiler
- **Backend:** Node.js + Express + Prisma + PostgreSQL  
  - API giriş noktası: [backend/src/index.ts](backend/src/index.ts)  
  - Prisma şeması: [backend/prisma/schema.prisma](backend/prisma/schema.prisma)
- **Frontend:** React + Vite + TypeScript + Tailwind  
  - Uygulama girişi: [frontend/src/main.tsx](frontend/src/main.tsx)  
  - Router: [frontend/src/App.tsx](frontend/src/App.tsx)

## Kurulum

1. Ortam değişkenleri:
- Backend dizinde `.env` oluştur. Gerekli: `DATABASE_URL`, `GEMINI_API_KEY` `SUPABASE_ANON_KEY` `SUPABASE_SERVICE_ROLE_KEY`.

2. Çalıştırma:

 ```bash
  cd backend
  npm install
  
  npx prisma migrate deploy
  npx prisma generate
  npm run dev

  cd frontend
  npm install
  npm run dev