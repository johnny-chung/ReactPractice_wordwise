import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";

import styles from "./Map.module.css";
import { useCities } from "../contexts/CityiesContext";
export default function Map() {
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPos, setMapPos] = useState([22.4759, 114.0445]);

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      mapLat && mapLng && setMapPos([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPos}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.date} <br /> {city.notes}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPos} />
        {/* <DetectClick setSearchParams={setSearchParams}/> */}
      </MapContainer>
    </div>
  );
}
// need to use custom component to make map re-render from leaflet function
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick(setSearchParams) {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?${e.latlng.lat}?${e.latlng.lng}`);
      setSearchParams([e.latlng.lat, e.latlng.lng])
    },
  });
}
