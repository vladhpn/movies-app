import { Suspense } from 'react';
import { Header } from '../../components/Header/Header';

import { Outlet } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';

const MainLayout = () => {
  return (
    <div className='bg-zinc-800'>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
