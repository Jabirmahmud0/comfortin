import { useState, useEffect } from 'react';
import { useDarkMode } from '../../Contexts/DarkModeContext';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        // Initialize sample rooms if none exist
        const initializeRooms = () => {
            const existingRooms = localStorage.getItem('rooms');
            if (!existingRooms) {
                const sampleRooms = [
                    {
                        id: 1,
                        RoomTitle: "Deluxe Ocean View Suite",
                        RoomImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=300&fit=crop",
                        PricePerNight: 250,
                        RoomSize: "45 sqm",
                        Availability: "Available",
                        RoomDescription: "Luxurious suite with breathtaking ocean views, king-size bed, and modern amenities."
                    },
                    {
                        id: 2,
                        RoomTitle: "Executive Business Room",
                        RoomImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=300&fit=crop",
                        PricePerNight: 180,
                        RoomSize: "35 sqm",
                        Availability: "Available",
                        RoomDescription: "Perfect for business travelers with work desk, high-speed WiFi, and premium bedding."
                    },
                    {
                        id: 3,
                        RoomTitle: "Family Suite",
                        RoomImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop",
                        PricePerNight: 320,
                        RoomSize: "65 sqm",
                        Availability: "Available",
                        RoomDescription: "Spacious family suite with separate living area, two bedrooms, and kitchenette."
                    },
                    {
                        id: 4,
                        RoomTitle: "Standard Double Room",
                        RoomImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
                        PricePerNight: 120,
                        RoomSize: "25 sqm",
                        Availability: "Available",
                        RoomDescription: "Comfortable room with queen-size bed, modern bathroom, and city view."
                    },
                    {
                        id: 5,
                        RoomTitle: "Presidential Suite",
                        RoomImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop",
                        PricePerNight: 500,
                        RoomSize: "100 sqm",
                        Availability: "Available",
                        RoomDescription: "Ultimate luxury with private balcony, jacuzzi, personal butler service, and panoramic views."
                    },
                    {
                        id: 6,
                        RoomTitle: "Cozy Single Room",
                        RoomImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
                        PricePerNight: 80,
                        RoomSize: "20 sqm",
                        Availability: "Available",
                        RoomDescription: "Perfect for solo travelers with single bed, workspace, and all essential amenities."
                    }
                ];
                localStorage.setItem('rooms', JSON.stringify(sampleRooms));
            }
        };

        initializeRooms();
        fetchRooms();
    }, [minPrice, maxPrice]);

    const fetchRooms = () => {
        try {
            const storedRooms = localStorage.getItem('rooms');
            if (storedRooms) {
                const roomsData = JSON.parse(storedRooms);
                console.log('Received data:', roomsData);
                
                const filteredRooms = roomsData.filter(room => {
                    const price = room.PricePerNight;
                    return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
                });
                setRooms(filteredRooms);
            }
        } catch (error) {
            console.error('Error fetching room data:', error);
        }
    };

    const handleFilterChange = () => {
        fetchRooms();
    };

    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-center items-center my-4">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 border rounded-lg ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 border rounded-lg ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                />
                <button
                    onClick={handleFilterChange}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        isDarkMode
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    Filter
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {rooms.map((room) => (
                    <div key={room.id} className={`border rounded-lg shadow-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                        <img src={room.RoomImage} alt={room.RoomTitle} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {room.RoomTitle}
                            </h3>
                            <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {room.RoomDescription}
                            </p>
                            <div className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <p>Size: {room.RoomSize}</p>
                                <p>Status: {room.Availability}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                                    ${room.PricePerNight}/night
                                </span>
                                <a href={`/room-details/${room.id}`}>
                                    <button className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                                        isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#4D869C] text-white hover:bg-blue-700'
                                    }`}>
                                        Book Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomList;
