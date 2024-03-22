import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Tag from '../../components/Tag';
import leftArrow from '../../assets/images/left-arrow.svg';
import { getVan } from '../../api';

export default function VanDetails() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
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

  const search = location.state?.search || '';

  return (
    <>
      {van ? (
        <div className='h-full bg-orange-50 pb-20 '>
          <div className='p-7 flex flex-col items-start'>
            <Link
              to={`..?${search}`}
              relative='path'
              className='flex items-center gap-2 mb-10'
            >
              <img src={leftArrow} alt='' className='h-4 w-4' />
              <p className='underline underline-offset-2'>
                Back to {search.split('=')[1] || 'all'} vans
              </p>
            </Link>
            <img src={van.imageUrl} alt={van.name} className='mb-12  ' />
            <Tag type={van.type} />
            <h1 className='mt-5 font-bold text-2xl'>{van.name}</h1>
            <p className='font-bold text-lg my-3'>
              {`$${van.price}`}
              <span className='text-base font-normal'>/day</span>
            </p>
            <p className='text-sm mb-5'>{van.description}</p>
            <button className='py-3 w-full bg-orange-400 rounded-lg font-bold text-center text-white'>
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
