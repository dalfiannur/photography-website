import React, { FC, useState } from "react";
import './index.sass'

import SideNav from './SideNav'
import TopBar from './TopBar';

const LayoutComponent: FC<{
  title: string;
}> = ({ children, title }) => {
  return (
    <div className="h-full p-10 bg-blue-700">
      <div className="flex">
        <SideNav />

        <div className="content">
          <TopBar />
        </div>
      </div>
    </div>
  )
}

export default LayoutComponent;