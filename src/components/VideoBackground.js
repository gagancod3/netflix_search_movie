import React from "react";
import { useSelector } from "react-redux";
import usePlayTrailer from "../customHooks/usePlayTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerClip = useSelector((store)=> store.movies?.trailer);

    usePlayTrailer(movieId);
    
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerClip?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        // allow="autoplay"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
