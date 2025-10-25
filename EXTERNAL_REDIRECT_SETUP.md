# External Redirect Setup Guide

## 🎯 Problem
`https://shorty/1Ew1oD` only works inside your project. Outside (email, social media), it doesn't exist.

## ✅ Solutions

### **Solution 1: Use Full Edge Function URL (Quickest - Works Immediately)**

Share the complete URL instead:
```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/1Ew1oD
```

**Where to use:**
- ✅ Email links
- ✅ Social media posts
- ✅ QR codes
- ✅ Shared messages
- ✅ Anywhere on the internet

**Pros:**
- No setup needed
- Works immediately
- Fully functional

**Cons:**
- Long URL (not pretty)
- Exposes Supabase project ref

**Testing:**
```bash
# This works from anywhere:
curl "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123"
```

---

### **Solution 2: Custom Domain (Recommended for Production)**

**Best for:** Professional URLs, branding, short links

#### Step 1: Buy a Custom Domain
- GoDaddy, Namecheap, Google Domains, etc.
- Example: `go.yourdomain.com` or `short.yourdomain.com`

#### Step 2: Set Up Custom Domain in Supabase
1. **Supabase Dashboard** → Project Settings → Custom Domains
2. Add your domain
3. Add DNS records (Supabase will provide exact records)
   - Usually a CNAME pointing to Supabase
4. Wait for DNS propagation (5-30 minutes)

#### Step 3: Update Your Code
Update `Frontend/src/utils/urlUtils.js`:
```javascript
export const URL_CONFIG = {
    DOMAIN: "https://go.yourdomain.com",  // Your custom domain
    SHORT_CODE_LENGTH: 6,
    MAX_GENERATION_ATTEMPTS: 5,
};
```

Also update `supabase/functions/redirect/index.ts`:
```typescript
const shortDomain = Deno.env.get("SHORT_DOMAIN") || "https://go.yourdomain.com";
```

#### Step 4: Test
- Create short URL in dashboard
- Share: `https://go.yourdomain.com/abc123`
- Works from anywhere! ✅

---

### **Solution 3: DNS Redirect (Simple Alternative)**

If you don't want to use Supabase's custom domain feature:

#### At your DNS Provider (GoDaddy, Namecheap, etc.):
1. Create a CNAME record:
   ```
   go    CNAME    vrsbwbsgmdsetweqxjqp.supabase.co
   ```

2. Or create a URL redirect:
   ```
   Redirect: go.yourdomain.com → vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/
   ```

---

### **Solution 4: Serverless Function (AWS Lambda, Vercel, Netlify)**

#### Using Vercel (Example):

**Create `api/redirect.js` in your Vercel project:**
```javascript
export default async function handler(req, res) {
    const { code } = req.query;
    
    if (!code) {
        return res.status(400).json({ error: "No code provided" });
    }

    // Redirect to Supabase Edge Function
    const redirectUrl = `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`;
    
    return res.redirect(307, redirectUrl);
}
```

**Then use:**
```
https://yourdomain.vercel.app/api/redirect?code=1Ew1oD
```

---

## 📋 Comparison Table

| Solution | Setup Time | URL Length | Branding | Cost |
|----------|-----------|-----------|----------|------|
| **Full Edge URL** | 0 min | 60+ chars | ❌ | Free |
| **Custom Domain (Supabase)** | 30 min | 20-30 chars | ✅ | Domain fee |
| **DNS Redirect** | 30 min | 20-30 chars | ✅ | Domain fee |
| **Vercel/Netlify** | 15 min | 30-40 chars | ✅ | Free/Paid |

---

## 🚀 Recommended Setup

### For MVP/Testing:
Use **Solution 1** (Full Edge Function URL)
```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

### For Production:
Use **Solution 2** (Custom Domain with Supabase)
```
https://go.yourdomain.com/abc123
```

---

## 🔄 How External Redirects Work

```
User receives: https://go.yourdomain.com/abc123
                            ↓
                  DNS resolves to Supabase
                            ↓
        Edge Function processes /abc123
                            ↓
    Database lookup: short_code = "https://go.yourdomain.com/abc123"
                            ↓
         Returns 302 redirect to original_url
                            ↓
              Browser opens destination ✅
```

---

## 🧪 Test Current Setup

### Test Full Edge URL (Works Now):
```bash
# Replace abc123 with your actual short code
curl -i "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123"
```

Expected response:
```
HTTP/1.1 302 Found
Location: https://www.google.com (or your original URL)
```

### Share in Email/Social:
Send this and it works from anywhere:
```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

---

## ⚙️ Implementation Steps

### Immediate (No Changes Needed):
1. Create short URL in dashboard
2. Copy the full Edge Function URL:
   ```
   https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/{shortCode}
   ```
3. Share anywhere - it works! ✅

### Later (When Launching):
1. Buy custom domain
2. Set up custom domain in Supabase
3. Update `URL_CONFIG.DOMAIN` in `urlUtils.js`
4. Redeploy
5. Share pretty URLs like `https://go.yourdomain.com/abc123`

---

## 💡 Pro Tips

### Display Full URL in Dashboard:
Update the "Short Link" display to show the full Edge Function URL:

**In `Dashboard.jsx`:**
```javascript
<a
    href={`https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${extractShortCode(url.short_code)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="block truncate text-sm font-medium text-violet-500"
    title={url.short_code}
>
    {`go.short/${extractShortCode(url.short_code)}`}
</a>
```

### Generate QR Codes:
Install library:
```bash
npm install qrcode.react
```

Use in component:
```javascript
import QRCode from 'qrcode.react';

<QRCode 
    value={`https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`}
    size={200}
/>
```

---

## 🎯 Summary

**Right Now:**
- ✅ Share: `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/1Ew1oD`
- ✅ Works from anywhere
- ✅ Links actually redirect
- ✅ No setup needed

**When Ready for Production:**
- Set up custom domain (e.g., `go.yourdomain.com`)
- Update code to use custom domain
- Share pretty links: `https://go.yourdomain.com/1Ew1oD`

---

**Need help with any of these setups?** Let me know which option you'd like to implement!

