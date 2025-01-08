import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { FetchMoveiSearch } from '../../Store/MoviesSlice/SerachMoveis/MoveisSearch';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Imgs } from '../../assets/genres';
import { FetchAllGenres } from '../../Store/MoviesSlice/MoveiGeners/AllGeners';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ToggelDark } from '../../Store/MoviesSlice/DrakMode/DrakMode';
import { FetchRequestToken } from '../../Store/MoviesSlice/Login/Login';
import Sidebar from '../Sidebar/Sidebar';





const Navbar = () => {

  const Categoreis = [{title : 'Popular' , value :'popular'} , {title : 'Top Rated' , value :'top_rated'} , {title : 'Upcoming' , value :'upcoming'}]

  const Search = useSelector(state => state.MoveisSearch)
  const dark = useSelector(state => state.DrakMode)
  const AllGenres = useSelector(state =>state.GetAllGenres)
  const RequestTocken = useSelector(state => state.GetRequestToken)
  const SearchVisable = useSelector(state => state.SearchVisablilty)

  const [SidebarVisabilty ,setSidebarVisabilty] = useState(false)

  const dispatch = useDispatch()
      
    useEffect(()=>{
      dispatch(FetchAllGenres())
      dispatch(FetchRequestToken())

    },[])
    
  

let x = 0;
let y = 18;

  return (
    <div className={`${(dark)? `bg-[#000000d5] `:`bg-[#1976d2] shadow-xl`}   shadow-xl shadow-slate-400 max-h-[80px] sticky w-full  transition-all duration-700 z-[1000] `}>
      <div className='w-full h-full relative flex justify-between items-center px-5 py-2 max-sm:px-1'>
          <MdDarkMode  className={`${dark? `text-red-600`:`text-white`} size-6 max-sm:mr-3  cursor-pointer `} onClick={()=>{dispatch(ToggelDark())}}/>
          <div className={`${SearchVisable? `block`:`hidden`} relative  ml-auto mr-auto `}>
            <CiSearch className='absolute top-1/2 -translate-y-1/2 size-6 right-[0px] text-white' />
            <input type="text"  className=' transition-all duration-700 border-b-2 focus:border-orange-400 text-white text-[20px] px-10 max-sm:px-0 py-1  bg-transparent focus:outline-none' onChange={(e)=>{
              dispatch(FetchMoveiSearch(e.target.value))
            }}/>
          </div>
          <div className='flex items-center gap-3 cursor-pointer' onClick={()=>{
            window.open(`https://www.themoviedb.org/authenticate/${RequestTocken.request_token}?redirect_to=http://www.yourapp.com/approved` , '_blank')
          }} >
            <p className='text-[12px] text-white font-[500] max-sm:hidden'>LOGIN</p>
            <IoMdPerson className='max-w-10 text-white cursor-pointer max-sm:hidden'/>
          </div> 
          <div className='hidden max-md:block max-md:ml-3'>
            <FaBars className='size-5 text-white cursor-pointer ' onClick={()=>{setSidebarVisabilty(!SidebarVisabilty)}}/>
          </div>
      </div>


      <div className={`${(SidebarVisabilty)? `block` : `hidden` } transition-all duration-700`}>
        <div className='absolute top-0 left-0 transition-all duration-700 ' onClick={()=>{
          setSidebarVisabilty(false)
        }}>
          <Sidebar />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
