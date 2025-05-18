import React, { useContext, useEffect, useState } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/AuthProvider';

function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {['/', '/rooms', '/my-bookings', '/about-us', '/contact-us'].map(
        (path, index) => {
          const labels = [
            'Home',
            'Rooms',
            'My Bookings',
            'About Us',
            'Contact Us',
          ];
          return (
            <Typography
              key={path}
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center px-3 py-2 bg-orange-700 text-white rounded-md duration-300 font-semibold font-lato'
                    : 'flex items-center font-display text-black px-3 py-2 font-lato'
                }
              >
                {labels[index]}
              </NavLink>
            </Typography>
          );
        }
      )}
    </ul>
  );

  return (
    <div className="sticky top-0 z-50 bg-blue-900">
      <Navbar className="max-w-full px-4 py-2 lg:px-8 lg:py-4 rounded-none shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center text-blue-gray-900">
            <Link to="/">
              <img
                className="h-[50px] w-[80px]"
                src="/src/assets/Hotel Hive.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex items-center justify-between gap-6">
            {/* Dark/Light Toggle */}
            <label className="flex items-center cursor-pointer">
              <span className="mr-2 text-white font-lato">Dark Mode</span>
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === 'dark'}
                className="toggle toggle-sm toggle-accent"
              />
            </label>

            {/* Auth Buttons */}
            {!user ? (
              <div className="hidden lg:flex items-center gap-x-2">
                <Link to="/signin">
                  <Button variant="filled" size="md" className="font-lato">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="filled" size="md" className="font-lato">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Tooltip content={user.displayName || 'User'}>
                  <Link to="/profile">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="User Avatar"
                        src={
                          user.photoURL ||
                          'https://i.ibb.co/2y6n1Yf/default-avatar.jpg'
                        }
                        className="border-2 border-white hover:z-10"
                      />
                      <Typography className="text-black font-lato font-semibold hover:underline">
                        {user.displayName || 'Profile'}
                      </Typography>
                    </div>
                  </Link>
                </Tooltip>
                <Button
                  onClick={handleLogOut}
                  variant="filled"
                  size="md"
                  className="font-lato"
                >
                  LogOut
                </Button>
              </div>
            )}

            {/* Mobile Toggle Button */}
            <IconButton
              variant="text"
              className="lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Nav Content */}
        <Collapse open={openNav}>
          {navList}
          <div className="flex flex-col gap-2 mb-4 px-4">
            {/* Mobile Dark/Light Toggle */}
            <label className="flex items-center cursor-pointer">
              <span className="mr-2 text-white font-lato">Dark Mode</span>
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === 'dark'}
                className="toggle toggle-sm toggle-accent"
              />
            </label>

            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="filled" fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="filled" fullWidth>
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" onClick={() => setOpenNav(false)}>
                  <Button variant="text" fullWidth>
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    handleLogOut();
                    setOpenNav(false);
                  }}
                  variant="text"
                  fullWidth
                >
                  LogOut
                </Button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
