# Tawk.to Live Chat Setup Guide

## ✅ Installation Complete

Tawk.to live chat has been successfully integrated into your Facite Synergy website! Here's how to complete the setup.

## 🚀 Step 1: Create Tawk.to Account

1. **Sign up for Tawk.to**
   - Go to [tawk.to](https://www.tawk.to)
   - Create a free account
   - Verify your email address

2. **Create a Property**
   - Click "Add Property" in your dashboard
   - Enter your website details:
     - **Property Name**: Facite Synergy
     - **Website URL**: https://facitesynergy.com
     - **Category**: Real Estate / Construction
   - Click "Create Property"

## 🔧 Step 2: Get Your Widget Code

1. **Access Widget Code**
   - In your Tawk.to dashboard, go to **"Administration"**
   - Click on **"Chat Widget"**
   - Select your property
   - Copy the widget code (you'll see something like this):

```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

2. **Extract IDs from the URL**
   From the URL `https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID`:
   - **Property ID**: The first part after `/embed.tawk.to/`
   - **Widget ID**: The second part after the property ID

## 🔑 Step 3: Update Environment Variables

Update your `.env.local` file with your actual Tawk.to IDs:

```bash
# === TAWK.TO LIVE CHAT ===
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_actual_property_id
NEXT_PUBLIC_TAWK_WIDGET_ID=your_actual_widget_id
```

**Example:**
If your widget URL is `https://embed.tawk.to/64f8a12b94cf5d49dc65f123/1h8g9k2l3m`, then:
```bash
NEXT_PUBLIC_TAWK_PROPERTY_ID=64f8a12b94cf5d49dc65f123
NEXT_PUBLIC_TAWK_WIDGET_ID=1h8g9k2l3m
```

## 🎨 Step 4: Customize Your Chat Widget

### 1. **Widget Appearance**
In your Tawk.to dashboard:
- Go to **"Administration"** → **"Chat Widget"**
- Customize colors to match your brand:
  - **Primary Color**: #1e40af (blue to match your website)
  - **Secondary Color**: #007bff
- Upload your logo
- Set custom messages

### 2. **Widget Position**
- **Position**: Bottom right (recommended)
- **Offset**: Default settings work well

### 3. **Custom Messages**
Set up automated messages:
- **Welcome Message**: "Hello! How can we help you with your real estate, roofing, or survey needs?"
- **Offline Message**: "We're currently offline. Please leave a message and we'll get back to you soon!"

## 📱 Step 5: Mobile Optimization

The widget is automatically mobile-responsive, but you can:
- Test on mobile devices
- Adjust mobile-specific settings in Tawk.to dashboard
- Customize mobile welcome messages

## 🔧 Step 6: Advanced Configuration

### **Business Hours**
Set your availability:
1. Go to **"Administration"** → **"Departments"**
2. Set your business hours:
   - **Monday-Friday**: 9:00 AM - 6:00 PM
   - **Saturday**: 10:00 AM - 4:00 PM
   - **Sunday**: Closed
3. Set timezone: Africa/Lagos

### **Departments**
Create departments for better routing:
- **Sales**: For property inquiries
- **Technical Support**: For roofing and survey questions
- **General**: For general inquiries

### **Canned Responses**
Set up quick responses:
- "Thank you for contacting Facite Synergy!"
- "I'll connect you with our real estate specialist."
- "Let me get you information about our roofing services."

## 🧪 Step 7: Testing

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the widget:**
   - Open http://localhost:3000
   - Look for the chat widget in the bottom-right corner
   - Test sending a message
   - Check that messages appear in your Tawk.to dashboard

3. **Test different scenarios:**
   - Online/offline status
   - Mobile responsiveness
   - Different pages of your website

## 📊 Step 8: Analytics & Monitoring

### **Dashboard Features**
Monitor chat performance:
- **Real-time monitoring**: See active visitors
- **Chat history**: Review all conversations
- **Performance metrics**: Response times, satisfaction ratings
- **Visitor insights**: Location, device, pages visited

### **Notifications**
Set up notifications:
- **Email alerts**: When new chats arrive
- **Mobile app**: Download Tawk.to mobile app
- **Browser notifications**: For real-time alerts

## 🎯 Benefits You'll Get

1. **✅ 24/7 Availability**: Collect leads even when offline
2. **✅ Real-time Support**: Instant customer assistance
3. **✅ Lead Generation**: Convert website visitors to customers
4. **✅ Professional Image**: Modern customer support solution
5. **✅ Mobile Ready**: Works perfectly on all devices
6. **✅ Free Forever**: No monthly fees for basic features

## 🛠️ Technical Details

### **What We've Implemented**
- ✅ TypeScript-safe Tawk.to component
- ✅ Environment variable configuration
- ✅ Automatic script loading
- ✅ Error handling and logging
- ✅ Clean component unmounting
- ✅ Client-side only rendering

### **Files Modified**
- `/src/components/ui/TawkTo.tsx` - Main Tawk.to component
- `/src/components/ui/index.ts` - Export the component
- `/src/app/layout.tsx` - Added TawkTo to layout
- `/.env.local` - Added environment variables

## 🚨 Troubleshooting

### **Widget Not Showing**
1. Check that environment variables are set correctly
2. Verify property ID and widget ID are accurate
3. Check browser console for errors
4. Ensure website URL matches in Tawk.to dashboard

### **Messages Not Received**
1. Check your Tawk.to dashboard login
2. Verify email notifications are enabled
3. Check spam folder for notifications
4. Test with a different browser/device

### **Styling Issues**
1. Check if CSS conflicts exist
2. Adjust z-index if widget is hidden
3. Review mobile responsiveness settings

## 📞 Next Steps

1. **Complete Tawk.to setup** with your actual IDs
2. **Customize appearance** to match your brand
3. **Set business hours** and departments
4. **Train your team** on using the dashboard
5. **Add canned responses** for common questions
6. **Test thoroughly** before going live

---

**🎉 Your live chat is ready!** 

Once you add your Tawk.to IDs, visitors will be able to chat with you directly from your website, improving customer engagement and lead generation for Facite Synergy.
