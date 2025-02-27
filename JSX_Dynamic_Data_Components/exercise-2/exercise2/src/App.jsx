import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from "../components/Header.jsx"; 
import Main from "../components/Main.jsx"; 
import Footer from "../components/Footer.jsx"; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<p>Hello</p>*/}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
