import { useState, useEffect, useRef } from 'react';

const Image = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => setIsLoaded(true);
    img.addEventListener('load', handleLoad);

    return () => img.removeEventListener('load', handleLoad);
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : ''}`}
      loading="eager"
      {...props}
    />
  );
};

export default Image;
