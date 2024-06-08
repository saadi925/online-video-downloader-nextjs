'use client'
import React, { useEffect } from 'react'
import DownloaderMVP from './DownloaderMVP'
import useGetDetailsFromServer from './useGetDetailsFromServer'

export default function DownloaderComponent() {
   const {videoDetails } = useGetDetailsFromServer()
  return (
    <DownloaderMVP videoDetails={videoDetails} />
  )
}
