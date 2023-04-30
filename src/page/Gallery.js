import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const images = [
  {
    id: 1,
    src: "images/Sponsos/image_7.jpg",
    alt: 'Image 1',
    caption: 'Koderz Kombat Winners'
  },
  {
    id: 2,
    src: "images/Sponsos/image_8.jpg",
    alt: 'Image 2',
    caption: 'Koderz Kombat Round 2 Qualifiers'
  },
  {
    id: 3,
    src: "images/Sponsos/image_9.jpg",
    alt: 'Image 3',
    caption: 'Koderz Kombat Glimpse'
  },
  {
    id: 4,
    src: "images/Sponsos/image_10.jpg",
    alt: 'Image 4',
    caption: 'Koderz Kombat Glimpse'
  },
  {
    id: 5,
    src: "images/Sponsos/image_11.jpg",
    alt: 'Image 5',
    caption: 'Koderz Kombat Glimpse'
  },
  {
    id: 6,
    src: "images/Sponsos/image_12.jpg",
    alt: 'Image 6',
    caption: 'Koderz Kombat Glimpse'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    
    <div className="gallery-container">
       <h1
        style={{
          margin: "25px 0  ",
          fontSize: "50px",
          textAlign: "center",
          color: "rgb(153, 0, 0)",
          fontWeight: "50",
        }}
      >
        SOME GLIMPSE OF OUR PAST EVENTS 
      </h1>
      {/* <h2 className="gallery-heading">Photo Gallery</h2> */}
      <div className={`gallery-overlay ${isZoomed ? 'zoomed' : ''}`}>
        <div
          className="gallery-slide"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        >
          <div className="gallery-caption">
            {images[currentIndex].caption}
          </div>
          <div className="gallery-controls">
            <button className="gallery-zoom" onClick={handleZoomToggle}>
              {isZoomed ? (
                <i className="fas fa-compress-arrows-alt"></i>
              ) : (
                <i className="fas fa-expand-arrows-alt"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-thumbnail ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-thumbnail-caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
