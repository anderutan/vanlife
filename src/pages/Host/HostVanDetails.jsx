import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import Tag from '../../components/Tag';
import leftArrow from '../../assets/images/left-arrow.svg';
import { getHostVans } from '../../api';

export default function HostVanDetails() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const activeStyle = 'font-bold underline';
  const hoverStyle = 'hover:font-bold hover:underline';
  const classLink = ({ isActive }) => (isActive ? activeStyle : hoverStyle);

  return (
    <>
      {van ? (
        <div className='h-screen'>
          <Link
            to='..'
            relative='path'
            className='flex items-center gap-2 m-6 mb-10'
          >
            <img src={leftArrow} alt='' className='h-4 w-4' />
            <p className='underline underline-offset-2'>Back to all vans</p>
          </Link>
          <div className='m-6 p-6 bg-white'>
            <div className='flex gap-5 pt-6 items-center'>
              <img
                src={van.imageUrl}
                alt={van.name}
                className='w-1/4 h-1/4 sm:h-40 sm:w-40'
              />
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
              <NavLink end to={'.'} className={classLink}>
                Details
              </NavLink>
              <NavLink to={'pricing'} className={classLink}>
                Pricing
              </NavLink>
              <NavLink to={'photos'} className={classLink}>
                Photo
              </NavLink>
            </nav>
            <Outlet context={{ van }} />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
