import { Input, Ripple, initTWE } from "tw-elements";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

import { createUserWithEmailAndPassword } from "firebase/auth"; 
import auth from "../../Firebase/firebase.config";
import Swal from 'sweetalert2';
import { useDarkMode } from "../../Contexts/DarkModeContext";

const Register = () => {
  initTWE({ Input, Ripple });
  const { isDarkMode } = useDarkMode();
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate(); 
  
  const handleRegister = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'The passwords entered do not match.',
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password Requirements',
        text: 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one special character.',
      });
      return;
    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful registration
        console.log("Successfully registered:", userCredential.user);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been successfully created! You are now logged in.',
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          history("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error registering:", error);
        let errorMessage = error.message;
        
        // Provide user-friendly error messages
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'This email is already registered. Please use a different email or try logging in.';
        } else if (error.code === 'auth/weak-password') {
          errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Please enter a valid email address.';
        }
        
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: errorMessage,
        });
      });
  };

  return (
    <section className={`h-screen mt-10 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="h-full">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between px-16">
          <div className="w-full lg:w-6/12 xl:w-6/12 mb-12 lg:mb-0 lg:order-2">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-5/12 lg:order-1">
            <form onSubmit={handleRegister}>
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary-600 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-primary-600'
                  }`}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary-600 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-primary-600'
                  }`}
                />
              </div>


              <div className="mb-6">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                >
                  Create Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary-600 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-primary-600'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer focus:outline-none ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary-600 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-primary-600'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer focus:outline-none ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>


              <div className="mb-6">
                <button
                  type="submit"
                  className={`w-full px-4 py-2 font-bold border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 ${
                    isDarkMode 
                      ? 'text-white bg-blue-600 hover:bg-blue-700' 
                      : 'text-black bg-[#CDE8E5] hover:bg-primary-600'
                  }`}
                >
                  Register
                </button>
              </div>
              <div className="flex items-center">
                <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>Already have an account?</p>
                <Link to="/login" className={`ml-4 rounded-2xl px-4 py-2 font-bold ${
                  isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-[#CDE8E5] text-black hover:bg-gray-300'
                }`}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
