import React, { useState, useEffect } from 'react'
import ReactMapGL,{ Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector } from 'react-redux';
import { setLocation } from '../../Store/features/Location/LocationSlice';
import getCenter from "geolib/es/getCenter"



function Location() {
  const [selectedlocation, setSelectedlocation] = useState({});
  const location = useSelector((state) => state.location)
  
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: location.location.latitude,
    longitude: location.location.longitude,
    zoom: 15
  });


  useEffect(() => {
    setViewport({
      ...viewport,
      longitude: location.location.longitude,
      latitude: location.location.latitude,
      zoom: 14,
      transitionDuration: 2500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  }, [location])

  return (
    <ReactMapGL 
      mapStyle="mapbox://styles/msatech049/ckyldevi9jemk15nu450j829d"
      mapboxApiAccessToken="pk.eyJ1IjoibXNhdGVjaDA0OSIsImEiOiJja3lsZDlyanUwNWNuMm9wYno5a2d5d3plIn0.oEF8tntNmx0SebjdofQX1Q"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      
    >
      <Marker longitude={location.location.longitude} latitude={location.location.latitude} offsetLeft={-20} offsetTop={-10}>
          <p onClick={() => setSelectedlocation(location.location)} style={{fontSize:"32px"}}>📍</p>
      </Marker>

    </ReactMapGL>
  )
}

export default Location
