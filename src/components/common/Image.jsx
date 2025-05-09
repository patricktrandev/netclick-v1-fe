import React, { useEffect, useState } from "react";

const ImageComponent = ({ url, classname, name, width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setCurrentSrc(url);
    };
    return () => {
      //clean up function
      img.onload = null;
    };
  }, [url]);

  return (
    <img
      className={currentSrc === url ? classname : `${classname} blur-md`}
      src={currentSrc}
      alt={name}
    />
  );
};

export default ImageComponent;
