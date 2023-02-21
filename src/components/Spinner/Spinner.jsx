import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

export const Spinner = () => {
  const color = '#a855f7';

  return (
    <div className='h-screen flex items-center'>
      <ClipLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};
