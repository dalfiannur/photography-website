import React, { CSSProperties, useEffect, useState } from 'react';
import { API } from '../utils/api';
import Layout from '../components/layout';

interface Slideshow {
  id: number;
  path: string;
}

const style: {
  [key: string]: CSSProperties;
} = {
  slider: {
    height: 'fit-content',
    width: '100%',
    maxWidth: 720,
    position: 'absolute',
    bottom: '2%',
  },
  sliderImageContainer: {
    position: 'relative',
    maxHeight: 360,
    height: '100%',
    width: '71%',
    overflow: 'hidden',
    left: '3%',
    paddingTop: '50%'
  },
  camera: {
    height: 'fit-content',
    width: '100%',
    position: 'absolute',
    bottom: '-5%',
    verticalAlign: 'bottom'
  }
}

const sliderItemStyle = (background: string): CSSProperties => ({
  width: '100%',
  height: '100%',
  display: 'none',
  position: 'absolute',
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
  background,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

const IndexPage = () => {
  const [slideshow, setSlideshow] = useState<Slideshow[]>([]);
  const [currentSlideshowIndex, setCurrentSlideshowIndex] = useState<number>(0);

  useEffect(() => {
    API.get('/home/slideshow')
      .then((res) => res.data as Slideshow[])
      .then((data) => {
        console.log(data.length)
        setSlideshow(data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const index = currentSlideshowIndex + 1;
      if (index < slideshow.length) {
        setCurrentSlideshowIndex(index);
      } else {
        setCurrentSlideshowIndex(0);
      }
    }, 3000);
  }, [slideshow, currentSlideshowIndex])

  return (
    <Layout>
      <div style={style.slider}>
        <div style={style.sliderImageContainer}>
          {slideshow.map((item, index) => (
            <div
              key={item.path}
              style={{
                ...sliderItemStyle(`url('${process.env.GATSBY_API_URL}/${item.path}')`),
                display: index === currentSlideshowIndex ? 'block' : 'none'
              }}
            />
          ))}
        </div>
        <img
          src={require('../assets/img/camera-screen.png').default}
          style={style.camera}
        />
      </div>
    </Layout>
  )
}

export default IndexPage;