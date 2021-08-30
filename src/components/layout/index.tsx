import React, { FC, useEffect } from 'react';
import Header from '../header';

const Layout: FC = ({ children }) => {
  useEffect(() => {
    const app = document.getElementsByTagName('body')[0]
    app.style.background = `url('${process.env.GATSBY_API_URL}/img/background.webp')`
  }, []);

  return (
    <>
      <Header />
      <div className="h-14 w-full" />
      {children}
    </>
  )
}

export default Layout;