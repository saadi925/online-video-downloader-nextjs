'use client'
import React from 'react'
import OptionsSelector from './Selector'
import DownloadButton from './DownloadButton'
import { useMediaPlatformContext } from '@/context/VideoPlatformContext'

export default function ItemPreview({
  videoDetails,
}: {
  videoDetails: any
}) {
  function timeConvertFromSeconds(n: number) {
    var num = n;
    var hours = Math.floor(num / 3600);
    var minutes = Math.floor((num % 3600) / 60);
    var seconds = num % 60;
    return hours + ":" + minutes + ":" + seconds;
  }
  const { detailsLoading, videoOption, error } = useMediaPlatformContext()

  return (
    <>
     <p className={`${ error !== "" ? "text-red-400" :"text-white"}`}>{
      }
      {error}

      </p>
      {
              detailsLoading && <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full w-12 h-12 border-t-2 border-r-2 border-sky-500"></div>
              </div>
            }
      <div className="p-2 flex flex-wrap justify-center min-h-46 w-full border-sky-500 text-white bg-paper-black border-paper-black/10 border rounded-lg sm:mt-4">
        
        {videoDetails ? (
          <>
            <div className="aspect-video   h-40 bg-paper-black rounded-lg relative">
              {videoDetails?.thumbnail ? (
                <video autoPlay={false}   src={videoOption?.url} className='h-full w-full rounded-lg' controls={true} 
                  poster={videoDetails?.thumbnail} title={videoDetails?.title + videoOption?.container}
                  aria-details={videoDetails?.title}
                >
                  <DownloadButton videoDetails={videoDetails} />
                </video>

              ) : (
                <></>
              )}

            </div>

            <div className="px-2 flex flex-col items-center">
              <h3 className="text-md line-clamp-1 max-w-sm">
                {videoDetails?.title}
              </h3>
              <span className="text-md   text-gray-200">
                <span className='font-semibold '>
                  Duration :
                </span>
                {videoDetails?.lengthSeconds &&
                  timeConvertFromSeconds(parseInt(videoDetails.lengthSeconds))}

              </span>
              <div className="flex flex-wrap bg-paper-black rounded-lg border border-sky-500">
                <DownloadButton videoDetails={videoDetails} />
                <OptionsSelector
                  options={videoDetails.formats}
                />
              </div>
            </div>
          </>
        ) : (
          <div >
            <h3 className={`text-md line-clamp-1 text-xl font-bold leading-normal tracking-tighter  max-w-sm`}>
            Your Video Details will appear here
            </h3>
        
          </div>
        )}
      </div>
    </>
  )

}
