import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center">
          {/* <img src={Vector} className="h-4 w-4" alt="Elecar Logo" /> */}
          <Link to="/" className="self-center text-base font-medium ml-2 text-black
          ">HopefulGiving</Link>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900
       dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link to="/" className="block py-2 pl-3 pr-4 text-base hover:text-blue-900
             rounded md:bg-transparent text-black
            " aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="donation-list" className="block py-2 pl-3 pr-4 text-base hover:text-blue-900
             rounded md:bg-transparent text-gray-900
            " aria-current="page">Donation Needs</Link>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-base hover:text-blue-900
             rounded md:bg-transparent text-black
            " aria-current="page">Faq</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-base hover:text-blue-900
             rounded md:bg-transparent text-black
            " aria-current="page">About</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>

  )
}

export default Navbar