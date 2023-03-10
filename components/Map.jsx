import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { Result } from "postcss";

const Map = ({ searchResults }) => {
  // Grab the longitude and latitude of all search results, and tranform into a new array that stores all the results coordinates
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // console.log(coordinates)

  // Calculates the center point of the array of coordinates
  const center = getCenter(coordinates);
  //console.log(center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/aeriq522/clenqk8rm000p01mkf4481n69"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)} //Grabs event object, and the viewstate in event then updates the map allowing you to drag and update
    >
      {searchResults.map((result) => (
        <Marker
          key={result.long}
          longitude={result.long}
          latitude={result.lat}
          anchor="bottom"
          pitchAlignment="viewport"
        >
          <p className="cursor-pointer text-2xl">📍</p>
        </Marker>
      ))}
    </ReactMapGl>
  );
};

export default Map;
