import React from "react";
import GoogleMapReact from "google-map-react";

const locations = [
  {
    lat: 47.9131725,
    lng: 106.9582598,
  },
  {
    lat: 47.9241725,
    lng: 106.9582598,
  },
  {
    lat: 47.9351725,
    lng: 106.9582598,
  },
];

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 47.9241725,
      lng: 106.9582598,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        onChange={({ center }) => console.log(center)}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {locations.map((location) => (
          <MyMarker lat={location.lat} lng={location.lng} text="My Marker" />
        ))}
      </GoogleMapReact>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 10,
          width: 50,
          height: 50,
          borderRadius: "50%",
          opacity: 0.5,
          background: "red",
        }}
      ></div>
    </div>
  );
}

const MyMarker = ({ text }) => (
  <div
    style={{
      padding: 10,
      width: 50,
      height: 50,
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0.5,
      background: "red",
    }}
  >
    {text}
  </div>
);
