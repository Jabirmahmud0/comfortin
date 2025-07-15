import { useDarkMode } from "../../../Contexts/DarkModeContext";

const AboutUs = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
    <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className={`text-3xl lg:text-4xl font-bold leading-9 pb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>About Us</h1>
            <p className={`font-normal text-base leading-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12">
            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
    </div>

    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className={`text-3xl lg:text-4xl font-bold leading-9 pb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Our Story</h1>
            <p className={`font-normal text-base leading-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12">
            <div className={`grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                    <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                    <p className={`font-medium text-xl leading-5 mt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                    <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                    <p className={`font-medium text-xl leading-5 mt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                    <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                    <p className={`font-medium text-xl leading-5 mt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                    <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                    <p className={`font-medium text-xl leading-5 mt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Elijah</p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutUs;