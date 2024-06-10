'use client'
import React, { useEffect, useState } from 'react'
interface HeaderProps {
  toggleSidebar : () => void,
  isSidebar : boolean
}
import Link from "next/link";
import { YTIcon } from '@/assets/Socialcons';

export const Header = ({
}: HeaderProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <nav className={`${visible ? "":"relative"}`}>
      <div id="header" className={`h-16 w-full header z-30 fixed  top-0transition-all duration-100 ${visible ? " translate-y-0" : " -translate-y-full"}  border-b border-gray-600/40   px-2 lg:px-5 font-semibold   flex  justify-between items-center py-2 `}>
        <Link href={`/`} className={`text-2xl   lg:text-3xl uppercase font-semibold  px-3 rounded-md flex items-center `}
        >
          <span className="text-white font-bold text-surface leading-none tracking-tight">Video Downloader</span>
        </Link>
        {/*  header  right  */}
        <div className="flex">
          <div
            className={`flex items-center gap-3  px-2  text-surface rounded-xl `}
          >
        <Link href={'https://www.youtube.com/channel/UCjLEAzb2LjcdFJV0bfnRYrQ'} className="flex items-center gap-2 text-white underline">
          <YTIcon />
          Youtube
        </Link>

         <Link href={'https://github.com/saadi925/online-video-downloader-nextjs'} className="text-white text-sm underline text-center">
         <span className='hidden md:block'>
         Source Code 
          </span>
           Github 
         </Link>
          </div>
        </div>

      </div>

    </nav>
  );
};
export default Header;
