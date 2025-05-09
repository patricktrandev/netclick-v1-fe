import React from "react";

const PopupFrameVideo = ({ url }) => {
  return <iframe title="trailer" className="aspect-video w-[50vw]" src={url} />;
};

export default PopupFrameVideo;
