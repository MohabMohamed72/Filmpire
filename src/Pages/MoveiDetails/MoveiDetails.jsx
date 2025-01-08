import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { FetchMovieDetails } from '../../Store/MoviesSlice/MoveiDetails/AllMoveiDetails';
import Rateing from '../../Components/Gallery/Rateing';
import { FetchAllGenres } from '../../Store/MoviesSlice/MoveiGeners/AllGeners';
import { Imgs } from '../../assets/genres';
import { FetchMoveiCast } from '../../Store/MoviesSlice/AllCast/AllCast';
import MoveiFeatures from '../../Components/MoveiFeature/MoveiFeatures';
import { FetchMoveiVideos } from '../../Store/MoviesSlice/MoveiVideo/MoveiVedios';
import Gallery from '../../Components/Gallery/Gallery';
import { FetchMoveieFromGenres } from '../../Store/MoviesSlice/AllMoveisFetch/GenresMoveis';
import { FetchMoveieFromCategoreis } from '../../Store/MoviesSlice/AllMoveisFetch/CategoriesMoveis';
import Buttons from '../../Components/Buttons/Buttons';
// import {} from '../../assets/genres/index'


const MoveiDetails = () => {

    const {id , movei_id} = useParams();

    const Details = useSelector(state=>state.GetAllMoveiDetailss)
    const AllGenres = useSelector(state=>state.GetAllGenres)
    const AllCast = useSelector(state=>state.GetAllMoveiCast)
    const MoveiVideos = useSelector(state=>state.GetAllVideos)
    const CategoreisMoveis = useSelector(state=>state.GetAllMoveiCategoreis)
    const GenressMoveis = useSelector(state=>state.GetAllMoveiGenres)
    const PageNumber = useSelector(state => state.ButtonsHandel)
    const dark = useSelector(state => state.DrakMode)
    


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

    const [PageMovei , setPageMoveis] = useState([]) 
    
    useEffect(()=>{
        if(!isNaN(id)){
            dispatch(FetchMoveieFromGenres({categ:id , PageNumber:PageNumber}))
        }else{
            dispatch(FetchMoveieFromCategoreis({categ:id , PageNumber:PageNumber}))
        }
    },[id,PageNumber ,movei_id ])
    

    useEffect(()=>{
        if(!isNaN(id)){
            setPageMoveis(GenressMoveis)
        }else{
            setPageMoveis(CategoreisMoveis)
        }
    },[GenressMoveis , CategoreisMoveis ,movei_id])
    

    const dispatch = useDispatch()

     useEffect(()=>{
        dispatch(FetchMovieDetails(movei_id))
        dispatch(FetchAllGenres())
        dispatch(FetchMoveiCast(movei_id))
    },[id,movei_id])

    useEffect(()=>{
        if(Details['imdb_id']){
            dispatch(FetchMoveiVideos(Details['imdb_id']))
        }
    },[Details])


     useEffect(()=>{
       
     },[movei_id])

     const overflowRef = useRef(null);

     const scrollToTop = () => {
    //    if (overflowRef.current) {
    //      overflowRef.current.scrollTop = 0;
    //    }
     };
let x= 0 ;
console.log(Imgs)
  return (
    <>
        <div className={`${Dark? `bg-[#000000d5]`:`bg-white`} scroll-smooth h-[100vh] overflow-auto max-sm:pt-10 max-sm:px-2 `} ref={overflowRef}>
            <div className='main flex max-xl:flex-wrap'>
                    <div className='img 2xl:m-28 max-xl:ml-auto max-xl:mr-auto max-sm:px-10 p-10 '>
                        <img src={`https://image.tmdb.org/t/p/w500${Details?.poster_path}`} alt="" className={`${Dark? `drop-shadow-sm shadow-white`:`shadow-black`} rounded-2xl shadow-2xl shadow-black xl:w-[1000px] h-[700px] `} />
                    </div>  

                    <div className='2xl:mt-10 ml-auto mr-auto w-full '>
                        <div className='data max-sm:mt-5 mt-12 ml-auto mr-auto '>
                            <div className='flex justify-center items-center gap-4 max-sm:flex-col max-sm:gap-1'>
                                <h1 className={`${dark? `text-white`:`text-[#000000bc]`} text-center w-fit text-[40px] font-[500] text-[#000000bc]`}>{Details['title']}</h1>
                                <p className={`${dark? `text-white`:`text-[#000000bc]`} text-center w-fit text-[40px] font-[500] `}>({ String(Details['release_date']).slice(0,4)})</p>
                            </div>  
                        </div>
                        <p className={`${Dark? `text-white`:` text-[#000000bc]`} text-center text-[25px] `}>{Details['tagline']}</p>
                         <div className='flex justify-around items-center max-sm:flex-col mt-5 '>
                               
                                <div className='rate  flex items-center justify-around gap-5 max-sm:flex-col'>
                                    <Rateing size={5} rateing = {Details['vote_average']} />
                                    <p className={`${Dark? `text-white`:`text-[#000000bc]`} text-[14px] `}>{Details['vote_average']} / 10</p>
                                </div>
                                <div className=''>
                                    <p className={`${Dark? `text-white`:`text-[#000000bc]`} text-[14px] font-[500]`}>{Details['runtime']} min / {Details['original_language']}</p>
                                </div>
                        </div>
                        <div className='flex justify-around mt-10 text-[15px] max-sm:grid max-sm:grid-cols-2  ml-auto mr-auto max-sm:gap-5 max-sm:px-6 '>
                             {
                                (Details?.genres || []).map((el)=>{
                                    return(
                                    <>
                                    <Link to={`/${(AllGenres.find((id)=>id?.name === el.name)).id}`}> <div className='flex items-center gap-2 '>

                                        <img className={`${Dark? `filter brightness-0 invert-[1]`:``} size-7`} src={Imgs.filter((el2)=>{
                                            if(el.name === 'Science Fiction' ){
                                                return el2 === `Filmpire/src/assets/genres/science%20fiction.png`
                                            }else{
                                                return el2 === `Filmpire/src/assets/genres/${String(el.name).toLowerCase()}.png` 
                                            }

                                            })} alt={el.name}/>
                                        <h1 className={`${Dark? `text-white`:`text-[#000000bc]`} `}>{el.name}</h1>
                                    </div></Link>
                                    </>
                                    )
                                })
                            }
                        </div>
                         <div className='overview mt-10 max-sm:p-3 ml-auto mr-auto sm:pl-10'>
                            <h1 className={`${Dark? `text-white`:`text-[#000000bc]`} text-[22px] font-[500]`}>OverView</h1>
                            <p className={`${Dark?`text-white`:`text-[#000000bc]`} text-[15px]  mt-2 w-full text-justify`}>{Details['overview']}</p>
                        </div>

                        <h1 className={`${Dark? `text-white`:`text-[#000000bc]`} text-[22px] mt-10 font-[500] max-sm:text-center px-10 ml-auto `}>Top Cast</h1>
                        <div className='flex flex-wrap mt-2 max-sm:gap-3 pl-10 max-sm:flex-wrap '>
                            {
                                (AllCast?.cast || []).map((el)=>{
                                x++;
                                if(x < 7){
                                    return(
                                    <Link to={`/${id}/${movei_id}/${el.id}`} ><div className='flex flex-col items-start justify-start content-start'>
                                        <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt=""  className='w-[140px] h-[160px] scale-[0.9] rounded-md'/>
                                        <div className='overflow-hidden w-[140px]'><p className={`${Dark?`text-white` :`text-[#000000bc]`} text-[13px] w-[140px] `}>{el.original_name}</p></div>
                                        <div className='overflow-hidden w-[140px]'><p className='text-gray-500  overflow-hidden w-[140px] text-[12px] h-[40px] mt-1'>{el.character}</p></div>
                                    </div></Link>
                                    )
                                }
                                })
                            }
                        </div>
                        <div className='pl-10'>

                        <MoveiFeatures Details ={Details} movei_id={movei_id} id={id} homepage={Details['homepage']} imdbId={Details['imdb_id']} Video={MoveiVideos[0]?.key }/>
                        </div>
                    </div>

            </div>
            <div className='mt-24'>
                <h1 className={`${Dark?`text-white` :`text-[#000000bc]`} text-center text-[30px] font-[500]`}>You might also like</h1>
            </div>
            <div className='grid ml-auto mr-auto gap-1 mt-10 w-full transition-all duration-700  xl:grid-cols-6 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-14'>
                {
                    PageMovei.slice(PageNumber ,PageNumber+6).map((el)=>{
                   
                        return(
                        <div onClick={scrollToTop()}>
                             <Gallery Mainid={id} Moveiid={el.id} x ={x} img ={el.poster_path} title={el.title} rate = {el.vote_average}   />
                        </div>
                        )
                   
                    })
                }
            </div>
                <Buttons />
        </div>
    </>
  )
}

export default MoveiDetails