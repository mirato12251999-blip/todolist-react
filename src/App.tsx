import { useState } from 'react'
import { Header } from './components/layout/header/header'
import { Footer } from './components/layout/footer/foot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
