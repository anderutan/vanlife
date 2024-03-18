import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HostVanInfoDetail() {
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
        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>
            Name: <span className='font-normal'>{van.name}</span>
          </p>
          <p className='font-semibold'>
            Category: <span className='font-normal capitalize'>{van.type}</span>
          </p>
          <p className='font-semibold'>
            Description: <span className='font-normal'>{van.description}</span>
          </p>
          <p className='font-semibold'>
            Visibility: <span className='font-normal'>Public</span>
          </p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
