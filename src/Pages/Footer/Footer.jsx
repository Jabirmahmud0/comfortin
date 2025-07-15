
import { useDarkMode } from "../../Contexts/DarkModeContext";

const Footer = () => {
    const { isDarkMode } = useDarkMode();
    
    return (
      <div>
        <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} mt-[36px] transition-colors duration-300`}>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2">
              <div
                className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16`}
              >
                <div className="mt-8 space-y-4 lg:mt-0">
                  <span className={`hidden h-1 w-10 rounded ${isDarkMode ? 'bg-teal-400' : 'bg-teal-500'} lg:block`}></span>
                  <div>
                    <h2 className={`text-2xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Request a Demo</h2>
                    <p className={`mt-4 max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum deserunt
                      nesciunt praesentium, repellendus eum perspiciatis ratione pariatur a aperiam eius
                      numquam doloribus asperiores sunt.
                    </p>
                  </div>
                  <form className="mt-6 w-full">
                    <label htmlFor="UserEmail" className="sr-only"> Email </label>
                    <div
                      className={`rounded-md border ${isDarkMode ? 'border-gray-600' : 'border-gray-100'} p-2 focus-within:ring sm:flex sm:items-center sm:gap-4`}
                    >
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className={`w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm ${
                          isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-400'
                        }`}
                      />
                      <button
                        className={`mt-1 w-full rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0 ${
                          isDarkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'
                        }`}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="py-8 lg:py-16 lg:pe-16">
                <div className={`hidden ${isDarkMode ? 'text-teal-400' : 'text-teal-600'} lg:block`}>
                  <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG paths... */}
                  </svg>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Services</p>
                    <ul className="mt-6 space-y-4 text-sm">
                      {["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"].map((service, idx) => (
                        <li key={idx}>
                          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:opacity-75'} transition`}>{service}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Company</p>
                    <ul className="mt-6 space-y-4 text-sm">
                      {["About", "Meet the Team", "Accounts Review"].map((item, idx) => (
                        <li key={idx}>
                          <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:opacity-75'} transition`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Helpful Links</p>
                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:opacity-75'} transition`}>Contact</a>
                      </li>
                      <li>
                        <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:opacity-75'} transition`}>FAQs</a>
                      </li>
                      <li>
                        <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:opacity-75'} transition`}>Live Chat</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`mt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} pt-8`}>
                  <ul className="flex flex-wrap gap-4 text-xs">
                    {["Terms & Conditions", "Privacy Policy", "Cookies"].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:opacity-75'} transition`}>{item}</a>
                      </li>
                    ))}
                  </ul>
                  <p className={`mt-8 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>&copy; 2025. ComfortInn. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;