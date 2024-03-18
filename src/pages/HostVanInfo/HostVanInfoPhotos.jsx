import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HostVanInfoPhotos() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

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
