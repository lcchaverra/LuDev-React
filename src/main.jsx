import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProjectsPage",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />

        {/* 
        //Componente De "Educacion" 
        //Componente Para Experiencia
        //Componente de Tecnologias / Habilidades Tecnias
        //Componente de Contacto */}
        {/* <Formulario/> */}
        {/* <MainFooter/> */} 

  </React.StrictMode>,
)