import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailLayout = () => {
  return (
    <div>
      <div>디테일 레이아웃</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DetailLayout;