import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/aeriq522/clenqk8rm000p01mkf4481n69"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(Viewport) => setViewport(Viewport)}
    ></ReactMapGl>
  );
};

export default Map;
