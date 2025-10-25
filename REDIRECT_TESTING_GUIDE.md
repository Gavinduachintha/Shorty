# Redirect Testing Guide

This guide helps you verify that your Shorty URL shortener redirects are working correctly.

---

## ✅ Step 1: Create a Test Short URL (Using Dashboard)

### Via React Frontend

1. Go to your Shorty frontend (e.g., `http://localhost:5173`)
2. Login to your account
3. Go to Dashboard → Create a new short URL
4. Enter a test URL (e.g., `https://www.google.com`)
5. Copy the generated short code (e.g., `abc123`)
6. **Note**: The short URL stored in DB is in format `https://shorty/abc123`

### Via Direct Database (Optional)

If you prefer, insert directly using Prisma Studio:

```bash
npx prisma studio
```

Then manually create a URL entry with:

- `original_url`: `https://www.google.com`
- `short_code`: `https://shorty/abc123`
- `user_id`: your-user-id
- `click_count`: 0

---

## 🧪 Test Methods (Choose One)

### **Method 1: Test with cURL (Recommended - Shows All Details)**

Get your **Anon Key** from Supabase Dashboard:

1. Go to Settings → API → Project API keys
2. Copy `anon public` key

**Test the redirect:**

```bash
# Replace <ANON_KEY> with your actual anon key
# Replace abc123 with your short code
curl -v -H "apikey: <ANON_KEY>" -L \
  "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123"
```

**Expected output:**

```
> GET /functions/v1/redirect/abc123 HTTP/1.1
< HTTP/1.1 302 Found
< Location: https://www.google.com
```

If you see a `302` status and the correct `Location` header → **✅ Redirect is working!**

---

### **Method 2: Test with Browser (Simplest)**

Make a simple HTML file to test:

**File: `test-redirect.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Redirect Tester</title>
    <style>
      body {
        font-family: Arial;
        padding: 20px;
      }
      input {
        padding: 8px;
        width: 300px;
      }
      button {
        padding: 8px 15px;
        background: #667eea;
        color: white;
        border: none;
        cursor: pointer;
      }
      .result {
        margin-top: 20px;
        padding: 10px;
        background: #f0f0f0;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Shorty Redirect Tester</h1>

    <label for="shortCode">Enter Short Code:</label><br />
    <input type="text" id="shortCode" placeholder="e.g., abc123" value="" />
    <button onclick="testRedirect()">Test Redirect</button>

    <div id="result" class="result" style="display:none;"></div>

    <script>
      function testRedirect() {
        const shortCode = document.getElementById("shortCode").value.trim();
        if (!shortCode) {
          alert("Please enter a short code");
          return;
        }

        const anonKey = "YOUR_ANON_KEY_HERE"; // Replace with actual key
        const url = `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/catch-redirect?code=${shortCode}`;

        fetch(url, {
          headers: {
            apikey: anonKey,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const resultDiv = document.getElementById("result");
            resultDiv.style.display = "block";

            if (data.error) {
              resultDiv.innerHTML = `<strong style="color: red;">❌ Error:</strong> ${data.error}`;
            } else {
              resultDiv.innerHTML = `
                        <strong style="color: green;">✅ Found!</strong><br>
                        <strong>Original URL:</strong> <a href="${data.original_url}" target="_blank">${data.original_url}</a><br>
                        <button onclick="window.open('${data.original_url}', '_blank')">Visit Link</button>
                    `;
            }
          })
          .catch((err) => {
            const resultDiv = document.getElementById("result");
            resultDiv.style.display = "block";
            resultDiv.innerHTML = `<strong style="color: red;">❌ Error:</strong> ${err.message}`;
          });
      }

      // Allow Enter key to trigger test
      document.getElementById("shortCode").addEventListener("keypress", (e) => {
        if (e.key === "Enter") testRedirect();
      });
    </script>
  </body>
</html>
```

**Steps:**

1. Save the file as `test-redirect.html`
2. Replace `YOUR_ANON_KEY_HERE` with your actual Supabase anon key
3. Open in browser
4. Enter a short code and click "Test Redirect"
5. You should see the original URL

---

### **Method 3: Test Direct URL in Browser (Simplest - No Code)**

If function doesn't require JWT:

```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

If it redirects → **✅ Working!**
If you see 404 HTML → Check that short code exists in DB
If you see 401 → Add apikey header (see Method 1)

---

## 📊 Database Verification (Check Data)

Verify the data was saved correctly:

```bash
# Open Prisma Studio to view database
npx prisma studio
```

In Prisma Studio:

1. Go to `urls` table
2. Find your short code entry
3. Verify:
   - ✅ `short_code` = `https://shorty/abc123`
   - ✅ `original_url` = `https://www.google.com`
   - ✅ `user_id` = your-id
   - ✅ `click_count` should increase after each redirect

---

## 🔍 What to Check

| Component           | How to Verify          | Expected Result                        |
| ------------------- | ---------------------- | -------------------------------------- |
| **Database**        | Prisma Studio          | Short code & original URL saved        |
| **Edge Function**   | cURL with apikey       | HTTP 302 redirect                      |
| **Redirect Target** | Follow Location header | Redirects to original URL              |
| **Analytics**       | Check click_count      | Increments on each access              |
| **404 Handler**     | Test invalid code      | Beautiful 404 page (if code not found) |

---

## ⚙️ Environment Variables (If Not Set)

If functions still don't work, ensure these are set in Supabase Dashboard:

**Path:** Edge Functions → Settings → Environment Variables

```
PROJECT_URL = https://vrsbwbsgmdsetweqxjqp.supabase.co
SERVICE_ROLE_KEY = <your service role key from Settings → API>
SHORT_DOMAIN = https://shorty
```

Or fallback names:

```
SUPABASE_URL = https://vrsbwbsgmdsetweqxjqp.supabase.co
SUPABASE_SERVICE_ROLE_KEY = <key>
```

---

## 🐛 Troubleshooting

### Issue: `401 Unauthorized`

**Solution:** Add apikey header

```bash
curl -H "apikey: YOUR_ANON_KEY" "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123"
```

### Issue: `404 Not Found` (or 404 HTML page)

**Solution:** Check short code exists in database

```bash
# In Prisma Studio, search for short_code = "https://shorty/abc123"
```

### Issue: Redirect loops or wrong URL

**Solution:**

1. Check `original_url` in database (should have http:// or https://)
2. Verify `short_code` format matches (should be `https://shorty/CODE`)

### Issue: Click count not incrementing

**Solution:** This happens asynchronously. Try again a few seconds later.

---

## ✨ Full End-to-End Test

### Quick Test (2 minutes)

1. **Create a short URL in dashboard**

   - Original: `https://www.google.com`
   - Short code generated: `abc123`

2. **Test with cURL**

   ```bash
   curl -i -H "apikey: YOUR_ANON_KEY" \
     "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123"
   ```

3. **Verify response:**

   - Status: `302 Found`
   - Header: `Location: https://www.google.com`
   - ✅ **Success!**

4. **Check analytics**
   - Open Prisma Studio
   - Verify `click_count` increased

---

## 📱 Test on Different Platforms

### Mobile

```
Test on phone browser:
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

### Email Clients

```
Send email with link:
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

### Social Media

Paste URL in Twitter, Facebook, etc.

### QR Code

Generate QR code pointing to:

```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

---

## 🚀 Production Checklist

Before going live:

- [ ] Database verified (short codes stored correctly)
- [ ] Redirect returns 302 status code
- [ ] Location header points to correct original URL
- [ ] Click analytics updating
- [ ] 404 page displays for invalid codes
- [ ] Works on mobile browsers
- [ ] Works in email clients
- [ ] Environment variables set in Supabase
- [ ] Function deployed successfully
- [ ] No errors in Supabase Edge Function logs

---

## 🔗 Quick Command Reference

```bash
# Test redirect with apikey
curl -i -H "apikey: YOUR_ANON_KEY" \
  "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/CODE"

# Test JSON API endpoint
curl -i -H "apikey: YOUR_ANON_KEY" \
  "https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/catch-redirect?code=CODE"

# View database
npx prisma studio

# View function logs
npx supabase functions list
npx supabase functions delete <function-name>
```

---

## 📝 Notes

- First redirect might take a few seconds (cold start)
- Click count updates asynchronously (eventual consistency)
- Replace all `YOUR_ANON_KEY` with actual key from Supabase API settings
- Replace `vrsbwbsgmdsetweqxjqp` with your project ref if different
- Replace `abc123` with actual short code

---

Need help? Check:

- Supabase Dashboard → Functions → Logs
- Browser DevTools → Network tab
- Terminal output from deployment
