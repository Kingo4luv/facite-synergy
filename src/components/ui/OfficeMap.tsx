'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Office {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone?: string;
  description?: string;
}

interface OfficeMapProps {
  className?: string;
}

// Type definitions for Google Maps
interface LatLng {
  lat: number;
  lng: number;
}

interface MapOptions {
  center?: LatLng;
  zoom?: number;
  styles?: Array<{
    featureType?: string;
    elementType?: string;
    stylers: Array<Record<string, string | number>>;
  }>;
}

interface MarkerIcon {
  url: string;
  scaledSize: { width: number; height: number };
  anchor: { x: number; y: number };
}

interface MarkerOptions {
  position: LatLng;
  map: GoogleMap;
  title?: string;
  icon?: MarkerIcon;
}

interface InfoWindowOptions {
  content: string;
}

interface GoogleMap {
  panTo(latLng: LatLng): void;
  setZoom(zoom: number): void;
  getZoom(): number | undefined;
  fitBounds(bounds: GoogleLatLngBounds): void;
}

interface GoogleLatLngBounds {
  extend(point: LatLng): void;
  getCenter(): LatLng;
}

interface GoogleMarker {
  addListener(event: string, handler: () => void): void;
}

interface GoogleInfoWindow {
  open(map: GoogleMap, marker: GoogleMarker): void;
}

interface GoogleMapsEvent {
  addListener(instance: GoogleMap, eventName: string, handler: () => void): { remove(): void };
  removeListener(listener: { remove(): void }): void;
}

declare global {
  interface Window {
    google: {
      maps: {
        Map: {
          new (element: HTMLElement, options?: MapOptions): GoogleMap;
        };
        LatLngBounds: {
          new (): GoogleLatLngBounds;
        };
        Marker: {
          new (options: MarkerOptions): GoogleMarker;
        };
        InfoWindow: {
          new (options: InfoWindowOptions): GoogleInfoWindow;
        };
        Size: {
          new (width: number, height: number): { width: number; height: number };
        };
        Point: {
          new (x: number, y: number): { x: number; y: number };
        };
        event: GoogleMapsEvent;
      };
    };
  }
}

const OfficeMap = ({ className = "" }: OfficeMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<GoogleMap | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

  // Office locations data - memoized to avoid re-renders
  const offices: Office[] = [
    {
      id: 'head-office',
      name: 'Head Office (Abuja)',
      address: 'No. 24 Ebitu Ukiwe St. Jabi, Beta Foundation Plaza Jabi, Suite 313B Second Floor',
      coordinates: {
        lat: 9.0643, // Approximate coordinates for Jabi, Abuja
        lng: 7.4892
      },
      phone: '07036041395 / 09044143821',
      description: 'Our main office in Abuja serving the FCT and surrounding areas.'
    },
    {
      id: 'enugu-office',
      name: 'Enugu Office',
      address: '71 More House by Denten Street, Ogui Road, Enugu State',
      coordinates: {
        lat: 6.4622, // Approximate coordinates for Ogui Road, Enugu
        lng: 7.5482
      },
      phone: '07036041395 / 09044143821',
      description: 'Serving Enugu State and the South-East region.'
    }
  ];

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setIsLoaded(true);
      };

      script.onerror = () => {
        console.error('Failed to load Google Maps script');
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize map function
  const initializeMap = useCallback(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    // Check if we have a Google Maps API key
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === 'your_google_maps_api_key_here') {
      console.log('Google Maps API key not found. Map will not be loaded.');
      return;
    }

    // Calculate center point between both offices
    const bounds = new window.google.maps.LatLngBounds();
    offices.forEach(office => {
      bounds.extend(office.coordinates);
    });

    // Initialize map
    const map = new window.google.maps.Map(mapRef.current, {
      center: bounds.getCenter(),
      zoom: 6,
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [{"weight": "2.00"}]
        },
        {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [{"color": "#9c9c9c"}]
        },
        {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [{"visibility": "on"}]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f2f2"}]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{"saturation": -100}, {"lightness": 45}]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#eeeeee"}]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#7b7b7b"}]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#c8d7d4"}]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#070707"}]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#ffffff"}]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Add markers for each office
    offices.forEach((office) => {
      const marker = new window.google.maps.Marker({
        position: office.coordinates,
        map: map,
        title: office.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C11.03 2 7 6.03 7 11C7 18.25 16 30 16 30S25 18.25 25 11C25 6.03 20.97 2 16 2ZM16 14.5C14.07 14.5 12.5 12.93 12.5 11S14.07 7.5 16 7.5S19.5 9.07 19.5 11S17.93 14.5 16 14.5Z" fill="#1e40af"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 32)
        }
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 280px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 12px 0; color: #1e40af; font-size: 18px; font-weight: 700; line-height: 1.3;">
              ${office.name}
            </h3>
            <div style="margin-bottom: 8px;">
              <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151; font-weight: 500;">
                📍 ${office.address}
              </p>
            </div>
            ${office.phone ? `
              <div style="margin-bottom: 8px;">
                <p style="margin: 0; font-size: 14px; color: #374151;">
                  <span style="font-weight: 600; color: #1f2937;">📞 Phone:</span> 
                  <a href="tel:${office.phone.split(' / ')[0]}" style="color: #1e40af; text-decoration: none;">
                    ${office.phone}
                  </a>
                </p>
              </div>
            ` : ''}
            ${office.description ? `
              <div style="margin-bottom: 12px;">
                <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.4; font-style: italic;">
                  ${office.description}
                </p>
              </div>
            ` : ''}
            <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; text-align: center;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style="
                   display: inline-block;
                   background: #1e40af; 
                   color: white; 
                   text-decoration: none; 
                   font-size: 13px; 
                   font-weight: 600;
                   padding: 8px 16px;
                   border-radius: 6px;
                   transition: background 0.2s;
                 "
                 onmouseover="this.style.background='#1d4ed8'"
                 onmouseout="this.style.background='#1e40af'">
                🗺️ Get Directions
              </a>
            </div>
          </div>
        `
      });

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
        setSelectedOffice(office);
        
        // Center map on selected marker
        map.panTo(office.coordinates);
        map.setZoom(Math.max(map.getZoom() || 10, 12));
      });
    });

    // Fit map to show both markers
    map.fitBounds(bounds);
    
    // Ensure minimum zoom level
    const listener = window.google.maps.event.addListener(map, 'idle', () => {
      if ((map.getZoom() || 0) > 8) map.setZoom(8);
      window.google.maps.event.removeListener(listener);
    });

  }, [isLoaded, offices]);

  // Initialize map
  useEffect(() => {
    initializeMap();
  }, [initializeMap]);

  // If no API key is provided, show a fallback
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === 'your_google_maps_api_key_here') {
    return (
      <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border border-gray-200 ${className}`}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office Locations</h3>
            <p className="text-gray-600">Visit us at our convenient locations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div key={office.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-left">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">
                    {office.id === 'head-office' ? '🏢 Abuja Head Office' : '🏢 Enugu Office'}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">📍</span>
                      <span>{office.address}</span>
                    </p>
                    {office.phone && (
                      <p className="text-sm text-gray-700 flex items-center">
                        <span className="text-blue-600 mr-2">📞</span>
                        <a href={`tel:${office.phone.split(' / ')[0]}`} className="hover:text-blue-600 transition-colors">
                          {office.phone}
                        </a>
                      </p>
                    )}
                    {office.description && (
                      <p className="text-xs text-gray-500 italic mt-2 leading-relaxed">
                        {office.description}
                      </p>
                    )}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    🗺️ View on Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 font-medium">
              💡 Interactive map with directions available when Google Maps API is configured
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ minHeight: '400px' }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Office selector buttons */}
      <div className="absolute top-4 left-4 space-y-2 max-w-xs">
        {offices.map((office) => (
          <button
            key={office.id}
            onClick={() => {
              if (mapInstanceRef.current) {
                mapInstanceRef.current.panTo(office.coordinates);
                mapInstanceRef.current.setZoom(14);
                setSelectedOffice(office);
              }
            }}
            className={`block w-full px-4 py-3 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 whitespace-nowrap ${
              selectedOffice?.id === office.id
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-gray-800 hover:bg-gray-50 hover:shadow-xl'
            }`}
            title={office.name}
          >
            <span className="block truncate">
              {office.id === 'head-office' ? 'Abuja Head Office' : 'Enugu Office'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OfficeMap;
