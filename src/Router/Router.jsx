import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/Notfound";
import Aboutus from "../Pages/Home/AboutUs/Aboutus";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import RoomList from "../Pages/Rooms/RoomList";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },

        {
            path: '/login',
            element: <Login></Login>
        },
        {

            path: '/register',
            element: <Register></Register>
        },

        {
          path: '/about-us',
          element:<Aboutus></Aboutus>
        },
        {
          path: '/contact-us',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/rooms',
          element: <RoomList></RoomList>
        },
        {
          path: '/room-details/:roomId',
          element: <RoomDetails />
        },
        {
          path: '/mybookings',
          element: <MyBookings />
        }
        

      ]
    },
  ]);



  export default router;