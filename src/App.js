import React from 'react'
import Movies from './component/Movies'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Movies/>
      <Footer/>
    </div>
  )
}

export default App