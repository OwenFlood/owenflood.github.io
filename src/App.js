import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import './App.css';
import Header from './Header';
import NotFound from './NotFound'
import { AppProvider } from "./appContext";
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import ProjectScreen from './screens/Projects/Project';

const AppRoot = () => (
  <div className="App">
    <Header />

    <Outlet />
  </div>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about-me" replace />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectScreen />,
      },
    ],
  },
]);

const App = () => {
  const [carousel, setCarousel] = useState(1)

  return (
    <AppProvider value={{ carousel, setCarousel }}>
      <RouterProvider router={Router} />
    </AppProvider>
  );
}

export default App;
