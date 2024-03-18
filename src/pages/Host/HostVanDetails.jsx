import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Tag from '../../components/Tag';

export default function HostVanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  const activeStyle = 'font-bold underline';
  const hoverStyle = 'hover:font-bold hover:underline';
  const classLink = ({ isActive }) => (isActive ? activeStyle : hoverStyle);

  return (
    <>
      {van ? (
        <div className='h-screen'>
          <div className='m-6 p-6 bg-white'>
            <div className='flex gap-5'>
              <img src={van.imageUrl} alt={van.name} className='h-40' />
              <div className='flex flex-col gap-4 justify-center items-start'>
                <Tag type={van.type} />
                <p className='text-2xl font-bold'>{van.name}</p>
                <p className='text-lg font-bold'>
                  ${van.price}
                  <span className='text-sm font-medium'>/day</span>
                </p>
              </div>
            </div>
            <nav className='flex py-6 gap-5'>
              <NavLink end to={`/host/vans/${id}`} className={classLink}>
                Details
              </NavLink>
              <NavLink to={`/host/vans/${id}/pricing`} className={classLink}>
                Pricing
              </NavLink>
              <NavLink to={`/host/vans/${id}/photos`} className={classLink}>
                Photo
              </NavLink>
            </nav>
            <Outlet />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
