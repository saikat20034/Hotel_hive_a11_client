import { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          🌍 Discover Our Location
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
          We’re situated in the vibrant heart of the city, offering unmatched
          comfort and accessibility. Use the interactive map below to explore
          our exact location and plan your visit today.
        </p>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <Map
                height={400}
                defaultCenter={[23.8159, 90.4089]}
                defaultZoom={14}
              >
                <Marker
                  width={50}
                  anchor={[23.8159, 90.4089]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                />
              </Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyMap;
