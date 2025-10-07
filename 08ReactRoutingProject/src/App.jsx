import React from 'react'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <header className='bg-red-300'>
      <nav className=' max-w-[93%] mx-auto px-10 h-[17vh] items-center  flex justify-between '>
        <a href="#">
          Gr<span>O</span>cify
        </a>

        {/* desktop menu */}
        <ul className='flex '>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default App
