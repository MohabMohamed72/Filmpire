import React, { useEffect, useRef } from 'react'
import Rateing from './Rateing'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Gallery = (props) => {

    const dark = useSelector(state => state.DrakMode)
    const dispatch =useDispatch()

    return(
        <div className="grid gap-4 ml-auto mr-auto mt-10">
        <>
                { 
                    <div className="grid col-span-6 gap-2  w-full transition-all duration-700  2xl:col-span-6 max-sm:col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4" >
                        <Link to={`/${props.Mainid}/${props.Moveiid}`}>
                            <div className='transition-all duration-700   overflow-hidden hover:scale-125 cursor-pointer  ' > 
                                <img className={`${dark? `text-white`:`text-black`} w-[200px] h-[300px] rounded-xl ml-auto mr-auto `} src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="MoveiPoster" />
                                <div className=' overflow-hidden max-sm:w-full'>
                                    <p className={`${dark?` text-white`:` text-[#000000bc]`} text-center mt-4 text-[17px]  font-[500]`}>{props.title}</p>
                                </div>
                                <div className='w-full ml-auto mr-auto flex justify-center '>
                                    <Rateing rateing = {props.rate} size={5}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
                </>
         </div>
    )
}

export default Gallery