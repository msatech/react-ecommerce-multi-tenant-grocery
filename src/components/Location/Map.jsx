import  React, {useState, useEffect} from "react";
 
import { useGoogleMaps } from "react-hook-google-maps";
import { useSelector } from 'react-redux';
const Map = () => {
    const location = useSelector((state) => state.location.location)
    const [coords, setCoords] = useState(location);

    useEffect(() => {
        setCoords(location)
    }, [location])

    const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyCmijT_PoZ6_j28v0Of37JWKu7ACqMolmY",
    // NOTE: even if you change options later
    {
      center: { lat: coords.latitude, lng: coords.longitude },
      zoom: 15,
    },
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};
 
export default Map;