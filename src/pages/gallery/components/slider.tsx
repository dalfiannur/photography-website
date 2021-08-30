import React, { FC } from 'react';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider: FC<{
  galleryId: number,
  images: any[]
}> = ({ images, galleryId }) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    rows: 2,
    slidePerRows: 2,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidePerRows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <ReactSlick {...options}>
      {images.map((image, index) => (
        <div className={`slide slide${index + 1}`}>
          <a href={`gallery/${galleryId}`}>
            <img
              src={process.env.GATSBY_API_URL + '/' + image.path}
              className="object-contain w-full"
            />
          </a>
        </div>
      ))}
    </ReactSlick>
  )
}

export default Slider;