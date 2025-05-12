

const MembershipPerks = () => {
  const perks = [
    {
      title: 'Exclusive Discounts',
      description: 'Enjoy up to 30% off on selected hotels and destinations.',
      icon: '💰',
    },
    {
      title: 'Priority Support',
      description: 'Get 24/7 premium customer service for all your bookings.',
      icon: '⭐',
    },
    {
      title: 'Loyalty Points',
      description: 'Earn points for every booking and redeem them for rewards.',
      icon: '🎁',
    },
    {
      title: 'Early Access',
      description: 'Be the first to access new deals and seasonal offers.',
      icon: '🚀',
    },
  ];

  return (
    <section id="membership-perks" className="bg-gray-200 rounded-lg py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center mb-4">
          Membership Perks
        </h2>
        <p className="text-gray-600 mb-8">
          Join our membership program and enjoy exclusive benefits tailored for
          you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="card bg-gray-100 shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-5xl mb-4">{perk.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-8">Join Now & Save More</button>
      </div>
    </section>
  );
};

export default MembershipPerks;
