import React from "react";
import URLComponent from "./UrlComponent";
import { YoutubeDetailsResponse } from "@/app/actions";
import ItemPreview from "./ItemPreview";

export default function DownloaderMVP({
  videoDetails,
}: {
  videoDetails: YoutubeDetailsResponse | undefined;
}) {

  return (
    <>
      <URLComponent />
      <h3 className="text-sm text-gray-300 font-semibold">
        By using this service you agree to our terms and conditions
      </h3>
      {/* DOWNLOAD ITEM PREVIEW */}
    <ItemPreview  videoDetails={videoDetails} />
   
    </>
  );
}
