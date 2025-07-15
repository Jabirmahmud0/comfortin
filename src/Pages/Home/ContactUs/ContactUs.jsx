import { useState } from "react";
import { useDarkMode } from "../../../Contexts/DarkModeContext";
import Swal from 'sweetalert2';

const ContactUs = () => {
    const { isDarkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                title: 'Incomplete Form',
                text: 'Please fill in all fields before sending.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for contacting ComfortInn. We\'ll get back to you within 24 hours.',
            icon: 'success',
            confirmButtonText: 'Great!'
        }).then(() => {
            setFormData({ name: '', email: '', message: '' });
        });
    };
    
    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="py-8 lg:py-16 relative">
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" 
                    className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden opacity-20" 
                    alt="Hotel lobby" 
                />
                
                <div className="xl:mx-auto xl:container relative">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        {/* Contact Information Section */}
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-4">
                            <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" 
                                className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden opacity-20" 
                                alt="Hotel interior" 
                            />

                            <div className="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    {/* Add background overlay for better text visibility in dark mode */}
                                    <div className={`${isDarkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} p-6 rounded-lg shadow-lg`}>
                                        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                            We&apos;re Here
                                        </h1>
                                        <div className="w-full md:w-10/12 mt-3">
                                            <h2 className={`text-base md:text-lg leading-8 tracking-wider ${isDarkMode ? 'text-gray-100' : 'text-gray-600'}`}>
                                                Experience luxury and comfort at ComfortInn. We&apos;re committed to making your stay unforgettable.
                                            </h2>
                                            
                                            {/* Address */}
                                            <div className="mt-6 md:mt-8">
                                                <div className="flex items-center mb-2">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <h2 className="text-sm md:text-base text-blue-500 font-semibold">Address</h2>
                                                </div>
                                                <h2 className={`text-base md:text-lg leading-8 tracking-wider ml-7 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                                                    ComfortInn Hotel<br />
                                                    Office #13, Kajipara<br />
                                                    Mirpur 10, Dhaka, Bangladesh
                                                </h2>
                                            </div>
                                            
                                            {/* Contact */}
                                            <div className="mt-6 md:mt-8">
                                                <div className="flex items-center mb-2">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                    <h2 className="text-sm md:text-base text-blue-500 font-semibold">Contact</h2>
                                                </div>
                                                <h2 className={`text-base md:text-lg leading-8 tracking-wider ml-7 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                                                    +880 2 123 456 789 (Reception)<br />
                                                    +880 1 987 654 321 (Reservations)
                                                </h2>
                                            </div>
                                            
                                            {/* Email */}
                                            <div className="mt-6 md:mt-8">
                                                <div className="flex items-center mb-2">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                    <h2 className="text-sm md:text-base text-blue-500 font-semibold">Email</h2>
                                                </div>
                                                <h2 className={`text-base md:text-lg leading-8 tracking-wider ml-7 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                                                    info@comfortinn.com<br />
                                                    reservations@comfortinn.com
                                                </h2>
                                            </div>

                                            {/* Hours */}
                                            <div className="mt-6 md:mt-8">
                                                <div className="flex items-center mb-2">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                    <h2 className="text-sm md:text-base text-blue-500 font-semibold">Operating Hours</h2>
                                                </div>
                                                <h2 className={`text-base md:text-lg leading-8 tracking-wider ml-7 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                                                    Reception: 24/7<br />
                                                    Restaurant: 6:00 AM - 11:00 PM<br />
                                                    Room Service: 24/7
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-blue-600">
                                    Let&apos;s Talk
                                </h1>
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className={`text-base md:text-lg leading-8 tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Have questions about reservations, amenities, or special requests? We&apos;d love to hear from you!
                                    </h2>
                                    
                                    <form onSubmit={handleSubmit} className="mt-6">
                                        {/* Name Field */}
                                        <div className="mt-4 md:mt-8">
                                            <label className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                                Full Name *
                                            </label>
                                            <input 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`mt-3 text-base border-2 w-full hover:border-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-3 px-4 transition-colors duration-300 ${
                                                    isDarkMode 
                                                        ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600' 
                                                        : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'
                                                }`} 
                                                type="text" 
                                                placeholder="Enter your full name" 
                                                aria-label="enter your name input" 
                                                required
                                            />
                                        </div>
                                        
                                        {/* Email Field */}
                                        <div className="mt-4 md:mt-8">
                                            <label className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                                Email Address *
                                            </label>
                                            <input 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`mt-3 text-base border-2 w-full hover:border-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-3 px-4 transition-colors duration-300 ${
                                                    isDarkMode 
                                                        ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600' 
                                                        : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'
                                                }`} 
                                                type="email" 
                                                placeholder="your.email@example.com" 
                                                aria-label="enter your email input"
                                                required
                                            />
                                        </div>
                                        
                                        {/* Message Field */}
                                        <div className="mt-4 md:mt-8">
                                            <label className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                                Message *
                                            </label>
                                            <textarea 
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`mt-3 text-base border-2 w-full resize-none hover:border-blue-500 focus:border-blue-500 focus:outline-none rounded-lg h-32 py-3 px-4 transition-colors duration-300 ${
                                                    isDarkMode 
                                                        ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600' 
                                                        : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'
                                                }`} 
                                                placeholder="Tell us about your inquiry, special requests, or how we can help make your stay perfect..."
                                                aria-label="enter your message input"
                                                required
                                            ></textarea>
                                        </div>
                                        
                                        {/* Submit Button */}
                                        <div className="py-6">
                                            <button 
                                                type="submit"
                                                className="w-full sm:w-auto py-3 md:py-4 px-8 md:px-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;