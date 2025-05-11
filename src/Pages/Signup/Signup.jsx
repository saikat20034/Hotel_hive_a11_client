import { useContext, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../Firebase/AuthProvider';

function Signup() {
  const formRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const validatePassword = (password) => {
    if (password.length < 6) return 'Password must be at least 6 characters.';
    if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter.';
    if (!/[a-z]/.test(password)) return 'Password must contain a lowercase letter.';
    return '';
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = new FormData(formRef.current);
    const email = form.get('email')?.trim();
    const password = form.get('password')?.trim();
    const name = form.get('name')?.trim();
    const photoURL = form.get('photoURL')?.trim();

    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      setUser(result.user);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 m-10 rounded-lg px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Create Your Account</h2>
        <p className="text-center text-gray-600 mb-6">Welcome! Please fill out the details to sign up.</p>

        <form ref={formRef} onSubmit={handleRegistration} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-gray-700 font-semibold mb-2">Photo URL</label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="https://www.photo.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative">
              <Input
                size="lg"
                id="password"
                name="password"
                type={passwordShown ? 'text' : 'password'}
                required
                className="w-full pr-10"
                placeholder="Enter a strong password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 rounded-lg transition-all"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
