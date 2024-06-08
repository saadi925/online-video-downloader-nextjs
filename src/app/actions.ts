import ytdl from "ytdl-core";
import { HOST } from "./constants/constants";
export type YTDetails = {
    title? : string
    lengthSeconds? : string
    thumbnail? : string
    formats : {
        container : string
        quality : string | null
        url : string
    }[]
  }
export type YoutubeDetailsResponse = {
    title : string
    lengthSeconds : string
    thumbnail : string
    formats : videoFormat[]
  
}
export async function RunVideoDownloader(platform = 'youtube', url : string, type : "details" | "download" = 'details'){
    try {
        const response = await fetch(`/api/download/${platform}?videoUrl=${url}`, {
            cache: 'no-cache',
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export async function videoDownload(downloadUrl : string){
    try {

        const response = await fetch(`${HOST}/api/downloader/youtube/download`, {
           method : "POST",
              body : JSON.stringify(downloadUrl),
        });
        
        if (!response.ok) {
            throw new Error('Failed to download video');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'video.mp4';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
        alert('An error occurred while trying to download the video.');
    }
}


export interface videoFormat {
    itag: number;
    url: string;
    mimeType?: string;
    bitrate?: number;
    audioBitrate?: number;
    width?: number;
    height?: number;
    initRange?: { start: string; end: string };
    indexRange?: { start: string; end: string };
    lastModified: string;
    contentLength: string;
    quality: any,
    qualityLabel: '144p' | '144p 15fps' | '144p60 HDR' | '240p' | '240p60 HDR' | '270p' | '360p' | '360p60 HDR'
      | '480p' | '480p60 HDR' | '720p' | '720p60' | '720p60 HDR' | '1080p' | '1080p60' | '1080p60 HDR' | '1440p'
      | '1440p60' | '1440p60 HDR' | '2160p' | '2160p60' | '2160p60 HDR' | '4320p' | '4320p60';
    projectionType?: 'RECTANGULAR';
    fps?: number;
    averageBitrate?: number;
    audioQuality?: 'AUDIO_QUALITY_LOW' | 'AUDIO_QUALITY_MEDIUM';
    colorInfo?: {
      primaries: string;
      transferCharacteristics: string;
      matrixCoefficients: string;
    };
    highReplication?: boolean;
    approxDurationMs?: string;
    targetDurationSec?: number;
    maxDvrDurationSec?: number;
    audioSampleRate?: string;
    audioChannels?: number;

    // Added by ytdl-core
    container: 'flv' | '3gp' | 'mp4' | 'webm' | 'ts';
    hasVideo: boolean;
    hasAudio: boolean;
    codecs: string;
    videoCodec?: string;
    audioCodec?: string;

    isLive: boolean;
    isHLS: boolean;
    isDashMPD: boolean;
  }