import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carrinho from './components/Carrinho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col'>
     <Header/>
      <main className='h-full'>
      <Carrinho/>
      </main>
     <Footer/>
      </div>
  )
}

export default App
