import React, { useState } from "react";
import ReactGlobe from "react-globe";

export const Globe = () => {
  const [globe, setGlobe] = useState<any>(null);

  const markers: any = [
    {
      id: "marker1",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    {
      id: "marker2",
      city: "New York",
      color: "blue",
      coordinates: [40.73061, -73.935242],
      value: 25,
    },
    {
      id: "marker3",
      city: "San Francisco",
      color: "orange",
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    {
      id: "marker4",
      city: "Beijing",
      color: "gold",
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    {
      id: "marker5",
      city: "London",
      color: "green",
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    {
      id: "marker6",
      city: "Los Angeles",
      color: "gold",
      coordinates: [29.7604, -95.3698],
      value: 90,
    },
  ];

  // simple and extensive options to configure globe
  const options: any = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 1000,
    focusEasingFunction: ["Linear", "None"],
    pointLightColor: "gold",
    pointLightIntensity: 1.5,
    markerTooltipRenderer: (marker: any) => `${marker.city} (${marker.value})`,
  };

  return (
    <ReactGlobe
      height="100vh"
      width="100%"
      globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      globeBackgroundTexture=""
      markers={markers}
      options={options}
      onClickMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
      onGetGlobe={setGlobe}
      onMouseOutMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
      onGlobeTextureLoaded={() => console.log("globe loaded")}
      onMouseOverMarker={(marker, markerObject, event) =>
        console.log(marker, markerObject, event)
      }
    />
  );
};
