import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({
  src,
  alt,
  width,
  height,
    className = "",
  ariaHidden = false,
  onClick = () => {},
}) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={inView ? src : ""}
      alt={alt}
      onLoad={onLoad}
      onClick={onClick}
      ref={ref}
    //   style={{
    //     opacity: (loaded && !ariaHidden) ? 1 : 0,
    //     transition: "opacity 1s ease-in-out",
    //   }}
      width={width}
      height={height}
      className={className}
      aria-hidden={ariaHidden}
    />
  );
};

export default LazyImage;
