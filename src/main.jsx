import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './HomePage'
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage'
import SkillsPage from './SkillsPage'
import RetoPage from './RetoPage'
import '/src/styles/css/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProjectsPage",
    element: <ProjectsPage />,
  },
  {
    path: "/ExperiencePage",
    element: <ExperiencePage />,
  },
  {
    path: "/SkillsPage",
    element: <SkillsPage />,
  },
  {
    path: "/RetoPage",
    element: <RetoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)