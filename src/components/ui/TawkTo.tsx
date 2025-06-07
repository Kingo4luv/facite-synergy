'use client';

import { useEffect } from 'react';

interface TawkToProps {
  propertyId?: string;
  widgetId?: string;
}

// Type definitions for Tawk.to
declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      setAttributes?: (attributes: Record<string, string>) => void;
      hideWidget?: () => void;
      showWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const TawkTo = ({ 
  propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID, 
  widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID 
}: TawkToProps) => {
  useEffect(() => {
    // Only load Tawk.to if we have the required IDs
    if (!propertyId || !widgetId) {
      console.log('Tawk.to: Property ID or Widget ID not found in environment variables');
      return;
    }

    // Initialize Tawk_API if it doesn't exist
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Create script element
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      // Insert script
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }

      // Optional: Configure Tawk.to settings
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function() {
          console.log('Tawk.to chat widget loaded successfully');
          
          // Optional: Customize chat widget
          if (window.Tawk_API?.setAttributes) {
            window.Tawk_API.setAttributes({
              'name': '',
              'email': '',
              'hash': ''
            });
          }

          // Optional: Hide chat initially (uncomment if needed)
          // window.Tawk_API?.hideWidget?.();
        };

        // Optional: Handle chat events
        window.Tawk_API.onChatStarted = function() {
          console.log('Chat started');
        };

        window.Tawk_API.onChatEnded = function() {
          console.log('Chat ended');
        };
      }

      // Cleanup function
      return () => {
        // Remove script if component unmounts
        const existingScript = document.querySelector(`script[src*="embed.tawk.to"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [propertyId, widgetId]);

  // This component doesn't render anything visible
  return null;
};

export default TawkTo;
