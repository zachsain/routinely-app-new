import React from "react";
import './App.css';

const src = "https://www.youtube.com/embed/IB_icWRzi4E";

const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;