

const TravelBlogSection = () => {
  const blogs = [
    {
      title: 'Top 10 Beaches to Visit',
      description:
        'Discover the most beautiful beaches around the world to relax and unwind.',
      image:
        'https://images.stockcake.com/public/3/e/7/3e72e6ce-02d3-45f5-b660-710f1bc17e2a_large/sunset-beach-waves-stockcake.jpg',
      link: 'https://www.pocketwanderings.com/most-beautiful-beaches-in-the-world/',
    },
    {
      title: 'Ultimate Hiking Guide',
      description:
        'A complete guide to the best hiking trails for nature enthusiasts.',
      image:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/15/09/istock-483629308.jpg?width=1200',
      link: 'https://www.rei.com/learn/expert-advice/hiking-for-beginners.html',
    },
    {
      title: 'Cultural Hotspots',
      description:
        'Dive into the rich cultures of different countries and their traditions.',
      image:
        'https://streetlifedesigncompetition.com/wp-content/uploads/2023/01/450-Cultural-Hotspot_Streetlife-Competition-6.jpeg',
      link: 'https://www.youtube.com/playlist?list=PLLQ875pjfw1DiGggQyBSBEDRWauX0iWp-',
    },
  ];

  return (
    <section id="travel-blog" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Travel Inspiration Blog
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Explore tips, guides, and stories to plan your next adventure!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg overflow-hidden"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-500 hover:underline font-semibold"
                >
                  {/* Read More → */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlogSection;
