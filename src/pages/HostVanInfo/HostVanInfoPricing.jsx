import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HostVanInfoPricing() {
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
