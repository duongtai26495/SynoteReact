import React from 'react'
import spinner from '../images/loading_spinner.gif'


const MyButton = ({isLoading, onClick = () =>{}, title, icon}) => {
    const LoadingSpinner = () =>{
        return (
            <img src={spinner} className='img-spinner' />
        )
    }
    
    const ContentBtn = () =>{
        return (
            <div className='flex flex-row'>
                <span>{title}</span>
                {icon}
            </div>
        )
    }

  return (
    <button className=' btn btn-component w-full rounded-md bg-cyan-500 p-2 mt-3 text-white flex flex-col justify-center' onClick={onClick}>
        {isLoading ? <LoadingSpinner/> : <ContentBtn />}
    </button>
  )
}

export default MyButton