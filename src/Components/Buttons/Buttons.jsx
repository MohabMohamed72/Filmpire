import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementPage, IncrementPage } from '../../Store/MoviesSlice/ButtonsSlice/ButtonsSlice'

const Buttons = () => {


    const Number = useSelector(state => state.ButtonsHandel)
    const dark = useSelector(state => state.DrakMode)
    const dispatch =useDispatch()

  return (
    <>
    <div className='flex  justify-center gap-4 mt-10 mb-20'>
        <button className={`${dark?`text-black bg-blue-400` :`text-white bg-blue-500 `} rounded-md p-2 px-2 font-bold text-[15px]`} onClick={()=>{dispatch(DecrementPage())}}>Prev</button>
        <p className={`${dark? `text-white`:`text-black`} text-[20px] font-bold self-center`}>{Number}</p>
        <button className={`${dark?`text-black bg-blue-400 ` :`text-white bg-blue-500 `} rounded-md p-2 px-2  font-bold text-[15px]`} onClick={()=>{dispatch(IncrementPage())}}>Next</button>
    </div>
    </>
  )
}

export default Buttons