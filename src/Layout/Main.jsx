import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import { useDarkMode } from "../Contexts/DarkModeContext";


const Main = () => {
    const { isDarkMode } = useDarkMode();
    
    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;