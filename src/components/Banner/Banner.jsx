import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Updated import for Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Optional, depending on your Swiper version
import { Link } from 'react-router-dom';

function BannerSlider() {
  const banners = [
    {
      img: 'https://i.postimg.cc/KvVnBPmL/63e0ae31497191675669041.jpg',
      title: 'Welcome to HotelHive',
      subtitle: 'Gateway to Hotel Booking!',
      description:
        'Discover a new way to book hotels with HotelHive. Experience seamless functionality across devices, innovative features, and join the hive to unlock effortless travel planning today!',
    },
    {
      img: 'https://i.postimg.cc/cHtt07hh/luxury-hotels-resorts-las-vegas-344741387.jpg', // Replace with a second image
      title: 'Luxurious Comfort',
      subtitle: 'Your Comfort, Our Priority!',
      description:
        'Relax in the finest accommodations with HotelHive. Our curated selection of hotels ensures a memorable experience for every traveler.',
    },
    {
      img: 'https://img.freepik.com/free-photo/friendly-checkin-assisting-senior-guests_482257-85120.jpg?semt=ais_hybrid', // Replace with a third image
      title: 'Unmatched Hospitality',
      subtitle: 'Feel at Home with Us!',
      description:
        'At HotelHive, we prioritize your satisfaction with exceptional service, elegant spaces, and unforgettable moments.',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Ensure Autoplay is included
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[350px] md:h-[580px] rounded-lg"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[580px] rounded-lg object-cover"
              src={banner.img}
              alt={banner.title}
            />
            <div className="absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] h-full w-full rounded-xl">
              <div className="absolute top-[50%] mx-3 lg:left-20 max-w-xl transform -translate-y-[50%] space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 text-center">
                  {banner.title}
                  <br />
                  <p className="text-center">{banner.subtitle}</p>
                </h2>
                <p className="text-gray-400 text-center text-sm md:text-base">
                  {banner.description}
                </p>
                <div className="text-center">
                  <Link
                    to="/rooms"
                    className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm md:text-base font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerSlider;
