# CoreError 
AI destekli ancak **deterministik** kurallarla çalışan bir kod analiz ve karşılaştırma platformu. Kullanıcılar projeler oluşturur, kod sürümleri yükler, otomatik analiz alır ve sürümleri karşılaştırarak gelişmeleri/gerilemeleri görür. 
##
<img width="1362" height="798" alt="Screenshot 2026-01-28 at 19 17 55" src="https://github.com/user-attachments/assets/d31d5604-12dd-4a25-8a20-7f560e7c4d5b" />

##
Karşılaştırma sonuçları için açıklayıcı bir AI özeti sunulur.
##
<img width="1417" height="778" alt="Screenshot 2026-01-28 at 19 24 16" src="https://github.com/user-attachments/assets/e5dcfb9b-ef97-4fc8-be2a-396ececae1ec" />

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
  - Google Cloud Serverless Container
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
