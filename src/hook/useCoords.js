import { useState, useEffect } from "react";

const useCoords = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
    loaded: false,
  });
  const onSuccess = (position) => {
    setCoords({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      loaded: true,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return coords;
};

export default useCoords;
