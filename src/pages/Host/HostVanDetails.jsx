import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Tag from '../../components/Tag';

export default function HostVanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  console.log(van);

  return (
    <>
      {van ? (
        <div className='h-screen'>
          <div className='m-6 p-6 bg-white'>
            <div className='flex gap-5'>
              <img src={van[0].imageUrl} alt={van[0].name} className='h-40' />
              <div className='flex flex-col gap-4 justify-center items-start'>
                <Tag type={van[0].type} />
                <p className='text-2xl font-bold'>{van[0].name}</p>
                <p className='text-lg font-bold'>
                  ${van[0].price}
                  <span className='text-sm font-medium'>/day</span>
                </p>
              </div>
            </div>
            <nav className='flex py-6 gap-5'>
              <NavLink>Details</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Photo</NavLink>
            </nav>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
