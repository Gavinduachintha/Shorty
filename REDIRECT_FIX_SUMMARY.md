# Fix: Short Code Redirect Not Working in Dashboard

## 🐛 Problem

When clicking the "Visit" button on a short URL in the dashboard, the link wasn't redirecting to the original URL.

## 🔍 Root Cause

The dashboard was trying to open `url.short_code` directly (which is stored as `https://shorty/abc123`), but this doesn't exist on the internet. The actual redirect happens through the **Supabase Edge Function endpoint**:

```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
```

## ✅ Solution Applied

### 1. Added Helper Function

**File**: `Frontend/src/utils/urlUtils.js`

Added a new `getRedirectUrl()` function that converts the short code to the proper Edge Function endpoint:

```javascript
export const getRedirectUrl = (shortCode) => {
  // Extract just the code part from "https://shorty/abc123"
  const code = shortCode.split("/").pop();
  // Return the Edge Function endpoint
  return `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`;
};
```

### 2. Updated Dashboard Component

**File**: `Frontend/src/pages/dashboard/Dashboard.jsx`

**Import the function:**

```javascript
import { getRedirectUrl } from "../../utils/urlUtils";
```

**Updated the Visit button:**

```javascript
<button
  onClick={() =>
    window.open(
      getRedirectUrl(url.short_code), // ← Changed from url.short_code
      "_blank"
    )
  }
  // ... rest of button styling
>
  Visit
</button>
```

## 🧪 Testing

Now when you click "Visit" in the dashboard:

1. ✅ It opens the Edge Function URL
2. ✅ The function looks up the short code in the database
3. ✅ It redirects to the original URL
4. ✅ Analytics are updated (click count)

### Quick Test Steps:

1. Go to your Shorty dashboard
2. Create a new short URL (e.g., `https://www.google.com`)
3. Click the "Visit" button
4. You should be redirected to Google in a new tab
5. ✅ If you see Google → **Success!**

## 📊 Flow Diagram

```
User clicks "Visit" button
    ↓
getRedirectUrl() extracts code from "https://shorty/abc123"
    ↓
Opens: https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
    ↓
Edge Function looks up database using short_code
    ↓
Returns 302 redirect with original URL
    ↓
Browser redirects to original URL
    ↓
Analytics updated (click_count++)
```

## 🔧 Configuration

The Edge Function endpoint is currently hardcoded to:

```
https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/
```

If you need to change this (e.g., for custom domain), update in `Frontend/src/utils/urlUtils.js`:

```javascript
const PROJECT_REF = "vrsbwbsgmdsetweqxjqp"; // Change this
const EDGE_FUNCTION_URL = `https://${PROJECT_REF}.supabase.co/functions/v1/redirect`;
```

## 📝 Summary of Changes

| File                                         | Change                                             |
| -------------------------------------------- | -------------------------------------------------- |
| `Frontend/src/utils/urlUtils.js`             | Added `getRedirectUrl()` function                  |
| `Frontend/src/pages/dashboard/Dashboard.jsx` | Import `getRedirectUrl` and use it in Visit button |

## ✨ Future Improvements

Consider making the Edge Function endpoint configurable:

- Store in `.env` file
- Read from config file
- Make it environment-based
