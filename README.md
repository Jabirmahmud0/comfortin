# 🏨 Comfort Inn - Hotel Booking Application

A modern, responsive hotel booking web application built with React, featuring dark mode, user authentication, and a seamless booking experience.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.2.0-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-teal.svg)
![Firebase](https://img.shields.io/badge/Firebase-10.11.1-orange.svg)

## 🌟 Features

### 🎨 User Interface
- **Modern Design**: Clean, responsive UI built with TailwindCSS and DaisyUI
- **Dark Mode**: Complete dark/light theme toggle with persistent preferences
- **Mobile Responsive**: Fully optimized for all device sizes
- **Smooth Animations**: Enhanced user experience with AOS animations
- **Interactive Navigation**: Bright active states with visual feedback

### 🔐 Authentication
- **Firebase Auth**: Secure user authentication system
- **Social Login**: Google authentication integration
- **User Profiles**: Profile management with avatar display
- **Protected Routes**: Secure booking and profile pages

### 🏨 Hotel Features
- **Room Listings**: Browse available rooms with detailed information
- **Room Details**: Comprehensive room information with image galleries
- **Booking System**: Complete booking flow with date selection
- **My Bookings**: Personal booking management dashboard

### 🗺️ Interactive Elements
- **Maps Integration**: Location display with React Leaflet
- **Contact Forms**: Interactive contact and inquiry forms
- **Search Functionality**: Find rooms and amenities easily

## 🚀 Live Demo

**Live Website**: [Comfort Inn on Vercel](https://your-vercel-url.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and context
- **Vite 5.2.0** - Lightning-fast build tool and dev server
- **React Router DOM 6.23.0** - Client-side routing with nested routes

### Styling & UI
- **TailwindCSS 3.4.3** - Utility-first CSS framework
- **DaisyUI 4.11.1** - Beautiful component library
- **React Icons 5.2.1** - Comprehensive icon library
- **AOS 2.3.4** - Animate On Scroll library

### Backend & Services
- **Firebase 10.11.1** - Authentication and backend services
- **Vercel** - Deployment and hosting platform

### Additional Libraries
- **React Leaflet 4.2.1** - Interactive maps
- **SweetAlert2 11.10.8** - Beautiful alert modals
- **LocalForage 1.10.0** - Enhanced local storage

## 📁 Project Structure

```
comfort-inn/
├── public/
│   ├── banner.mp4          # Hero section video
│   ├── img/
│   │   ├── logo.png        # Brand logo
│   │   └── map.jpg         # Location map
│   └── vite.svg
├── src/
│   ├── Components/
│   │   └── Hooks/
│   │       └── useAuth.jsx # Authentication hook
│   ├── Contexts/
│   │   └── DarkModeContext.jsx # Dark mode context
│   ├── Firebase/
│   │   └── firebase.config.js # Firebase configuration
│   ├── FirebaseProvider/
│   │   └── FirebaseProvider.jsx # Auth context provider
│   ├── Layout/
│   │   └── Main.jsx        # Main layout component
│   ├── Pages/
│   │   ├── Footer/         # Footer component
│   │   ├── Home/           # Homepage sections
│   │   │   ├── AboutUs/
│   │   │   ├── ContactUs/
│   │   │   └── Home/
│   │   ├── Login/          # Authentication pages
│   │   ├── Navbar/         # Navigation component
│   │   ├── NotFound/       # 404 error page
│   │   ├── Register/       # User registration
│   │   └── Rooms/          # Room listing and details
│   ├── Router/
│   │   └── Router.jsx      # Application routing
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Key Features Breakdown

### 🌙 Advanced Dark Mode
- **Context-based State Management** - Global dark mode state
- **Persistent Preferences** - Remembers user choice across sessions
- **Component-level Theming** - Every component adapts to theme
- **High Contrast Active States** - Enhanced visibility in dark mode

### 🧭 Smart Navigation
- **Active Route Highlighting** - Visual feedback for current page
- **Mobile-first Design** - Responsive hamburger menu
- **Smooth Transitions** - Animated state changes
- **Accessibility Features** - ARIA labels and keyboard navigation

### 🔥 Firebase Integration
- **Authentication Flow** - Complete login/logout system
- **User State Management** - Real-time auth state updates
- **Error Handling** - Graceful error messages
- **Security Rules** - Protected routes and data

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jaabir-Mahmud/comfort-inn.git
   cd comfort-inn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Google provider
   - Copy your Firebase config to `src/Firebase/firebase.config.js`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

### Environment Variables
Create a `.env.local` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero section |
| `/rooms` | RoomList | Browse available rooms |
| `/room-details/:id` | RoomDetails | Detailed room information |
| `/mybookings` | MyBookings | User's booking history |
| `/about-us` | AboutUs | Company information |
| `/contact-us` | ContactUs | Contact form and details |
| `/login` | Login | User authentication |
| `/register` | Register | User registration |

## 🎨 Design Features

### Color Scheme
- **Light Mode**: Soft teal and blue accents (`#CDE8E5`)
- **Dark Mode**: Dark gray with cyan highlights (`#gray-800`)
- **Active States**: Bright cyan/yellow for maximum visibility
- **Semantic Colors**: Red for actions, blue for links

### Typography
- **Font Stack**: System fonts for optimal performance
- **Hierarchy**: Clear heading and body text distinction
- **Responsive Sizes**: Adaptive font sizes across devices

### Components
- **Reusable Cards**: Consistent room and feature cards
- **Form Elements**: Styled inputs with validation
- **Buttons**: Multiple variants with hover states
- **Navigation**: Responsive navbar with mobile menu

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📦 Dependencies Overview

### Core React
- `react` & `react-dom` - Core React library
- `react-router-dom` - Client-side routing
- `react-icons` - Icon components

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `daisyui` - Component library
- `aos` - Scroll animations

### Backend & Data
- `firebase` - Authentication and backend
- `localforage` - Enhanced localStorage
- `sweetalert2` - Modal alerts

### Maps & Location
- `leaflet` & `react-leaflet` - Interactive maps

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds on push

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Configure routing for SPA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jaabir Mahmud**
- GitHub: [@Jaabir-Mahmud](https://github.com/Jaabir-Mahmud)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [DaisyUI](https://daisyui.com/)
- [Vite](https://vitejs.dev/)

---

⭐ **Star this repository if you found it helpful!**
