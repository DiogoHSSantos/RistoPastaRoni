import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

// 1 - Configurando router

import{ createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sobre from './routes/Sobre';
import Carrinho from './routes/Carrinho';
import Contato from './routes/Contato';

const router = createBrowserRouter([
  {
    path: '/RistoPastaRoni',
    element: <App/>,
  },
  {
    path: '/RistoPastaRoni/Contato',
    element: <Contato/>
  },
  {
    path: '/RistoPastaRoni/Sobre',
    element: <Sobre/>
  },
  {
    path: '/RistoPastaRoni/Carrinho',
    element: <Carrinho/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
