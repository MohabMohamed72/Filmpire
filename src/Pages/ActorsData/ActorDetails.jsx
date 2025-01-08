import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FetchActorDetails } from '../../Store/MoviesSlice/ActroDetails/ActorsDetails'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { FetchActorMoveis } from '../../Store/MoviesSlice/ActorsMoveis/ActorMovei'
import Gallery from '../../Components/Gallery/Gallery'
import Buttons from '../../Components/Buttons/Buttons'

const ActorDetails = () => {

    const {id, movei_id, actor_id} = useParams()

    const AllActorDetails = useSelector(state=>state.GetActorDetails)
    const ActorsMoveis = useSelector(state=>state.GetActorMoveis)
    const PageNumber = useSelector(state => state.ButtonsHandel)
    const dark = useSelector(state => state.DrakMode)
    const dispatch = useDispatch()
    
    const [Dark ,setDark] =useState(false)
    useEffect(()=>{
        window.localStorage.setItem('DrakMode' ,dark);
        if( window.localStorage.getItem('DrakMode') === 'true'){
               
            setDark(true)
        }
        else{
            setDark(false)

        }
    },[dark])

    useEffect(()=>{
          dispatch(FetchActorDetails(actor_id));
          dispatch(FetchActorMoveis(actor_id ));
    },[actor_id ])

    const overflowRef = useRef(null);

     const scrollToTop = () => {
       if (overflowRef.current) {
         overflowRef.current.scrollTop = 0; 
       }
     };


  return (
    <div className={`${Dark? `bg-[#000000d5]`:`bg-white`} scroll-smooth h-[90vh] overflow-auto  transition-all duration-700 max-sm:px-10 `}>
        <div className=' flex gap-10 mt-3 max-xl:flex-col max-xl:items-center max-sm:ml-0 max-sm:p-3'>
            <div className='w-full p-5 ml-auto mr-auto'>
                <img src={`https://image.tmdb.org/t/p/w500${AllActorDetails?.profile_path}`} alt="" className={`${Dark? `drop-shadow-sm shadow-white`:`shadow-black`} rounded-2xl shadow-2xl shadow-black h-[550px] max-sm:h-[400px] max-xl:ml-auto max-xl:mr-auto  `} />
            </div>
                    <div className=' xl:mr-14 max-sm:mt-2 max-xl:px-5 mt-auto mb-auto'>
                        <div className='flex flex-col  '>
                            <h1 className={`${Dark? `text-white`:`text-black`} text-[30px] font-[400] max-sm:text-center mb-1`}>{AllActorDetails.name}</h1>
                            <p className={`${Dark? `text-white`:`text-black`}  text-[20px] font-[500] max-sm:text-center mb-1`}>Born: {AllActorDetails.birthday}</p>
                            <p className={`${Dark? `text-white`:`text-black`}  text-[12px] mt-1 w-[800px] max-xl:w-full 2xl:w-full text-justify`}>{AllActorDetails?.biography}</p>
                        </div>


                        <div className='w-full flex justify-around items-center mt-6'>
                            <button className={`${Dark? `bg-blue-400 text-black`:`bg-blue-500 text-white`}  text-[12px] font-[500] p-2 rounded-md hover:bg-blue-700  `} onClick={()=>{window.open(`https://www.imdb.com/name/${AllActorDetails?.imdb_id}` , '_blank')}}>IMDB</button>
                            <Link to={`/${id}/${movei_id}`}>
                            <div className=' p-3 flex gap-2 items-center justify-center hover:bg-blue-50'>
                            <IoIosArrowRoundBack className={`${Dark? `text-white`:`text-blue-600 `} size-4`} />
                            <p className={`${Dark? `text-white`:`text-blue-600`}  text-[15px] `}>Back</p>
                            </div></Link>
                        </div>
                    </div>
        </div>

        <div className='mt-20 max-sm:mt-6'>
            <h1 className={`${Dark? `text-white`:`text-black`} text-center text-[25px] font-[500] `}>More About {AllActorDetails.name}</h1>
        </div>

        <div className='grid ml-auto max-sm:mt-1 mr-auto gap-1 mt-10 w-full transition-all duration-700  xl:grid-cols-6 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-14'>
            {
                ActorsMoveis.slice(PageNumber,PageNumber + 6).map((el)=>{
                    return(
                        <div onClick={scrollToTop()}> 
                            <Gallery Mainid={id} Moveiid={el.id} img ={el.poster_path} title={el.title} rate = {el.vote_average}  />
                        </div>
                    )
                })
            }
        </div>
        <Buttons />
    </div>
  )
}

export default ActorDetails