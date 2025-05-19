import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './src/context/ProductsContext.jsx'
import { CartProvider } from './src/context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductsProvider>
  </StrictMode>,
)
