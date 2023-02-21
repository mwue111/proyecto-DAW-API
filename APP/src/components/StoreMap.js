import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const StoreMap = ({ address, apiKey }) => {
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(15);
  const [googleReady, setGoogleReady] = useState(false);
  const [marker, setMarker] = useState(null);

  const onMapLoaded = (map, maps) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        setCenter({ lat, lng });

        if (marker) {
          marker.setPosition({ lat, lng });
        } else {
          setMarker(new maps.Marker({
            position: { lat, lng },
            map,
            icon: {
              url: 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
              scaledSize: new maps.Size(32, 32)
            }
          }));
        }
      } else {
        console.error('Error:', status);
      }
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.defer = true;
    script.async = true;
    script.addEventListener('load', () => {
      setGoogleReady(true);
    });
    document.head.appendChild(script);
  }, [apiKey]);

  useEffect(() => {
    if (marker) {
      console.log(marker)
      marker.setMap(null);
      setMarker(null);
    }
  }, [address]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      {googleReady && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: 0, lng: 0 }}
          center={center || { lat: 0, lng: 0 }}
          defaultZoom={zoom}
          onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}
        />
      )}
    </div>
  );
};

export default StoreMap;
