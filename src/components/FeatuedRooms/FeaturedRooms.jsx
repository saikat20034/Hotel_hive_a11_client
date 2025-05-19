import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

function FeaturedRooms() {
  const [featuredRoom, setFeaturedRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://hotelhive-kappa.vercel.app/rooms`).then(res => {
      const data = res.data;
      const newData = data.slice(0, 8);
      setFeaturedRoom(newData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-gray-200 rounded-lg p-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold lg:font-extrabold text-center mb-4">
        Featured Rooms
      </h2>
      <p className="text-base md:text-lg text-center max-w-4xl mx-auto text-gray-800 mb-10">
        Discover our featured rooms: where comfort meets style in every detail.
        Experience luxury and relaxation like never before with HotelHive’s
        curated selection of premium accommodations.
      </p>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-2 text-black rounded-lg">
          {featuredRoom.map(room => (
            <div key={room._id} className="h-full">
              <div className="space-y-2 h-full flex flex-col justify-between border border-gray-400 p-3 md:p-4 rounded-lg hover:bg-gray-300 bg-white">
                <div className="relative">
                  <Link to={`/rooms/${room._id}`} className="cursor-pointer">
                    <img
                      className="rounded-lg w-full h-[200px] object-cover"
                      src={room?.roomImage}
                      alt={room?.title}
                    />
                  </Link>
                  <p className="absolute top-4 left-0 z-50 bg-[#003B95] px-3 py-1 rounded-full text-white -rotate-45">
                    {room.availability ? 'Available' : 'Unavailable'}
                  </p>
                </div>

                <div className="space-y-1">
                  <h2 data-aos="fade-up" className="text-xl font-semibold">
                    {room.title}
                  </h2>
                  <p data-aos="fade-up" className="text-sm mb-1 text-gray-700">
                    Hotel in {room?.location || 'Unknown'}
                  </p>

                  {/* Ratings */}
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex gap-2 my-2 items-center">
                      <span
                        data-aos="fade-up"
                        className="bg-[#003B95] text-white px-2 py-1 rounded-t-md rounded-br-md text-sm"
                      >
                        {room.rating}
                      </span>
                      <p data-aos="fade-up" className="font-semibold text-sm">
                        {room.rating > 4.6
                          ? 'Wonderful'
                          : room.rating > 4.4
                          ? 'Very Good'
                          : 'Average'}
                      </p>
                    </div>
                    <p
                      data-aos="fade-up"
                      className="font-semibold hover:underline text-sm"
                    >
                      {room?.reviews?.length || 0} Reviews
                    </p>
                  </div>
                </div>

                <div className="pb-3">
                  <h3 data-aos="fade-up" className="text-lg font-semibold">
                    Price:{' '}
                    <span className="text-3xl font-extrabold">
                      {room?.pricePerNight} tk
                    </span>{' '}
                    <span className="text-sm">Per Night</span>
                  </h3>
                </div>

                <Link to={`/rooms/${room._id}`}>
                  <Button data-aos="fade-up" className="w-full" color="blue">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedRooms;
