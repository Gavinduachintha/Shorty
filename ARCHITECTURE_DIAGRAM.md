# 🎯 Vercel Redirect Architecture

## System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Internet User                             │
│  (Email, Social Media, QR Code, Messages, Browser)              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ Clicks Link
                           ↓
        ┌──────────────────────────────────────┐
        │ https://yourdomain.vercel.app/r/abc123
        └──────────────────┬───────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │         Vercel Global CDN            │
        │  (Multiple regions worldwide)        │
        └──────────────────┬───────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │   vercel.json Rewrite Rule:          │
        │   /r/:code → /api/redirect.js        │
        └──────────────────┬───────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │     Frontend/api/redirect.js         │
        │  (Serverless Function - Vercel)     │
        │                                      │
        │  1. Receive :code from URL          │
        │  2. Build Supabase endpoint         │
        │  3. Add API key header              │
        │  4. Fetch from Supabase             │
        │  5. Return 302 redirect             │
        └──────────────────┬───────────────────┘
                           │
                           ↓
     ┌─────────────────────────────────────────────┐
     │  Supabase Edge Function                     │
     │  https://.../functions/v1/redirect          │
     │                                             │
     │  1. Receive short :code                    │
     │  2. Query database: urls.short_code        │
     │  3. Find original_url                      │
     │  4. Update click_count++                   │
     │  5. Return 302 Location header             │
     └─────────────────────┬───────────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │    Vercel API Returns 302 Redirect   │
        │    Location: original_url             │
        └──────────────────┬───────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │   Browser Follows Redirect           │
        │   Opens: https://www.google.com      │
        │   (or whatever original URL is)      │
        └──────────────────┬───────────────────┘
                           │
                           ↓
        ┌──────────────────────────────────────┐
        │       Original URL Opens ✅          │
        │       User sees destination          │
        │       Analytics updated              │
        └──────────────────────────────────────┘
```

---

## Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      Your Shorty                            │
└─────────────────────────────────────────────────────────────┘

Deployment:
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   GitHub Repo    │→ │  Vercel (Deploy) │→ │  Live on Web    │
│   production     │  │  Frontend        │  │  yourdomain.    │
│   branch         │  │  + API routes    │  │  vercel.app     │
└──────────────────┘  └──────────────────┘  └──────────────────┘

Services:
┌──────────────────────────┐        ┌──────────────────────────┐
│   Vercel Frontend        │        │  Supabase Backend        │
│                          │        │                          │
│  ✓ React App             │        │  ✓ PostgreSQL Database   │
│  ✓ Dashboard             │        │  ✓ Edge Functions        │
│  ✓ API Routes (/r/:code) │←→      │  ✓ Authentication       │
│  ✓ Global CDN            │        │  ✓ API Gateway          │
│                          │        │                          │
│  yourdomain.vercel.app   │        │  vrsbwbsgmdset...       │
│                          │        │  .supabase.co           │
└──────────────────────────┘        └──────────────────────────┘
          ↓                                     ↓
    User Dashboard                    Data Storage & Logic
    Create URLs                       Process Redirects
    View Analytics                    Track Clicks
    Copy Links                        Database Queries
```

---

## Data Flow

```
Creating a Short URL:
┌─────────────────────────────────────────────────────────────┐
│ 1. User enters long URL in Dashboard                        │
│    → https://www.google.com                                │
│                           ↓                                  │
│ 2. Dashboard generates short code                           │
│    → abc123                                                 │
│                           ↓                                  │
│ 3. Creates short URL with Vercel domain                     │
│    → https://yourdomain.vercel.app/abc123                   │
│                           ↓                                  │
│ 4. Database stores:                                         │
│    short_code: https://yourdomain.vercel.app/abc123        │
│    original_url: https://www.google.com                     │
│    user_id: your-id                                         │
│    click_count: 0                                           │
│                           ↓                                  │
│ 5. Dashboard shows shareable link:                          │
│    https://yourdomain.vercel.app/r/abc123                   │
│    "Works anywhere on the internet"                         │
└─────────────────────────────────────────────────────────────┘

Redirect Process:
┌─────────────────────────────────────────────────────────────┐
│ 1. User receives link                                       │
│    → https://yourdomain.vercel.app/r/abc123               │
│                           ↓                                  │
│ 2. User clicks link from email/social/etc                   │
│                           ↓                                  │
│ 3. Browser requests Vercel                                  │
│    → GET /r/abc123                                          │
│                           ↓                                  │
│ 4. Vercel routes to API handler                             │
│    → /api/redirect.js?code=abc123                          │
│                           ↓                                  │
│ 5. API handler fetches from Supabase                        │
│    with API key                                             │
│                           ↓                                  │
│ 6. Supabase Edge Function processes                         │
│    - Query: SELECT original_url FROM urls                   │
│    WHERE short_code = 'https://yourdomain.../abc123'        │
│    - Result: original_url = https://www.google.com          │
│    - Update: click_count++                                  │
│    - Return: 302 + Location header                          │
│                           ↓                                  │
│ 7. API returns redirect to browser                          │
│    HTTP/1.1 302 Found                                       │
│    Location: https://www.google.com                         │
│                           ↓                                  │
│ 8. Browser opens original URL ✅                            │
│    → https://www.google.com                                │
│                           ↓                                  │
│ 9. Analytics updated                                        │
│    click_count: 0 → 1                                       │
│    last_clicked_at: updated                                 │
│                           ↓                                  │
│ 10. User sees Google page ✅                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Files & Routes Map

```
Frontend
├── package.json
├── vite.config.js
│
├── vercel.json                 ← Route Configuration
│   └── /r/:code → Supabase Edge Function
│
├── api/
│   └── redirect.js            ← API Handler
│       └── Receives /r/:code
│           Fetches from Supabase
│           Returns 302 redirect
│
├── src/
│   ├── pages/
│   │   └── dashboard/
│   │       ├── Dashboard.jsx  ← Main UI
│   │       │   └── Shows external URL
│   │       │   └── Copy button
│   │       │   └── Visit button
│   │       │   └── Click count
│   │       └── Entrypage.jsx  ← Create URL modal
│   │
│   ├── utils/
│   │   └── urlUtils.js        ← URL Helpers
│   │       ├── getExternalRedirectUrl()
│   │       │   └── Auto-detects Vercel
│   │       └── openRedirectUrl()
│   │           └── Handles redirects
│   │
│   └── lib/
│       └── supabase.js        ← DB Connection
│
└── .env                       ← Environment Variables
    ├── VITE_SUPABASE_URL
    ├── VITE_SUPABASE_ANON_KEY
    └── VITE_SHORT_DOMAIN

Supabase (Backend)
├── Edge Functions
│   ├── redirect/
│   │   └── index.ts
│   │       ├── Receives /code
│   │       ├── Query database
│   │       ├── Update analytics
│   │       └── Return 302
│   │
│   └── catch-redirect/
│       └── index.ts
│           └── Alternative JSON response
│
├── Database
│   ├── urls table
│   │   ├── id (UUID)
│   │   ├── short_code (string)
│   │   ├── original_url (string)
│   │   ├── user_id (UUID)
│   │   ├── click_count (integer)
│   │   ├── last_clicked_at (timestamp)
│   │   └── created_at (timestamp)
│   │
│   └── Indexes on short_code
│
└── Authentication
    ├── Users table
    ├── Auth policies
    └── JWT tokens
```

---

## URL Examples

### Creating URL:
```
User input:  https://www.google.com
             ↓
Code gen:    abc123
             ↓
Short URL:   https://yourdomain.vercel.app/abc123
             ↓
Stored in DB with original_url: https://www.google.com
             ↓
Displayed:   https://yourdomain.vercel.app/r/abc123
             ↓
Copy & Share: abc123 link ready to go!
```

### Using URL:
```
Someone has:     https://yourdomain.vercel.app/r/abc123
                 ↓
Clicks link
                 ↓
Browser opens:   /r/abc123 on Vercel
                 ↓
API processes:   /api/redirect.js?code=abc123
                 ↓
Fetches from DB: SELECT * WHERE short_code = '.../abc123'
                 ↓
Gets:            original_url = https://www.google.com
                 ↓
Returns:         302 Location: https://www.google.com
                 ↓
Browser opens:   https://www.google.com
                 ↓
User sees:       Google page ✅
```

---

## Status: ✅ Ready to Deploy

```
✅ Code set up
✅ Files created (vercel.json, api/redirect.js)
✅ Dependencies installed
✅ Supabase Edge Functions deployed
✅ Environment variables configured locally
✅ Pushed to GitHub

Next steps:
□ Create Vercel account
□ Import repository
□ Add environment variables to Vercel
□ Deploy
□ Test
□ Go live!
```

---

## Performance Characteristics

```
Request → Response Time:

1. User clicks link
   ↓
2. Vercel edge location (nearest) - ~10ms
   ↓
3. Routes to /api/redirect.js - ~5ms
   ↓
4. API calls Supabase - ~50ms
   ↓
5. Database query - ~20ms
   ↓
6. Supabase returns 302 - ~30ms
   ↓
7. Browser follows redirect - ~10ms

Total: ~125ms (typical)
Max: ~300ms (slow network)
Min: ~50ms (fast network)

Result: Instant redirect for user ✅
```

---

**Everything is ready! Time to deploy!** 🚀

