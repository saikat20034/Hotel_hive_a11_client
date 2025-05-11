

const features = [
  {
    title: '24/7 Support',
    description: 'We are available anytime you need assistance, day or night.',
    icon: 'https://img.icons8.com/ios-filled/50/4a90e2/headset.png',
  },
  {
    title: 'Luxury Rooms',
    description: 'Spacious, comfortable, and elegant rooms for your best stay.',
    icon: 'https://img.icons8.com/ios-filled/50/4a90e2/bedroom.png',
  },
  {
    title: 'Prime Location',
    description:
      'Located in the heart of the city, close to attractions and transport.',
    icon: 'https://img.icons8.com/ios-filled/50/4a90e2/map-pin.png',
  },
  {
    title: 'Best Price Guarantee',
    description:
      'Book directly with us for the best rates and exclusive deals.',
    icon: 'https://img.icons8.com/ios-filled/50/4a90e2/discount.png',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto mb-4 w-12 h-12"
              />
              <h4 className="text-xl font-semibold text-gray-700">
                {feature.title}
              </h4>
              <p className="text-gray-500 mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
