import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchMoveieFromCategoreis } from '../../Store/MoviesSlice/AllMoveisFetch/CategoriesMoveis'
import BigCard from '../../Components/Gallery/BigCard'
import Gallery from '../../Components/Gallery/Gallery'
import Buttons from '../../Components/Buttons/Buttons'
import { Visable } from '../../Store/MoviesSlice/SearchVisablity/SearchVisiabilty'

const EntryPage = () => {

    const id = 'popular'
    const CategoreisMoveis = useSelector(state=>state.GetAllMoveiCategoreis)
    const PageNumber = useSelector(state => state.ButtonsHandel)
    const [PageMovei , setPageMoveis] = useState([]) 
    const dark = useSelector(state => state.DrakMode)

    const dispatch = useDispatch()
 useEffect(()=>{
        dispatch(Visable())
    },[])

        useEffect(()=>{
            
        dispatch(FetchMoveieFromCategoreis({categ:'popular' , PageNumber:PageNumber}))
        
        },[PageNumber])
        const Search = useSelector(state => state.MoveisSearch)
    
        useEffect(()=>{
            setPageMoveis(CategoreisMoveis)
        },[ , CategoreisMoveis])

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
                    if(Search.length > 0){
                        setPageMoveis(Search)
                    }
                },[Search])
    const overflowRef = useRef(null);

     const scrollToTop = () => {
       if (overflowRef.current) {
         overflowRef.current.scrollTop = 0;
       }
     };
     let x= 0 ;
  return (
    <>
     <div className={`${Dark? `bg-[#000000d5]`:`bg-white`} scroll-smooth px-10 h-[90vh] overflow-auto`} ref={overflowRef}>
                <div className='grid ml-auto mr-auto gap-1 mt-10 w-full transition-all duration-700  xl:grid-cols-6 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3   '>
                {
                    PageMovei.slice(0,19).map((el)=>{
                        x++;
                        if(x === 1 && Search.length < 1){
                            return(
                            <BigCard Mainid={id} Moveiid={el.id} img={PageMovei[0]?.backdrop_path} title ={PageMovei[0]?.title} Discription ={PageMovei[0]?.overview}/>
                            )
                        }
                        else{

                            return(
                                <Gallery Mainid={id} Moveiid={el.id} x ={x} img ={el.poster_path} title={el.title} rate = {el.vote_average}  />
                            )
                        }
                    })
                }
                </div>
                <div onClick={scrollToTop()}>

                <Buttons />
                </div>
        </div>

    </>

  )
}

export default EntryPage