import { useState } from 'react'
import { Header } from './components/layout/header/header'
import { Footer } from './components/layout/footer/foot'
import { Section } from './components/layout/section/section'
// import { Task } from './components/task/task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  )
}

export default App
