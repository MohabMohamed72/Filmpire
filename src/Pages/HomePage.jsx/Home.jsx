import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FetchMoveieFromGenres } from '../../Store/MoviesSlice/AllMoveisFetch/GenresMoveis'
import { FetchMoveieFromCategoreis } from '../../Store/MoviesSlice/AllMoveisFetch/CategoriesMoveis'
import Gallery from '../../Components/Gallery/Gallery'
import BigCard from '../../Components/Gallery/BigCard' 
import Buttons from '../../Components/Buttons/Buttons'
import { FetchRequestToken } from '../../Store/MoviesSlice/Login/Login'
// import { B} from "react-awesome-loaders"


const Home = () => {

    const {id} = useParams()
    // !isNaN(id) true if number
    // !isNaN(id) false if string

    const CategoreisMoveis = useSelector(state=>state.GetAllMoveiCategoreis)
    const GenressMoveis = useSelector(state=>state.GetAllMoveiGenres)
    const Search = useSelector(state => state.MoveisSearch)

    const PageNumber = useSelector(state => state.ButtonsHandel)
    const dark = useSelector(state => state.DrakMode)

    

    const [PageMovei , setPageMoveis] = useState([]) 

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
            if(!isNaN(id)){
                dispatch(FetchMoveieFromGenres({categ:id , PageNumber:PageNumber}))
            }else{
                dispatch(FetchMoveieFromCategoreis({categ:id , PageNumber:PageNumber}))
            } 
    },[id ,PageNumber])

    useEffect(()=>{
        if(!isNaN(id)){
            setPageMoveis(GenressMoveis)
        }else{
            setPageMoveis(CategoreisMoveis)
        }
    },[GenressMoveis , CategoreisMoveis])

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
    let x=0;
  return (
    <>
        <div className={`${Dark? `bg-[#000000d5]`:`bg-white`} scroll-smooth px-10 h-[90vh] overflow-auto `} ref={overflowRef}>
                <div className='grid   ml-auto mr-auto gap-1 mt-10 w-full transition-all duration-700  xl:grid-cols-6 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3   '>
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

export default Home