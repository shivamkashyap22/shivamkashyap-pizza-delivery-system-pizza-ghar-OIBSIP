import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import RegisterForm from '../../components/ui/Admin/Auth/RegisterForm';
import Logo from '/android-chrome-512x512.png';

function AdminRegisterScreen() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const admin = useSelector((state) => state.admin);
  const { adminUserInfo } = admin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (adminUserInfo) {
      navigate('/admin/dashboard');
    }
  }, [navigate, adminUserInfo]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-14 pb-4 sm:pb-0 px-10 sm:px-16 bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6">
        <div className="flex flex-row justify-center items-center p-4 md:p-6 md:w-1/2">
          <img
            src={Logo}
            alt="Pizza Ghar logo"
            className="hidden sm:block h-44 w-44"
          />
          <h1 className="text-4xl lg:text-5xl text-center md:text-left text-yellow-500 font-semibold">
            <span className="text-yellow-700">Register Now!</span> to be part of
            our Team
          </h1>
        </div>

        <div className="bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg p-6 md:w-1/2 lg:w-1/3">
          <RegisterForm />
          <p className="text-center text-sm text-gray-400">
            Already have Account?{' '}
            <Link
              to="/admin/login"
              className="underline text-yellow-500 hover:text-yellow-700"
            >
              Sign in Here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdminRegisterScreen;
