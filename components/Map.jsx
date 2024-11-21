import { MapContainer, TileLayer } from "react-leaflet";

const Map= ({ center = [51.505, -0.09], zoom = 100 }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    </MapContainer>
  );
};

export default Map;
