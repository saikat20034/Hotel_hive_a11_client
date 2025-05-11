import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Typography, Input, Button } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Firebase/AuthProvider';

export function SignIn() {
  const [error, setError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown(cur => !cur);
  const { googleLogin, githubLogin, loginUser, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success('SignIn with Google Successfully');
        navigate(from);
      })
      .catch(error => console.log(error));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        console.log(result.user);
        toast.success('SignIn with Github Successfully');
        setUser(result.user);
        navigate(from);
      })
      .catch(error => console.log(error));
  };

  const handleLoginUser = e => {
    e.preventDefault();
    setPasswordShown(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login Successfully!');
        navigate(from);
      })
      .catch(() => {
        setError('Wrong Email or Password');
        toast.error('Wrong Email or Password');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 rounded-lg  mt-10">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Typography
          variant="h3"
          className="text-center font-bold text-transparent bg-clip-text bg-black p-12"
        >
          Sign In
        </Typography>
        <Typography className="text-center text-gray-600 mb-6">
          Enter your email and password to sign in
        </Typography>
        <form onSubmit={handleLoginUser}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              label="Email"
              className="w-full mt-1 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <Input
              id="password"
              size="lg"
              label="Password"
              name="password"
              type={passwordShown ? 'text' : 'password'}
              icon={
                <i onClick={togglePasswordVisiblity} className="cursor-pointer">
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 text-pink-500" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  )}
                </i>
              }
              className="w-full mt-1 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <small className="text-red-600">{error}</small>
          <Button type="submit" className="w-full mt-4 bg-blue-500" fullWidth>
            Sign In
          </Button>
          <div className="flex items-center justify-between space-x-2 mt-4">
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              size="md"
              className="flex items-center justify-center gap-2 text-gray-700 hover:text-white hover:bg-black"
              fullWidth
            >
              <FaGoogle />
              Google
            </Button>
            <Button
              onClick={handleGithubLogin}
              variant="outlined"
              size="md"
              className="flex items-center justify-center gap-2 text-gray-700 hover:text-white hover:bg-black"
              fullWidth
            >
              <FaGithub />
              Github
            </Button>
          </div>
          <Typography variant="small" color="gray" className="text-center mt-4">
            Not registered?{' '}
            <Link to="/signup" className="text-pink-500 hover:underline">
              Create an account
            </Link>
          </Typography>
        </form>
      </section>
    </div>
  );
}

export default SignIn;
