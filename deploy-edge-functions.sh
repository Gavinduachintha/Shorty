#!/bin/bash

# Supabase Edge Functions Deployment Script (JavaScript)
# This script deploys the redirect Edge Functions to Supabase

echo "🚀 Deploying Supabase Edge Functions for URL Redirects (JavaScript)"
echo "=================================================================="

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
fi

# Check if user is logged in
echo "🔐 Checking Supabase authentication..."
if ! supabase projects list &> /dev/null; then
    echo "❌ Not logged in to Supabase. Please run:"
    echo "   supabase login"
    exit 1
fi

echo "✅ Supabase CLI authenticated"

# Deploy the redirect function (JavaScript)
echo "📦 Deploying redirect function (JavaScript)..."
if supabase functions deploy redirect; then
    echo "✅ Redirect function deployed successfully"
else
    echo "❌ Failed to deploy redirect function"
    exit 1
fi

# Deploy the catch-redirect function (JavaScript)
echo "📦 Deploying catch-redirect function (JavaScript)..."
if supabase functions deploy catch-redirect; then
    echo "✅ Catch-redirect function deployed successfully"
else
    echo "❌ Failed to deploy catch-redirect function"
    exit 1
fi

echo ""
echo "🎉 All JavaScript Edge Functions deployed successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Set environment variables in Supabase dashboard:"
echo "   - SUPABASE_URL"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo ""
echo "2. Test your functions:"
echo "   https://your-project-ref.supabase.co/functions/v1/redirect/test-code"
echo ""
echo "3. Update your URL_CONFIG in Frontend/src/utils/urlUtils.js"
echo "   to use your Edge Function URL as the domain"
echo ""
echo "🔗 Your JavaScript redirect system is ready!"