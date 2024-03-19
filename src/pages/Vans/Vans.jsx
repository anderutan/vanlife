import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export default function Vans() {
  let [vanData, setVanData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get('type');
  const defaultBtnStyle =
    'font-medium px-6 py-2 bg-orange-100 rounded-md hover:text-white';

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVans();
        setVanData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVan();
  }, []);

  if (loading) {
    return <h1 className='text-2xl font-bold p-10 bg-orange-50'>Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className='text-2xl font-bold p-10 bg-orange-50'>
        There was an error: {error.message}
      </h1>
    );
  }

  const displayVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  const vanElements = displayVans.map((van) => (
    <Link to={van.id} key={van.id} state={{ search: searchParams.toString() }}>
      <Card van={van} />
    </Link>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className=' h-full md:h-screen pb-20 bg-orange-50'>
      <div className='p-7'>
        <h1 className='text-3xl font-bold py-5'>Explore our van options</h1>
        <div className='pb-12 flex justify-between items-center'>
          <button
            onClick={() => handleFilterChange('type', 'simple')}
            className={`${defaultBtnStyle} ${
              typeFilter === 'simple'
                ? 'bg-orange-500 text-white'
                : 'hover:bg-orange-500'
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange('type', 'luxury')}
            className={`${defaultBtnStyle} ${
              typeFilter === 'luxury' ? 'bg-black text-white' : 'hover:bg-black'
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange('type', 'rugged')}
            className={`${defaultBtnStyle} ${
              typeFilter === 'rugged'
                ? 'bg-teal-800 text-white'
                : 'hover:bg-teal-800'
            }`}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange('type', null)}
              className='font-medium underline underline-offset-4 decoration-1 cursor-pointer'
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <div className='flex flex-wrap gap-10 justify-center'>
          {vanElements}
        </div>
      </div>
    </div>
  );
}
