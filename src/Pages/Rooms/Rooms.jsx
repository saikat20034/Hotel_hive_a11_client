import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import Spinner from '../../components/Spinner/Spinner';

const ITEMS_PER_PAGE = 8;

function Rooms() {
  const [selectedOption, setSelectedOption] = useState('');
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    axios.get(`https://hotelhive-kappa.vercel.app/rooms`).then(res => {
      setRooms(res.data);
    });
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setFilteredRooms(rooms.slice(startIndex, endIndex));
  }, [rooms, currentPage]);

  const handleAllFilter = async () => {
    const res = await axios.get(`https://hotelhive-kappa.vercel.app/rooms`);
    setRooms(res.data);
    setCurrentPage(1);
  };

  const handleLowFilter = async () => {
    const res = await axios.get(`https://hotelhive-kappa.vercel.app/room/0/2000`);
    setRooms(res.data);
    setCurrentPage(1);
  };

  const handleMidFilter = async () => {
    const res = await axios.get(`https://hotelhive-kappa.vercel.app/room/2001/5000`);
    setRooms(res.data);
    setCurrentPage(1);
  };

  const handleHighFilter = async () => {
    const res = await axios.get(`https://hotelhive-kappa.vercel.app/room/5001/10000000`);
    setRooms(res.data);
    setCurrentPage(1);
  };

  const handleChange = event => {
    const value = event.target.value;
    setSelectedOption(value);

    let sortedRooms = [...rooms];
    if (value === 'availability') {
      sortedRooms.sort((a, b) => (a.availability < b.availability ? 1 : -1));
    } else if (value === 'price') {
      sortedRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (value === 'rating') {
      sortedRooms.sort((a, b) => b.rating - a.rating);
    }

    setRooms(sortedRooms);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(rooms.length / ITEMS_PER_PAGE);

  return (
    <>
      {rooms.length ? (
        <div className="mt-8 space-y-3">
          <Helmet>
            <title>Rooms</title>
          </Helmet>
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold font-lato">
            Available Rooms
          </h2>

          {/* Filters */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 px-4">
            <div>
              <label className="block text-blueGray-600 text-lg font-bold mb-2">
                Filter By Price
              </label>
              <select
                className="border px-3 py-3 rounded text-sm shadow w-full"
                onChange={e => {
                  const option = e.target.value;
                  if (option === 'all') handleAllFilter();
                  else if (option === 'low') handleLowFilter();
                  else if (option === 'mid') handleMidFilter();
                  else if (option === 'high') handleHighFilter();
                }}
              >
                <option value="all">All</option>
                <option value="low">Price 0 to 2000</option>
                <option value="mid">Price 2001 to 5000</option>
                <option value="high">Price 5001 to Max</option>
              </select>
            </div>

            <div>
              <label className="block text-blueGray-600 text-lg font-bold mb-2">
                Sort By
              </label>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="border px-3 py-3 rounded text-sm shadow w-full"
              >
                <option value="">Select an option</option>
                <option value="availability">Availability</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-4 rounded-lg">
            {filteredRooms.map((room, index) => (
              <div
                key={room._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-gray-500 hover:border-gray-200 p-3 rounded-md hover:scale-105 duration-300"
              >
                <div className="relative">
                  <Link to={`/rooms/${room._id}`}>
                    <img
                      className="rounded-lg w-full h-[250px] object-cover"
                      src={room.roomImage}
                      alt={room.title}
                    />
                  </Link>
                  <p className="absolute top-8 left-0 bg-[#F57C00] px-3 py-1 rounded-full text-white -rotate-45">
                    {room.availability ? 'Available' : 'Unavailable'}
                  </p>
                </div>
                <h2 className="text-xl font-semibold mt-2">{room.title}</h2>
                <p className="text-sm mb-3">Hotel in Dhaka</p>
                <hr className="border-gray-300 mb-3" />
                <div className="flex justify-between gap-2">
                  <div className="flex gap-2 my-2">
                    <span className="bg-[#003B95] text-white p-2 rounded-t-md rounded-br-md">
                      {room.rating}
                    </span>
                    <p className="font-semibold">
                      {room.rating > 4.6
                        ? 'Wonderful'
                        : room.rating > 4.4
                        ? 'Very Good'
                        : 'Bad'}
                    </p>
                  </div>
                  <p className="mt-4 font-semibold underline">
                    {room.reviews?.length || 0}{' '}
                    {room.reviews?.length === 1 ? 'Review' : 'Reviews'}
                  </p>
                </div>
                <div className="pb-3">
                  <h3 className="text-lg font-semibold">
                    Price:{' '}
                    <span className="text-3xl font-extrabold">
                      {room.pricePerNight} tk
                    </span>{' '}
                    <span className="text-sm">Per Night</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 pb-10">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="btn btn-sm btn-outline"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="font-semibold text-blue-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(prev =>
                    prev < totalPages ? prev + 1 : totalPages
                  )
                }
                className="btn btn-sm btn-outline"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Rooms;
