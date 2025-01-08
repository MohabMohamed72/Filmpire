import React from 'react'
import { Link } from 'react-router-dom'

const BigCard = (props) => {
  return (
    <div className='w-full col-span-6 overflow-hidden rounded-md max-h-[500px] relative 2xl:col-span-6 max-sm:col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-6  max-sm:hidden' onClick={(e)=>{console.log(e)}}>
        <Link to={`/${props.Mainid}/${props.Moveiid}`}>
              <img className="w-full scale-[1]" src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="Filmpire Movie" />
             <div className='absolute w-full h-full  top-0 bg-[#00000086]' ></div>
              <div className='text-white absolute bottom-10 left-12 text-[25px]'>
              <h1 className=' p-1'>{props.title}</h1>
              <p className='text-[15px] p-1 max-w-2xl'>{props.Discription}</p>
              </div> 
        </Link>
    </div>
  )
}

export default BigCard


