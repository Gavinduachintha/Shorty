# Supabase Edge Function Redirect Setup

This guide shows you how to set up URL redirects using Supabase Edge Functions - the proper way to handle redirects that works everywhere.

## 🎯 Why Edge Functions?

### ✅ Advantages:

- **Server-side redirects** - No JavaScript required on client
- **Works everywhere** - Social media, email clients, QR scanners
- **Better SEO** - Proper HTTP 302 redirects
- **Faster** - No React app loading needed
- **Global CDN** - Deployed to edge locations worldwide

### ❌ React Router Problems:

- Requires JavaScript to be enabled
- Doesn't work in social media previews
- Slower (needs to load React app first)
- SEO issues with client-side redirects

## 📁 Files Created

### 1. Main Redirect Function

**File**: `supabase/functions/redirect/index.ts`

- Handles direct URL redirects
- Returns proper HTTP 302 redirects
- Beautiful 404 error pages
- Analytics tracking

### 2. API Redirect Function

**File**: `supabase/functions/catch-redirect/index.ts`

- Returns JSON response for API calls
- Used by React components
- Flexible parameter handling

### 3. React Component (Optional)

**File**: `Frontend/src/components/EdgeRedirectHandler.jsx`

- Uses Edge Function via Supabase client
- Fallback for React Router integration

## 🚀 Deployment Steps

### 1. Install Supabase CLI

```bash
npm install -g supabase
```

### 2. Login to Supabase

```bash
supabase login
```

### 3. Link Your Project

```bash
supabase link --project-ref your-project-ref
```

### 4. Deploy Edge Functions

```bash
# Deploy the redirect function
supabase functions deploy redirect

# Deploy the catch-redirect function
supabase functions deploy catch-redirect
```

### 5. Set Environment Variables

In your Supabase dashboard, go to Edge Functions settings and add:

- `SUPABASE_URL` - Your project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (not anon key!)

## 🌐 URL Structure Options

### Option 1: Direct Edge Function URLs

```
https://your-project-ref.supabase.co/functions/v1/redirect/aB3xY9
```

### Option 2: Custom Domain (Recommended)

Set up a custom domain that points to your Edge Function:

```
https://go.yoursite.com/aB3xY9
```

### Option 3: Subdomain Redirect

Use a subdomain that redirects to the Edge Function:

```
https://short.yoursite.com/aB3xY9
```

## 🔧 Custom Domain Setup

### 1. DNS Configuration

Add a CNAME record:

```
short.yoursite.com -> your-project-ref.supabase.co
```

### 2. Update Edge Function

Modify the function to handle your custom domain:

```typescript
// In your Edge Function
const customDomain = "https://short.yoursite.com";
const shortUrl = `${customDomain}/${shortCode}`;
```

### 3. Update URL Utils

```javascript
// In Frontend/src/utils/urlUtils.js
export const URL_CONFIG = {
  DOMAIN: "https://short.yoursite.com", // Your custom domain
  SHORT_CODE_LENGTH: 6,
  MAX_GENERATION_ATTEMPTS: 5,
};
```

## 📊 Analytics & Monitoring

### Built-in Analytics

The Edge Function automatically tracks:

- Click count
- Last clicked timestamp
- User agent (optional)
- Referrer (optional)

### Monitoring

Check Edge Function logs in Supabase dashboard:

1. Go to Edge Functions
2. Select your function
3. View logs and metrics

### Custom Analytics

Add more tracking to the Edge Function:

```typescript
// Add to the Edge Function
const analytics = {
  userAgent: req.headers.get("user-agent"),
  referer: req.headers.get("referer"),
  ip: req.headers.get("x-forwarded-for"),
  timestamp: new Date().toISOString(),
};

// Store in a separate analytics table
await supabase.from("url_analytics").insert(analytics);
```

## 🧪 Testing

### 1. Test Edge Function Directly

```bash
curl -X POST https://your-project-ref.supabase.co/functions/v1/catch-redirect \
  -H "Content-Type: application/json" \
  -d '{"code": "aB3xY9"}'
```

### 2. Test in Browser

1. Create a short URL in your dashboard
2. Get the short code (e.g., `aB3xY9`)
3. Visit: `https://your-project-ref.supabase.co/functions/v1/redirect/aB3xY9`
4. Should redirect to original URL

### 3. Test Cross-Device

- Share the Edge Function URL
- Test on mobile devices
- Test in social media apps
- Test in email clients

## 🔒 Security Features

### Rate Limiting

Add rate limiting to prevent abuse:

```typescript
// In Edge Function
const rateLimitKey = `redirect:${clientIP}`;
const requests = await redis.incr(rateLimitKey);
if (requests > 100) {
  return new Response("Rate limit exceeded", { status: 429 });
}
```

### URL Validation

```typescript
// Validate URLs before redirect
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

### Malware Protection

```typescript
// Check against URL blacklists
const isSafeUrl = await checkUrlSafety(redirectUrl);
if (!isSafeUrl) {
  return new Response("Unsafe URL detected", { status: 403 });
}
```

## 🎨 Custom Error Pages

The Edge Function includes beautiful error pages. Customize them:

```typescript
const notFoundHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Link Not Found - Your Brand</title>
      <style>/* Your custom styles */</style>
    </head>
    <body>
      <div class="error-container">
        <h1>Oops! Link not found</h1>
        <p>This short URL doesn't exist.</p>
        <a href="https://yoursite.com">Go Home</a>
      </div>
    </body>
  </html>
`;
```

## 🚀 Performance Optimization

### Caching

Add caching headers:

```typescript
return new Response(null, {
  status: 302,
  headers: {
    Location: redirectUrl,
    "Cache-Control": "public, max-age=300", // Cache for 5 minutes
  },
});
```

### Database Optimization

- Add index on `short_code` column
- Use connection pooling
- Consider read replicas for high traffic

### Global Distribution

Edge Functions automatically deploy to:

- Multiple regions worldwide
- Close to your users
- Reduced latency

## 🐛 Troubleshooting

### Common Issues:

1. **Function not deploying**

   ```bash
   # Check your Supabase CLI version
   supabase --version

   # Update if needed
   npm update -g supabase
   ```

2. **Environment variables not working**

   - Check they're set in Supabase dashboard
   - Use `SUPABASE_SERVICE_ROLE_KEY` not anon key
   - Restart function after setting variables

3. **CORS errors**

   - Edge Function includes CORS headers
   - Check your domain is allowed
   - Test with curl first

4. **Redirects not working**
   - Check function logs in dashboard
   - Verify database permissions
   - Test with simple curl command

### Debug Mode

Add logging to your Edge Function:

```typescript
console.log("Short code:", shortCode);
console.log("URL data:", urlData);
console.log("Redirect URL:", redirectUrl);
```

## 📈 Advanced Features

### A/B Testing

```typescript
// Redirect to different URLs based on conditions
const shouldUseVariantB = Math.random() < 0.5;
const redirectUrl = shouldUseVariantB
  ? urlData.variant_b
  : urlData.original_url;
```

### Geographic Redirects

```typescript
// Redirect based on user location
const country = req.headers.get("cf-ipcountry");
const redirectUrl = urlData[`url_${country}`] || urlData.original_url;
```

### Time-based Redirects

```typescript
// Different URLs based on time
const hour = new Date().getHours();
const redirectUrl = hour < 12 ? urlData.morning_url : urlData.evening_url;
```

## 🎉 Success Checklist

Your Edge Function redirect system is working when:

- ✅ Direct function URLs redirect properly
- ✅ Works on all devices and browsers
- ✅ Social media previews work
- ✅ Analytics are being tracked
- ✅ Error pages display correctly
- ✅ Function logs show no errors

## 🔗 Next Steps

1. **Set up custom domain**
2. **Add advanced analytics**
3. **Implement rate limiting**
4. **Add URL safety checks**
5. **Create branded error pages**

Your Supabase Edge Function redirect system is now production-ready! 🚀
