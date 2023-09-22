import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

// 1 - Configurando router

import{ createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contato from './routes/Contato';
import Sobre from './routes/Sobre';
import Carrinho from './routes/Carrinho';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: 'Contato',
    element: <Contato/>
  },
  {
    path: 'Sobre',
    element: <Sobre/>
  },
  {
    path: 'Carrinho',
    element: <Carrinho/>
  }
]);
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: 'Contato',
//         element: <Contato/>
//       },
//       {
//         path: 'Sobre',
//         element: <Sobre/>
//       }
//     ]
//   },
  
// ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
