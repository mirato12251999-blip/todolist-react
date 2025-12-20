import { useState } from 'react'
import { Header } from './components/layout/header/header'
import { Footer } from './components/layout/footer/foot'
import { Section } from './components/layout/section/section'
// import { Task } from './components/task/task'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleInsertClick = () => {
    console.log("Insert button clicked");
  }

  return (
    <>
      <Header onClickInsert={handleInsertClick} />
      <Section />
      <Footer />
    </>
  )
}

export default App
