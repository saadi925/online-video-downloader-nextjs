import React from 'react'
import useButtonsBar from './app-buttons'
import { AppButton } from '.'
import { MediaPlatforms } from '../UrlComponent'

export default function ButtonsBar({onChange, active} :{
    onChange :(media : MediaPlatforms) => void, active : MediaPlatforms
}) {
   
    const buttons = useButtonsBar()
  function isBtnActive(btn : any){
    return active === btn.title.toLowerCase()
  }
 
    return (
    <div className='flex w-full flex-wrap justify-center py-2 items-center  rounded-t-xl  '>
      {
        buttons.map((btn : any, index)=>(
            <AppButton 
            key={index} 
            Icon={btn.Icon} 
            isActive={isBtnActive(btn)} 
            click={()=> onChange(btn.title.toLowerCase())} 
            className={`
            md:first:rounded-l-2xl
            md:last:rounded-r-2xl
            !py-1 
          bg-white
          hover:bg-paper-black
          hover:text-white 
          `} 
             title={btn.title}
             />
        ))
      }
    </div>
  )
}
