import { useEffect, useRef, useState } from "react";
import covergradient from "../images/cover-gradient.png";

const ImageWithPlaceholder = ({
  src,
  alt,
  className,
  needGradient,
  ...props
}) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const calculateHeight = (width, height) => {
    if (width > height) {
      return 112; // Portrait
    }
    if (width < height) {
      return 240; // Landscape
    }
    return 200;
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (imgRef.current) {
      setWidth(imgRef.current.naturalWidth);
      setHeight(imgRef.current.naturalHeight);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`image-container_exp bg-black relative ${className}`}
      style={{ width, height: height && calculateHeight(width, height) }}
    >
      {/* Loading placeholder */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} image-placeholder`}
          onLoad={handleImageLoad}
          {...props}
          style={{
            opacity: isLoaded ? "1" : "0",
            transition: "opacity 0.3s",
          }}
        />
      )}

      {needGradient && (
        <img
          className={`h-[170px] w-full absolute bottom-0`}
          src={covergradient}
          alt=""
        />
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
