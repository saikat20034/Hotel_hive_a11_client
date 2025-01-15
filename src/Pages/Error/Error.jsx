import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <>
      <section className="relative z-10 bg-blue-500 h-screen flex items-center justify-center font-fontPrimary">
        <div className="absolute inset-0 z-0">
          {/* Add a GIF as the background */}
          <img
            src="https://media.giphy.com/media/3o7TKvA1k4RqAK3PgY/giphy.gif"
            alt="404 Animation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-blue-500 sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-gray-800">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-gray-600">
                  The page you are looking for might be invalid or no longer
                  exists!
                </p>
                <NavLink
                  to="/"
                  className="inline-block rounded-lg border border-blue-500 px-8 py-3 text-center text-base font-semibold text-blue-500 hover:text-white transition hover:bg-blue-500"
                >
                  Go To Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;
