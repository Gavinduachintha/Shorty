# 🚀 Deploy to Vercel - Complete Setup Guide

## Overview
This guide shows how to deploy your Shorty frontend to Vercel with a clean redirect API route.

**Benefits:**
- ✅ Free hosting
- ✅ Clean short URLs: `https://yourdomain.vercel.app/r/abc123`
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Custom domain support

---

## 📋 Prerequisites

1. ✅ Vercel account (free)
2. ✅ GitHub account
3. ✅ Shorty project on GitHub
4. ✅ Supabase project set up

---

## 🎯 Step-by-Step Setup

### Step 1: Create Vercel Account
1. Go to **vercel.com**
2. Sign up with GitHub
3. Authorize Vercel to access your repos

---

### Step 2: Push Code to GitHub
```bash
cd c:\Users\Asus\Desktop\codes\Shorty
git add .
git commit -m "Add Vercel setup for redirects"
git push origin production
```

**Changes included:**
- ✅ `Frontend/vercel.json` - Redirect configuration
- ✅ `Frontend/api/redirect.js` - Redirect API route
- ✅ Updated `urlUtils.js` - Detects Vercel environment

---

### Step 3: Deploy to Vercel

#### Option A: From Vercel Dashboard (Easiest)
1. Go to **vercel.com/dashboard**
2. Click "Add New" → "Project"
3. Import your GitHub repo (Shorty)
4. Select "Frontend" folder as root
5. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd Frontend
vercel --prod
```

---

### Step 4: Configure Environment Variables
After deployment, set environment variables in Vercel:

1. **Vercel Dashboard** → Your Project → Settings → Environment Variables
2. Add these variables:

```
VITE_SUPABASE_URL=https://vrsbwbsgmdsetweqxjqp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SHORT_DOMAIN=https://yourdomain.vercel.app
```

---

### Step 5: Redeploy After Config Changes
```bash
vercel --prod
```

Or just push to GitHub and it auto-deploys!

---

## 🔗 How It Works

### URL Structure

**Before (Development):**
```
Short code in DB: https://shorty/abc123
External URL: https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

**After (Vercel Production):**
```
Short code in DB: https://yourdomain-123abc.vercel.app/abc123
External URL: https://yourdomain-123abc.vercel.app/r/abc123
```

### Request Flow

```
User clicks: https://yourdomain.vercel.app/r/abc123
                            ↓
                Vercel rewrites to /r/:code
                            ↓
            Calls api/redirect.js handler
                            ↓
      API fetches from Supabase Edge Function
                            ↓
    Edge Function looks up short_code in database
                            ↓
    Returns 302 redirect with original_url
                            ↓
            API passes redirect to browser
                            ↓
          Browser opens original URL ✅
```

---

## 📁 File Structure

```
Frontend/
├── vercel.json              ← Vercel configuration
├── api/
│   └── redirect.js          ← API route handler
├── src/
│   ├── utils/
│   │   └── urlUtils.js      ← Updated for Vercel detection
│   ├── pages/
│   │   └── dashboard/
│   │       └── Dashboard.jsx
│   └── ...
├── .env                     ← Environment variables
├── package.json
└── vite.config.js
```

---

## 🧪 Testing

### Test Locally
```bash
cd Frontend
npm run dev

# Visit: http://localhost:5173
```

### Test on Vercel
After deployment:
1. Create short URL in dashboard
2. Copy the Vercel link (e.g., `https://yourdomain.vercel.app/r/abc123`)
3. Open in new browser/device
4. Should redirect ✅

---

## 🔧 Configuration Files

### `vercel.json`
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

This creates clean URLs: `/r/abc123` instead of `/api/redirect?code=abc123`

### `api/redirect.js`
Server-side handler that:
- Receives short code
- Fetches from Supabase
- Returns 302 redirect
- Handles errors gracefully

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

1. **Vercel Dashboard** → Project Settings → Domains
2. Add your domain (e.g., `go.yourdomain.com`)
3. Follow DNS setup instructions
4. Wait for DNS propagation

### Update Code

Update `.env`:
```
VITE_SHORT_DOMAIN=https://go.yourdomain.com
```

Now links will be:
```
https://go.yourdomain.com/r/abc123
```

Much prettier! ✨

---

## 📊 Dashboard Display

### What Users See

**Dashboard shows:**
```
Short Link:
https://yourdomain.vercel.app/r/abc123
Works anywhere on the internet
```

**When they copy and share:**
- Email: ✅ Works
- Social: ✅ Works
- QR Code: ✅ Works
- Messages: ✅ Works

---

## 🚨 Troubleshooting

### Issue: 404 on redirect link
**Solution:**
1. Check `vercel.json` is in Frontend folder
2. Verify `api/redirect.js` exists
3. Redeploy: `vercel --prod`

### Issue: Environment variables not working
**Solution:**
1. Add to Vercel dashboard (Settings → Environment Variables)
2. Redeploy after adding: `vercel --prod`
3. Check `.env` is in `.gitignore` (don't commit secrets!)

### Issue: Redirect not working
**Solution:**
1. Check Supabase Edge Function is deployed
2. Verify API key in environment variables
3. Check browser console for errors
4. Test directly: `curl https://yourdomain.vercel.app/r/abc123`

---

## 📈 Monitoring

### View Logs
1. **Vercel Dashboard** → Project → Deployments
2. Click latest deployment
3. View logs and errors

### Check Function Status
```bash
# Test the API route
curl https://yourdomain.vercel.app/r/abc123 -v

# Should return redirect header:
# HTTP/1.1 302 Found
# Location: https://original-url.com
```

---

## 🎯 Summary

### What We Set Up
- ✅ Vercel deployment
- ✅ Redirect API route (`/r/:code`)
- ✅ Clean short URLs
- ✅ Global CDN
- ✅ Auto-deployments from GitHub

### URLs Generated
- **Before:** `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123`
- **After:** `https://yourdomain.vercel.app/r/abc123`

### What Works Now
- ✅ Share in email
- ✅ Share on social media
- ✅ Generate QR codes
- ✅ Works on all devices
- ✅ Analytics tracking
- ✅ Beautiful 404 pages

---

## 🚀 Next Steps

1. **Deploy:**
   ```bash
   cd Frontend
   vercel --prod
   ```

2. **Test:**
   - Create short URL
   - Copy Vercel link
   - Share and test

3. **Add Custom Domain (Optional):**
   - Buy domain
   - Add in Vercel settings
   - Update environment variables

4. **Monitor:**
   - Check Vercel dashboard
   - View analytics
   - Track performance

---

## 💡 Pro Tips

### Tip 1: Auto-Deploy from Git
Every push to `production` branch auto-deploys to Vercel!

```bash
git push origin production  # Auto-deploys 🚀
```

### Tip 2: Preview Deployments
Create Pull Request → Vercel creates preview URL
Great for testing before merging!

### Tip 3: Monitor Performance
Vercel dashboard shows:
- Request count
- Response times
- Error rates
- Geographic distribution

### Tip 4: Scale Easily
- Free tier: Perfect for testing
- Pro tier: Higher limits, priority support
- Enterprise: Custom SLA

---

## 📝 Deployment Checklist

- [ ] Vercel account created
- [ ] Repository linked to Vercel
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] Test redirect works
- [ ] Custom domain added (optional)
- [ ] GitHub auto-deployment enabled
- [ ] Monitoring set up

---

## 🆘 Quick Help

### "Deployment failed"
Check build logs in Vercel dashboard. Common issues:
- Missing dependencies: Run `npm install`
- Environment variables: Add in Vercel settings
- Wrong folder: Select "Frontend" as root

### "Links not redirecting"
1. Verify `api/redirect.js` exists
2. Check Supabase keys in environment
3. Test with cURL:
   ```bash
   curl https://yourdomain.vercel.app/r/abc123 -v
   ```

### "Changes not deployed"
Wait a few seconds after push. Check deployment status:
```bash
vercel list  # See recent deployments
```

---

**Ready to deploy?** Let's go! 🚀

