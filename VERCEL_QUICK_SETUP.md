# ✅ Vercel Deployment Checklist

## Quick 5-Minute Setup

### 1. Commit Changes
```bash
cd c:\Users\Asus\Desktop\codes\Shorty
git add .
git commit -m "Add Vercel redirect setup"
git push origin production
```

✅ Files changed:
- `Frontend/vercel.json` (new)
- `Frontend/api/redirect.js` (new)
- `Frontend/src/utils/urlUtils.js` (updated)

---

### 2. Create Vercel Account
- [ ] Go to **vercel.com**
- [ ] Click "Sign Up"
- [ ] Choose "Continue with GitHub"
- [ ] Authorize Vercel
- [ ] Verify email

**Time:** ~2 minutes

---

### 3. Import Project
- [ ] On Vercel dashboard, click "Add New" → "Project"
- [ ] Find and select "Shorty" repository
- [ ] In settings:
  - Framework: **Vite**
  - Root Directory: **Frontend**
  - Build Command: **npm run build**
  - Output Directory: **.next** (or **dist**)

**Time:** ~1 minute

---

### 4. Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables

Add these 3 variables:

```
VITE_SUPABASE_URL
Value: https://vrsbwbsgmdsetweqxjqp.supabase.co

VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your anon key)

VITE_SHORT_DOMAIN
Value: https://yourdomain-12345.vercel.app (will change after first deploy)
```

**Where to get Anon Key:**
- Supabase Dashboard → Settings → API → Copy "anon public"

**Time:** ~2 minutes

---

### 5. Deploy
Click **"Deploy"** button in Vercel

**Waiting time:** ~2-3 minutes

---

### 6. Get Your Vercel URL
After successful deployment:
- Note your Vercel domain (e.g., `yourdomain-12345.vercel.app`)
- Update `VITE_SHORT_DOMAIN` environment variable
- Trigger redeploy

---

## Redirect Link Examples

### Your Dashboard Creates:
```
Internal: https://shorty/abc123
```

### Dashboard Displays:
```
External: https://yourdomain-12345.vercel.app/r/abc123
Works anywhere on the internet
```

### User Experience:
```
Friend receives: https://yourdomain-12345.vercel.app/r/abc123
They click it
↓
Vercel API route processes request
↓
Redirects to original URL ✅
```

---

## 🧪 Test After Deployment

### Quick Test
1. Create short URL in dashboard (e.g., to Google)
2. Copy the Vercel URL shown
3. Paste in browser address bar
4. Should redirect to Google ✅

### Test from Different Device
1. Copy the Vercel URL
2. Send to yourself via email/WhatsApp
3. Click from phone
4. Should redirect ✅

### Test QR Code
1. Copy the Vercel URL
2. Go to qrcode-monkey.com
3. Paste URL and generate QR
4. Scan from phone
5. Should redirect ✅

---

## File Reference

### `Frontend/vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/r/:code",
      "destination": "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/:code"
    }
  ]
}
```
Creates clean URLs: `/r/abc123`

### `Frontend/api/redirect.js`
- Receives requests to `/r/:code`
- Fetches from Supabase
- Returns 302 redirect
- Handles errors

### `urlUtils.js` Changes
- Detects Vercel environment
- Uses Vercel domain for external URLs
- Fallback to Supabase if not on Vercel

---

## URLs Comparison

| Environment | Short Code Format | External URL |
|------------|-------------------|--------------|
| Local Dev | `https://shorty/abc123` | Direct Supabase URL |
| Vercel | `https://yourdomain.vercel.app/abc123` | `/r/abc123` redirect |
| Production (Custom Domain) | `https://go.yourdomain.com/abc123` | `/r/abc123` redirect |

---

## Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| 404 error on /r/abc123 | Redeploy: `vercel --prod` or click Deploy again |
| Variables not working | Add to Vercel dashboard, then redeploy |
| Build failed | Check build logs, usually missing `npm install` |
| Redirect not working | Verify Supabase keys, check browser console |

---

## ✨ After Deployment

### What Works Now
✅ Share short URLs  
✅ Works from email  
✅ Works from social media  
✅ Works from QR codes  
✅ Works from messages  
✅ Works globally  
✅ Auto-deployments from Git  

### Next (Optional)
- Add custom domain
- Set up analytics
- Create QR code generator
- Add URL expiration

---

## Command Reference

```bash
# Deploy latest code
cd Frontend
vercel --prod

# View deployments
vercel list

# See logs
vercel logs

# Help
vercel --help
```

---

## Timeline

| Step | Time | Status |
|------|------|--------|
| 1. Commit changes | 1 min | ⏳ Do now |
| 2. Create Vercel account | 2 min | ⏳ Do now |
| 3. Import project | 1 min | ⏳ Do now |
| 4. Add env variables | 2 min | ⏳ Do now |
| 5. Deploy | 3 min | ⏳ Do now |
| 6. Test | 2 min | ⏳ Do now |
| **Total** | **11 minutes** | ✅ |

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Vercel account created and verified
- [ ] Project imported and linked
- [ ] Environment variables added
- [ ] Deployment successful (green checkmark)
- [ ] Test short URL works
- [ ] Test from external device
- [ ] Share in email - works ✓
- [ ] Test QR code - works ✓
- [ ] Click count updates in dashboard ✓

---

**You're ready!** 🚀

Follow the steps above and your Shorty will be live on Vercel in ~11 minutes!

