import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Use RouterProvider
import "./i18n.js"; // Internationalization
import { I18nextProvider } from "react-i18next"; // If you're using i18next
import "./index.css";
import "@cdssnc/gcds-components-react/gcds.css";
import reportWebVitals from './reportWebVitals';
import Layout from './Layout/Layout.jsx';
import Sample from './Pages/Sample/Sample.jsx';
import Home from './Pages/Home/Home.jsx';

// Create the router
const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout />, // Main layout for all routes
      children: [
          {
              index: true, // This sets it as the default child route
              element: <Home />, // Home route rendering Sample
          },
          {
              path: 'sample', // Nested route without leading slash
              element: <Sample />, // Sample route
          },
      ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("react-root"));

root.render(
  <React.StrictMode>
    <I18nextProvider>
      <RouterProvider router={router} /> {/* Use RouterProvider instead of Router */}
    </I18nextProvider>
  </React.StrictMode>
);

// Report web vitals
reportWebVitals();
