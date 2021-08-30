import React, { FC, useEffect, useState } from 'react';
import { API } from '../../utils/api';
import Layout from '../../components/layout';
import Slider from './components/slider';

interface Gallery {
  id: number;
  title: string;
  images: {
    id: number;
    path: string;
  }[]
}

const GalleryPage: FC = () => {
  const [portfolios, setPortfolios] = useState<Gallery[]>([]);

  useEffect(() => {
    API.get('/portfolio')
      .then((res) => res.data as Gallery[])
      .then((data) => {
        setPortfolios(data);
      });
  }, []);

  return (   
    <Layout>
      <div className="p-2">
        {portfolios.map((item) => (
          <div className="w-full mb-2 overflow-hidden rounded-md border-2 bg-black">
            <Slider images={item.images} galleryId={item.id} />
            <div className="p-2">
              <h1 className="text-white font-bold">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default GalleryPage;