import { useOutletContext } from 'react-router-dom';

export default function HostVanInfoPhotos() {
  const [van, setVan] = useOutletContext();

  return (
    <div className='pb-3'>
      {van ? (
        <img src={van.imageUrl} alt={van.name} className='h-24 rounded-md' />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
