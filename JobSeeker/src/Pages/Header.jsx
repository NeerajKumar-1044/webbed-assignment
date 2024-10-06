import React from 'react'

function Header() {
  return (
    <nav className="bg-gray-900 border-gray-200">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-white">FindJobs</span>
        </a>
      
        <div className="flex md:order-2">

          <div className="relative hidden md:block">
            
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>


            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-400 border border-gray-500 rounded-3xl bg-gray-800" placeholder="search for jobs..."/>
          </div>
          <button type="button" id='search-navbar' className="inline-flex items-center px-2 mx-2 h-9 justify-center text-sm rounded-2xl text-gray-400 bg-gray-800 border border-gray-500">
            <span className="">Search</span>
          </button>

        </div>

        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
        
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="/Jobs" className="block py-2 px-3 text-gray-400 rounded bg-gray-900 md:hover:text-blue-700 md:p-0 ">Jobs</a>
            </li>
            <li>
              <a href="/" className="block py-2 px-3 text-white rounded bg-gray-900 md:hover:text-blue-700 md:p-0 ">Analysis</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-400 rounded bg-gray-900 md:hover:text-blue-700 md:p-0">Internships</a>
            </li>
          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Header
