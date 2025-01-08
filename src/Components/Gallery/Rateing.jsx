import React from 'react'
import { CiStar } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'


const Rateing = (props) => {
  return (
    
    <div className='flex'>
        {
            ((props.rateing > 5) && (props.rateing < 6)) ?<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <CiStar className={`size-${props.size} text-gray-600`} />
                <CiStar className={`size-${props.size} text-gray-600`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
            </>:((props.rateing > 6) && (props.rateing < 7)) ?<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <CiStar className={`size-${props.size} text-gray-600`} />
                <CiStar className={`size-${props.size} text-gray-600`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
            </>:((props.rateing > 7) && (props.rateing < 8)) ?<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <CiStar className={`size-${props.size} text-gray-600`} />
                <CiStar className={`size-${props.size} text-gray-600`}/>
            </>:((props.rateing > 8) && (props.rateing < 9)) ?<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
            </>:((props.rateing > 9) && (props.rateing < 10)) ?<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                
            </>:<>
                <IoMdStar className={`text-yellow-400 size-${props.size}`}/>
                <CiStar className={`size-${props.size} text-gray-600`} />
                <CiStar className={`size-${props.size} text-gray-600`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
                <CiStar className={`size-${props.size} text-gray-600`}/>
            </>
                
        }
    
    
    </div>


  )
}

export default Rateing