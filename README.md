# ZENO — The Silent Bank
### البنك الذي يفهمك قبل أن تطلب

> **تنبيه مهم:** هذا مشروع تجريبي (Demo/Prototype) بالكامل. لا توجد بيانات بنكية حقيقية، ولا تكامل مع أي بنك، ولا معاملات مالية فعلية.

---

## نظرة عامة

ZENO هي منصة مصرفية استباقية تهدف إلى تحسين تجربة العميل. المنصة مبنية كنموذج أولي (Prototype) يعرض مستقبل الخدمات المصرفية الذكية باستخدام بيانات تجريبية.

## التقنيات المستخدمة

| الجانب | التقنية |
|--------|---------|
| **الواجهة الأمامية** | React 18 + Vite + TypeScript |
| **التصميم** | Tailwind CSS v4 + shadcn/ui |
| **الحركات** | Framer Motion |
| **الرسوم البيانية** | Recharts |
| **الخلفية** | Node.js + Express 5 + TypeScript |
| **API Client** | TanStack React Query (Orval codegen) |
| **التحقق من الصحة** | Zod |
| **اللغة** | عربي (RTL) بالكامل |
| **الثيم** | داكن فاخر (FinTech) |

## البنية

```
zeno-platform (monorepo)
├── artifacts/
│   ├── zeno-platform/     # الواجهة الأمامية (React + Vite)
│   └── api-server/        # الخلفية (Express + TypeScript)
├── lib/
│   ├── api-spec/          # مواصفات OpenAPI
│   ├── api-client-react/  # React Query hooks (مولّد تلقائياً)
│   ├── api-zod/           # Zod schemas (مولّد تلقائياً)
│   └── db/                # Drizzle ORM + PostgreSQL
└── docs/
    └── api.md             # توثيق API
```

## إعداد المشروع

### المتطلبات
- Node.js 20+
- pnpm 9+

### التثبيت
```bash
# تثبيت التبعيات
pnpm install

# نسخ ملف البيئة
cp .env.example .env
```

### التشغيل

```bash
# تشغيل الخلفية (على المنفذ المُعيَّن بواسطة النظام)
pnpm --filter @workspace/api-server run dev

# تشغيل الواجهة الأمامية (على المنفذ المُعيَّن بواسطة النظام)
pnpm --filter @workspace/zeno-platform run dev
```

> ملاحظة: في بيئة Replit، يتم إدارة المنافذ تلقائياً. في بيئة محلية، الخلفية تعمل على **4000** والواجهة على **3000**.

### أوامر مفيدة

```bash
# توليد API hooks من OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# فحص TypeScript
pnpm run typecheck

# فحص TypeScript للمكتبات فقط
pnpm run typecheck:libs
```

## الصفحات

| الصفحة | المسار | الوصف |
|--------|--------|-------|
| لوحة التحكم | `/` | نظرة عامة على الرصيد والمعاملات الأخيرة |
| الحسابات | `/accounts` | جميع الحسابات البنكية |
| المعاملات | `/transactions` | سجل المعاملات مع التصفية |
| البطاقات | `/cards` | إدارة البطاقات الائتمانية |
| التحليلات | `/analytics` | تحليل الإنفاق والاتجاهات |
| الإشعارات | `/notifications` | إشعارات المعاملات والأمان |
| الملف الشخصي | `/profile` | إعدادات المستخدم |

## API Endpoints

| الطريقة | المسار | الوصف |
|---------|--------|-------|
| `GET` | `/api/healthz` | فحص صحة الخادم |
| `GET` | `/api/dashboard/summary` | ملخص لوحة التحكم |
| `GET` | `/api/accounts` | قائمة الحسابات |
| `GET` | `/api/accounts/:id` | تفاصيل حساب |
| `GET` | `/api/transactions` | قائمة المعاملات |
| `GET` | `/api/transactions/:id` | تفاصيل معاملة |
| `GET` | `/api/cards` | قائمة البطاقات |
| `GET` | `/api/cards/:id` | تفاصيل بطاقة |
| `GET` | `/api/analytics/spending` | تحليل الإنفاق بالفئات |
| `GET` | `/api/analytics/monthly` | البيانات الشهرية |
| `GET` | `/api/notifications` | قائمة الإشعارات |
| `GET` | `/api/profile` | الملف الشخصي |

## هوية العلامة التجارية

| العنصر | القيمة |
|--------|--------|
| الخلفية الداكنة | `#050914` |
| الأزرق الأساسي | `#39bdf8` |
| البنفسجي | `#6f63ff` |
| أخضر النجاح | `#35d07f` |
| النص الأبيض | `#f7fbff` |
| النص الثانوي | `#9db0c8` |

## ملاحظات مهمة

- **جميع البيانات تجريبية** — لا توجد أي بيانات مالية حقيقية
- **لا يوجد تكامل بنكي** — المنصة منفصلة تماماً عن أي نظام بنكي
- **لا توجد معاملات مالية فعلية** — كل الأرقام للعرض فقط
- المشروع مبني على pnpm workspaces (monorepo)
