# Google Maps API Setup Guide

This guide will help you set up Google Maps API for the interactive office locations map on your website.

## Overview

The interactive map component displays both office locations:
- **Head Office (Abuja)**: No. 24 Ebitu Ukiwe St. Jabi, Beta Foundation Plaza Jabi, Suite 313B Second Floor
- **Enugu Office**: 71 More House by Denten Street, Ogui Road, Enugu State

## Features

- Interactive map with custom markers
- Info windows with office details and "Get Directions" links
- Office selector buttons
- Responsive design with fallback UI
- Custom map styling to match your brand

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: "Facite Synergy Website"
4. Click "Create"

### 2. Enable Required APIs

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for and enable these APIs:
   - **Maps JavaScript API** (required for the interactive map)
   - **Places API** (optional, for enhanced location features)

### 3. Create API Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the API key
4. Click "Restrict Key" for security

### 4. Configure API Key Restrictions (Recommended)

**Application Restrictions:**
- Select "HTTP referrers (web sites)"
- Add your domains:
  - `localhost:3000/*` (for development)
  - `your-domain.com/*` (your production domain)
  - `*.your-domain.com/*` (subdomains)

**API Restrictions:**
- Select "Restrict key"
- Choose "Maps JavaScript API" and "Places API"

### 5. Add API Key to Environment Variables

1. Open your `.env.local` file
2. Replace the placeholder with your actual API key:

```bash
# Replace 'your_google_maps_api_key_here' with your actual API key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

3. Restart your development server:
```bash
npm run dev
```

## Testing

### With API Key
Once configured, you should see:
- Interactive map centered between both office locations
- Blue custom markers at each office
- Clickable office selector buttons
- Info windows with office details when markers are clicked

### Without API Key (Fallback)
If no API key is configured, you'll see:
- Clean fallback UI with office information cards
- Links to Google Maps for each location
- Message indicating interactive map requires API key

## Security Best Practices

1. **Always restrict your API key** to specific domains
2. **Monitor usage** in Google Cloud Console
3. **Set billing alerts** to avoid unexpected charges
4. **Keep your API key private** - never commit it to public repositories

## Troubleshooting

### Map Not Loading
- Check browser console for error messages
- Verify API key is correctly set in `.env.local`
- Ensure Maps JavaScript API is enabled
- Check domain restrictions on your API key

### "For development purposes only" Watermark
- This appears when using unrestricted API keys
- Add proper domain restrictions to remove watermark

### Quota Exceeded Error
- Check your usage in Google Cloud Console
- Consider implementing usage limits
- Upgrade billing plan if needed

## Cost Information

- Google Maps offers $200 free credit monthly
- Maps JavaScript API: $7 per 1,000 loads
- Most small websites stay within free tier
- Monitor usage in Google Cloud Console

## Support

For Google Maps API issues:
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Google Cloud Support](https://cloud.google.com/support)

For implementation issues, check the console logs and ensure all setup steps are completed correctly.
