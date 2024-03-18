import { useOutletContext } from 'react-router-dom';

export default function HostVanInfoPricing() {
  const { van } = useOutletContext();

  return (
    <div className='pb-3'>
      {van ? (
        <p className='text-2xl font-medium'>
          ${van.price}.00
          <span className='text-base font-medium'>/day</span>
        </p>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
