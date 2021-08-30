import React, { FC } from 'react';
import Layout from '../../../components/layout';

const GalleryDetailPage: FC<{
  params: any
}> = ({ params }) => {
  return (
    <Layout>
      <div>Gallery Detail {params.slug}</div>
    </Layout>
  )
}

export default GalleryDetailPage;