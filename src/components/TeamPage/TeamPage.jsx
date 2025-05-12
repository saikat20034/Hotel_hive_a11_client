import { Helmet } from 'react-helmet';

const teamMembers = [
  {
    name: 'Sadia Islam',
    role: 'Founder & CEO',
    image:
      'https://i.postimg.cc/x1tPC2Dd/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg',
    linkedin: 'https://linkedin.com/in/sadiaislam',
  },
  {
    name: 'Rahim Uddin',
    role: 'CTO',
    image:
      'https://i.postimg.cc/Bnqg4vzy/smiling-young-man-with-crossed-arms-outdoors-1140-255.jpg',
    linkedin: 'https://linkedin.com/in/rahimuddin',
  },
  {
    name: 'Nadia Islam',
    role: 'Marketing Head',
    image:
      'https://i.postimg.cc/7P0Mz78d/modern-stylish-muslim-woman-hijab-city-street-285396-11084.jpg',
    linkedin: 'https://linkedin.com/in/nadiafarzana',
  },
  {
    name: 'Tanvir Alam',
    role: 'Lead Developer',
    image:
      'https://i.postimg.cc/HWy3tR5S/young-bearded-man-with-striped-shirt-273609-5677.jpg',
    linkedin: 'https://linkedin.com/in/tanviralam',
  },
];

function TeamPage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto text-blueGray-800">
      <Helmet>
        <title>Our Team | HotelHive</title>
      </Helmet>

      <h1 className="text-3xl md:text-5xl font-bold mb-6 pt-10 text-center">
        Meet Our Team
      </h1>
      <p className="text-center text-sm md:text-base mb-10 text-gray-600">
        The dedicated professionals behind HotelHive — passionate about
        hospitality, innovation, and customer satisfaction.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-blue-300"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
