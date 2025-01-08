import React, { useEffect } from 'react'
import { Imgs } from '../../assets/genres/index'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllGenres } from '../../Store/MoviesSlice/MoveiGeners/AllGeners'


const Sidebar = () => {
      const AllGenres = useSelector(state =>state.GetAllGenres)
      const dark = useSelector(state => state.DrakMode)
      const dispatch = useDispatch()

      useEffect(()=>{
        dispatch(FetchAllGenres())
      },[])
      
      let x = -1 ;
      let y = 18;
      

      const Categoreis = [{title : 'Popular' , value :'popular' } , {title : 'Top Rated' , value :'top_rated' } , {title : 'Upcoming' , value :'upcoming' }]
  return(
    <div className={`${dark?`bg-[#000000d5]`:`bg-white`} h-lvh overflow-y-auto border-r-2 w-fit min-w-[200px] transition-all duration-700`}>

        <div className='w-full p-5 '>
          <Link to='/'> <img src={`${(dark)? `https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png`:`https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png`}`} alt="" className='ml-auto mr-auto w-[150px] transition-all duration-700'/></Link>
        </div>

        <div>
          <hr className='mb-5'/>
          <p className={` ${dark? `text-white`:`text-gray-500`} px-4 text-[15px] font-[500]  `}>Categories</p>
        </div>

            <ul>
              {
                Categoreis.map((el)=>{
                  y++;
                  return(
                    <>
                        <Link to={`/${el.value}`}><li className='li-style'>
                          <img src={Imgs[y]} alt="" className={`${dark?`filter brightness-0 invert-[1]`:``} size-7 mt-1`} />
                          <p  className={`${dark?`text-white text-[18px]`:`text-style`} text-style`}>{el.title} </p>
                        </li></Link>
                    </>
                  )
                })
              }
            </ul>

            <div>
              <hr className={`${dark? ``:`bg-gray-50`} w-full  mt-4`}/>
              <p className={` ${dark? `text-white`:`text-gray-500`} px-4 text-[15px] font-[500] mt-6 mb-3 `}>Genres</p>
            </div>

            <ul className=''>
              {
                AllGenres.map((el)=>{
                  x+=1;
                  return(
                    <>
                      <Link to={`/${el.id}`}> <li key={el.id} className='li-style'>
                          <div className='flex gap-6'>
                            <img src={Imgs[x]} alt=""  className={`${dark?`filter brightness-0 invert-[1]`:``} size-7 `}/>
                            <p className={`${dark?`text-white text-[20px]`:`text-style`} text-style`}>{el.name}</p>
                          </div>
                        </li></Link>
                    </>
                  )
                })
              }
            </ul>

          
      </div>
  )
}

export default Sidebar