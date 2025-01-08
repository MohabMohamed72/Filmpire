import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoEarthOutline } from 'react-icons/io5'
import { MdExposurePlus1, MdFavoriteBorder } from 'react-icons/md'
import { PiVideoDuotone } from 'react-icons/pi'
import { TfiVideoClapper } from 'react-icons/tfi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const MoveiFeatures = (props) => {

  const dispatch = useDispatch()
  const dark = useSelector(state => state.DrakMode)



  return (

    <div className='w-full msx-sm:flex-wrap max-xl:justify-center max-xl:gap-3 flex justify-between mt-10 max-sm:mt-6  max-sm:gap-5 max-sm:ml-auto max-sm:mr-auto max-sm:items-start'>

      <div className={`${dark? `border-white`:`border-blue-200 `} flex  border-[1px] border-blue-200  `}>

          <div className=' hover:bg-blue-100  flex items-center gap-2 cursor-pointer p-1 px-3' onClick={()=>{window.open(`${props.homepage}`, '_blank')}}>
            <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`}>Website</p>
            <IoEarthOutline className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>
          </div >

        
          <div className={`${dark?`border-white`:` border-blue-200 `}  hover:bg-blue-100  p-1 px-3 border-r-[1px] border-l-[1px] flex items-center gap-2 cursor-pointer `}onClick={()=>{window.open( `https://www.imdb.com/title/${props.imdbId}`, '_blank')}}>
            <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`}>IMDB</p> 
            <TfiVideoClapper className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>

          </div>
        
          <div className=' hover:bg-blue-100 border-blue-200  flex items-center gap-2  p-1 px-3 cursor-pointer' onClick={()=>{window.open(`https://www.youtube.com/embed/${props.Video}`)}}>
            <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`}> TRAILER</p>
            <PiVideoDuotone className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>
          </div>
      </div>


    <div className={`${dark? `border-white`:`border-blue-200 `} flex  border-[1px] border-blue-200 mr-5 `}>
      
      <div className=' flex items-center gap-2 cursor-pointer hover:bg-blue-100 p-1 px-3 ' >
        <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`}>FAVORITE</p>
        <MdFavoriteBorder className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>
      </div >

      <div className={`${dark?`border-white`:` border-blue-200 `} hover:bg-blue-100 border-r-[1px] border-l-[1px] p-1 px-3 flex items-center gap-2 cursor-pointer `} onClick={()=>{
      }}>
        <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`} >WATCHLIST</p> 
        <MdExposurePlus1 className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>

      </div>
      <Link to={`/${props.id}`}><div className=' hover:bg-blue-100 border-blue-400  flex items-center gap-2  p-1 px-3  cursor-pointer'>
        <p className={`${dark? `text-white`:`text-blue-600`} font-[500] text-[12px]`}> BACK</p>
        <IoIosArrowRoundBack  className={`${dark? `text-white`:`text-blue-600 `} size-5`}/>
      </div></Link>
    </div>
  </div>
  )
}

export default MoveiFeatures