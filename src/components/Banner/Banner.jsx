import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

function BannerSlider() {
  const banners = [
    {
      img: 'https://i.postimg.cc/KvVnBPmL/63e0ae31497191675669041.jpg',
      title: 'Welcome to HotelHive',
      subtitle: 'Gateway to Hotel Booking!',
      description:
        'Discover a new way to book hotels with HotelHive. Experience seamless functionality across devices and effortless travel planning.',
    },
    {
      img: 'https://i.postimg.cc/cHtt07hh/luxury-hotels-resorts-las-vegas-344741387.jpg',
      title: 'Luxurious Comfort',
      subtitle: 'Your Comfort, Our Priority!',
      description:
        'Relax in the finest accommodations with HotelHive. Our curated selection of hotels ensures a memorable experience.',
    },
    {
      img: 'https://img.freepik.com/free-photo/friendly-checkin-assisting-senior-guests_482257-85120.jpg?semt=ais_hybrid',
      title: 'Unmatched Hospitality',
      subtitle: 'Feel at Home with Us!',
      description:
        'We prioritize your satisfaction with exceptional service, elegant spaces, and unforgettable moments.',
    },
  ];

  return (
    <div className="w-full m-0 p-0 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[90vh] sm:h-screen lg:h-[75vh] xl:h-[70vh]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh] sm:h-screen lg:h-[75vh] xl:h-[70vh] rounded-b-lg overflow-hidden">
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-cover max-w-full max-h-full"
              />
              <div className="absolute inset-0 bg-black/50">
                <div className="absolute bottom-10 left-5 sm:left-10 md:left-20 lg:left-32 text-white max-w-xl space-y-4 text-left px-2 sm:px-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-200 font-medium">
                    {banner.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">
                    {banner.description}
                  </p>
                  <Link
                    to="/rooms"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
