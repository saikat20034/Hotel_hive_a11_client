import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../Firebase/AuthProvider';

function Signup() {
  const [error, setError] = useState('');
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown(cur => !cur);
  const navigate = useNavigate();

  const handleRegistration = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const profile = e.target.photoURL.value;
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain an uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain a lowercase letter');
      return;
    }
    createUser(email, password)
      .then(result => {
        updateUserProfile(name, profile)
          .then(() => {
            setUser(result.user);
            toast.success('Successfully Created Account!');
            navigate('/');
          })
          .catch(err => console.log(err));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome! Please fill out the details to sign up.
        </p>
        <form onSubmit={handleRegistration} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://www.photo.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                size="lg"
                name="password"
                label="Password"
                type={passwordShown ? 'text' : 'password'}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisiblity}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
