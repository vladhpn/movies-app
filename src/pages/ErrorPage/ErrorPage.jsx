import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='h-screen flex items-center justify-center flex-col'
    >
      <h1 className='text-7xl text-white font-semibold mb-8'>Oops!</h1>
      <p className='text-4xl text-white font-semibold mb-8'>
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className='text-xl text-white font-semibold mb-8'>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};
