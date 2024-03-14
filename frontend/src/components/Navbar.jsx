import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <>
      <header className='flex justify-between sticky top-0 p-4 bg-gray-800 shadow-sm items-center'>
        <h1 className='text-white cursor-pointer uppercase font-medium'>
          <Link style={{fontFamily:"sans-serif",fontSize:"1.5rem"}} to="/"> Task Manager </Link>
          <p style={{fontFamily:"cursive",fontSize:"11px"}}  class=" mx-2 text-white no-underline ...">Create | Read | Update | <c className="line-through">Delete</c></p>
        
        </h1>
        
        
       

        <ul className='hidden md:flex gap-4 uppercase font-medium'>
          {authState.isLoggedIn ? (
            <>
              <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
                <Link to='/tasks/add' className='block w-full h-full px-4 py-2'> <i className="fa-solid fa-plus"></i> Add task </Link>
              </li>
              <li className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={handleLogoutClick}>Logout</li>
            </>
          ) : (
            <li className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'><Link to="/login">Login</Link></li>
          )}
        </ul>
        <span className='md:hidden cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>


        {/* Navbar displayed as sidebar on smaller screens */}
        <div className={`absolute md:hidden right-0 top-0 bottom-0 transition ${(isNavbarOpen === true) ? 'translate-x-0' : 'translate-x-full'} bg-gray-100 shadow-md w-screen sm:w-9/12 h-screen`}>
          <div className='flex'>
            <span className='m-4 ml-auto cursor-pointer' onClick={toggleNavbar}><i className="bg-white fa-solid fa-xmark"></i></span>
          </div>
          <ul className='flex flex-col gap-4 uppercase font-medium text-center'>
            {authState.isLoggedIn ? (
              <>
                <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium transition py-2 px-3">
                  <Link to='/tasks/add' className='block w-full h-full'> <i className="fa-solid fa-plus"></i> Add task </Link>
                </li>
                <li className='py-2 px-3 cursor-pointer hover:bg-white-200 transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
              </>
            ) : (
              <li className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'><Link to="/login">Login</Link></li>
              )}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar