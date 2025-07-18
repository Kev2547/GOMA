import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue with Vite — on définit _getIconUrl à undefined au lieu de delete
(L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl = undefined;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString(),
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString(),
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString(),
});

type MarkerData = {
  position: LatLngTuple;
  title: string;
  description: string;
};

const markers: MarkerData[] = [
  {
    position: [-1.678, 29.225],
    title: "Mairie de Goma",
    description: "Bâtiment administratif central de la ville.",
  },
  {
    position: [-1.684, 29.236],
    title: "Université de Goma",
    description: "Centre académique majeur dans la région.",
  },
  {
    position: [-1.680, 29.210],
    title: "Quartier Katindo",
    description: "Quartier résidentiel et commercial important.",
  },
];

const GeoMap = () => {
  return (
    <section className="bg-white py-12 px-6" id="carte-interactive">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Carte Interactive de Goma
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[-1.680, 29.225]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>
                  <h3 className="text-base font-bold">{marker.title}</h3>
                  <p className="text-sm">{marker.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default GeoMap;
