import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

function MapComponent({ pickupLocation, dropoffLocation }) {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  const fetchDirections = (pickup, dropoff) => {
    if (!pickup || !dropoff) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: pickup,
        destination: dropoff,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  // Call fetchDirections when pickup or dropoff locations change
  React.useEffect(() => {
    fetchDirections(pickupLocation, dropoffLocation);
  }, [pickupLocation, dropoffLocation]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCYQJ8DayyCmxzBq_NLObOJnCP9lX6SfWU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={pickupLocation || dropoffLocation || { lat: 0, lng: 0 }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {
          // If we have a directions response, render the DirectionsRenderer
          directionsResponse && (
            <DirectionsRenderer
              options={{
                directions: directionsResponse
              }}
            />
          )
        }
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
