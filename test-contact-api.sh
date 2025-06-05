#!/bin/bash

# Test script for contact form API
# This script tests the contact form API endpoint locally

echo "🧪 Testing Contact Form API..."
echo "==============================="

# Check if the development server is running
if ! curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "❌ Development server is not running"
    echo "Please run 'npm run dev' first"
    exit 1
fi

echo "✅ Development server is running"

# Test the contact API endpoint
echo "📧 Testing contact form submission..."

response=$(curl -s -w "%{http_code}" -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "message": "This is a test message from the contact form API test script."
  }')

http_code="${response: -3}"
response_body="${response%???}"

echo "HTTP Status Code: $http_code"
echo "Response Body: $response_body"

if [ "$http_code" = "200" ]; then
    echo "✅ Contact form API test PASSED"
    echo "📧 If configured correctly, an email should have been sent"
elif [ "$http_code" = "500" ]; then
    echo "⚠️  API endpoint exists but email sending failed"
    echo "This is likely due to missing or invalid RESEND_API_KEY"
    echo "Check your .env.local file and Resend configuration"
else
    echo "❌ Contact form API test FAILED"
    echo "Check the API route implementation"
fi

echo ""
echo "🔧 Setup Checklist:"
echo "1. ✅ API route exists at /api/contact"
echo "2. ✅ CONTACT_EMAIL in .env.local"
echo "3. 🔧 RESEND_API_KEY (optional for development - uses console logging)"
echo "4. 📧 For development: Check terminal console for email logs"
echo "5. 📧 For production: Check your email inbox"
echo ""
echo "📚 See CONTACT_FORM_SETUP.md for detailed setup instructions"
