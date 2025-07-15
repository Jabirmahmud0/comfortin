import { Input, Ripple, initTWE } from "tw-elements";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'sweetalert2/dist/sweetalert2.css';
import { useDarkMode } from "../../Contexts/DarkModeContext";

initTWE({ Input, Ripple });

const Login = () => {
    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSuccessRedirect = () => {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Google sign-in success:', user);
                handleSuccessRedirect();
            })
            .catch((error) => {
                console.error('Google sign-in error:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed!',
                    text: error.message,
                });
            });
    };

    const handleGithubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('GitHub sign-in success:', user);
                handleSuccessRedirect();
            })
            .catch((error) => {
                console.error('GitHub sign-in error:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed!',
                    text: error.message,
                });
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please enter both email and password.',
            });
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Email sign-in success:', user);
                handleSuccessRedirect();
            })
            .catch((error) => {
                console.error('Email sign-in error:', error.message);
                let errorMessage = error.message;
                
                // Provide user-friendly error messages
                if (error.code === 'auth/user-not-found') {
                    errorMessage = 'No account found with this email. Please register first.';
                } else if (error.code === 'auth/wrong-password') {
                    errorMessage = 'Incorrect password. Please try again.';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Please enter a valid email address.';
                } else if (error.code === 'auth/too-many-requests') {
                    errorMessage = 'Too many failed login attempts. Please try again later.';
                }
                
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed!',
                    text: errorMessage,
                });
            });
    };

    return (
        <section className={`h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="h-full">
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between px-16">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div className="flex flex-row items-center justify-center lg:justify-start">
                            <p className={`mb-0 me-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sign in with</p>

                            {/* GitHub */}
                            <button
                                type="button"
                                onClick={handleGithubLogin}
                                className={`mx-1 inline-block h-9 w-9 rounded-full p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:shadow-primary-2 ${
                                    isDarkMode 
                                        ? 'bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong' 
                                        : 'bg-[#CDE8E5] hover:bg-primary-accent-300 focus:bg-primary-accent-300 active:bg-primary-600'
                                }`}
                            >
                                <FaGithub className="mx-auto h-3.5 w-3.5 text-white" />
                            </button>

                            {/* Google */}
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className={`mx-1 inline-block h-9 w-9 rounded-full p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:shadow-primary-2 ${
                                    isDarkMode 
                                        ? 'bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong' 
                                        : 'bg-[#CDE8E5] hover:bg-primary-accent-300 focus:bg-primary-accent-300 active:bg-primary-600'
                                }`}
                            >
                                <FaGoogle className="mx-auto h-3.5 w-3.5 text-white" />
                            </button>
                        </div>

                        <form onSubmit={handleFormSubmit}>
                            <div className="mt-6">
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
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
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="password"
                                    className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
                                >
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
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

                            <div className="mt-6">
                                <button
                                    className={`w-full px-4 py-2 font-bold border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 ${
                                        isDarkMode 
                                            ? 'text-white bg-blue-600 hover:bg-blue-700' 
                                            : 'text-black bg-[#CDE8E5] hover:bg-primary-600'
                                    }`}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="flex mt-4">
                            <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>Don&apos;t have an account?</p>
                            <Link to="/register">
                                {" "}
                                {/* Use Link component with "to" prop */}
                                <button className={`ml-4 rounded-2xl px-4 py-2 font-bold ${
                                    isDarkMode 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                        : 'bg-[#CDE8E5] text-black hover:bg-gray-300'
                                }`}>
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
