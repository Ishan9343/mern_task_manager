import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';
import "../styling/style.css";

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout  >
        {!isLoggedIn ? (
          
          <div className='bg-purple-100 text-dark h-[50vh] py-20 text-center flex flex-col justify-center items-center '>
             <img className="m-10  w-16 md:w-32 lg:w-48" style={{borderRadius:"200rem",width:"8rem",margin:"2rem"}} src="images/tick.jpg"></img>
           
            <h1 className="mb-5 text-center sm:text-left" style={{fontFamily:"roboto",fontSize:"4rem"}}><b>Organize Your work, finally!</b></h1>
            <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
              <span className='py-2 px-3 cursor-pointer hover:bg-purple-100 transition rounded-sm transition-[margin]'>Start Now</span>
                
             
              <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
          
          
        ) : (
          <>
            <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Hello, <b>{authState.user.name} </b> <i className="fa-solid fa-hand"></i></h1>
            
            <Tasks />

          
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home