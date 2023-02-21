import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Spinner } from '../components/Spinner/Spinner';

const MainLayout = lazy(() =>
  import('../pages/MainLayout/MainLayout' /* webpackChunkName: "MainLayout" */)
);
const Main = lazy(() =>
  import('../pages/Main/Main' /* webpackChunkName: "Main" */)
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "MovieDetails" */
  )
);

const TvShows = lazy(() =>
  import('../pages/TvShows/TvShows' /* webpackChunkName: "TvShows" */)
);

const TvShowDetails = lazy(() =>
  import(
    '../pages/TvShowDetails/TvShowDetails' /* webpackChunkName: "TvShowDetails" */
  )
);
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Spinner />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />,
      },
      {
        path: 'tv-shows',
        element: <TvShows />,
      },
      {
        path: '/tv-shows/:id',
        element: <TvShowDetails />,
      },
    ],
  },
]);
