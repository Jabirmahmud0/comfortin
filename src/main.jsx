import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'


AOS.init();

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import { DarkModeProvider } from './Contexts/DarkModeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
