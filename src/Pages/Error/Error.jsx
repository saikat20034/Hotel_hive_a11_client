import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <section className="relative z-10 h-screen w-full overflow-hidden bg-gray-200 flex items-center justify-center font-sans">
      {/* Background GIF */}
      {/* <img
        src="https://media.giphy.com/media/3o7TKvA1k4RqAK3PgY/giphy.gif"
        alt="404 Animation"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      {/* Overlay Content */}
      <div className="relative z-10 max-w-md w-full px-6 py-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h1 className="text-blue-600 font-extrabold text-[72px] sm:text-[100px] leading-none mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Oops! That page can’t be found
        </h2>
        {/* <p className="text-gray-600 mb-6">
          The page you're looking for might have been removed or never existed.
        </p> */}
        <NavLink to="/" className="btn btn-outline btn-primary text-base">
          ← Back to Home
        </NavLink>
      </div>
    </section>
  );
}

export default Error;
