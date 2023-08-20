import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Context/AddToCart/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  // <GlobalContext.Provider value= {{contextDate}}>
  <CartContextProvider>
    <React.StrictMode>
      <BrowserRouter> <App /> </BrowserRouter>
    </React.StrictMode>,
  </CartContextProvider>
  // </GlobalContext.Provider>
)