import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { useDarkMode } from '../../Contexts/DarkModeContext';
import useAuth from '../../Components/Hooks/useAuth';
import Swal from 'sweetalert2';

const RoomDetails = () => {
    const [room, setRoom] = useState(null);
    const { roomId } = useParams();
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const { isDarkMode } = useDarkMode();
    const { user } = useAuth();

    useEffect(() => {
        fetchRoomDetails();
    }, [roomId]); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchRoomDetails = () => {
        try {
            // Get rooms from localStorage
            const storedRooms = localStorage.getItem('rooms');
            if (storedRooms) {
                const roomsData = JSON.parse(storedRooms);
                const foundRoom = roomsData.find(r => r.id === parseInt(roomId));
                if (foundRoom) {
                    setRoom(foundRoom);
                } else {
                    // If specific room not found, show first room as fallback
                    setRoom(roomsData[0]);
                }
            } else {
                // Initialize sample rooms if none exist
                const sampleRooms = [
                    {
                        id: 1,
                        RoomTitle: "Deluxe Ocean View Suite",
                        RoomImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=300&fit=crop",
                        PricePerNight: 250,
                        RoomSize: "45 sqm",
                        Availability: "Available",
                        RoomDescription: "Luxurious suite with breathtaking ocean views, king-size bed, and modern amenities.",
                        SpecialOffer: "Free breakfast and spa access"
                    },
                    {
                        id: 2,
                        RoomTitle: "Executive Business Room",
                        RoomImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=300&fit=crop",
                        PricePerNight: 180,
                        RoomSize: "35 sqm",
                        Availability: "Available",
                        RoomDescription: "Perfect for business travelers with work desk, high-speed WiFi, and premium bedding.",
                        SpecialOffer: "Free WiFi and business center access"
                    }
                ];
                localStorage.setItem('rooms', JSON.stringify(sampleRooms));
                const foundRoom = sampleRooms.find(r => r.id === parseInt(roomId));
                setRoom(foundRoom || sampleRooms[0]);
            }
        } catch (error) {
            console.error('Error fetching room details:', error);
        }
    };

    const handleBooking = () => {
        if (!user) {
            Swal.fire({
                title: 'Authentication Required',
                text: 'Please log in to book a room.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Go to Login',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Pass the current location as state so we can redirect back after login
                    navigate('/login', { state: { from: location.pathname } });
                }
            });
            return;
        }

        // Create booking
        const booking = {
            id: Date.now(),
            roomId: room.id,
            roomTitle: room.RoomTitle,
            roomImage: room.RoomImage,
            pricePerNight: room.PricePerNight,
            checkIn: new Date().toISOString().split('T')[0], // Today's date as default
            checkOut: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Tomorrow as default
            guests: 1, // Default number of guests
            totalPrice: room.PricePerNight, // For one night
            bookingDate: new Date().toISOString().split('T')[0],
            userEmail: user.email,
            userName: user.displayName || user.email
        };

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem(`bookings_${user.email}`) || '[]');
        existingBookings.push(booking);
        localStorage.setItem(`bookings_${user.email}`, JSON.stringify(existingBookings));

        Swal.fire({
            title: 'Booking Successful!',
            text: `You have successfully booked ${room.RoomTitle}`,
            icon: 'success',
            confirmButtonText: 'View My Bookings'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/mybookings');
            }
        });
    };

    if (!room) {
        return <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading...</div>; // Render loading state while fetching data
    }

    return (
        <div className={`min-h-screen px-4 lg:px-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="py-12">
                <div className="relative overflow-hidden rounded-2xl">
                    <img src={room.RoomImage} alt={room.RoomTitle} className="w-full h-64 lg:h-96 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                        <div className="p-6 text-white">
                            <h1 className="text-2xl lg:text-4xl font-bold">{room.RoomTitle}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Room Details</h2>
                <div className={`shadow-2xl rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-[#CDE8E5]'}`}>
                    <div className="p-6 lg:p-8">
                        <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{room.RoomTitle}</h3>
                        <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{room.RoomDescription}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <span className='font-medium text-lg'>Price per Night:</span>
                                </p>
                                <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                                    ${room.PricePerNight}
                                </p>
                            </div>
                            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <span className='font-medium text-lg'>Room Size:</span>
                                </p>
                                <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {room.RoomSize}
                                </p>
                            </div>
                            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <span className='font-medium text-lg'>Availability:</span>
                                </p>
                                <p className={`text-xl font-semibold ${room.Availability === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                                    {room.Availability}
                                </p>
                            </div>
                            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <span className='font-medium text-lg'>Special Offer:</span>
                                </p>
                                <p className={`text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {room.SpecialOffer || 'No special offer'}
                                </p>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleBooking} 
                            className={`w-full lg:w-auto px-8 py-3 rounded-lg font-bold text-lg transition-colors focus:outline-none focus:shadow-outline ${
                                isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#4D869C] text-white hover:bg-[#3a6b7a]'
                            }`}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
