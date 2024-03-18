import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link, useSearchParams } from 'react-router-dom';

export default function Vans() {
  let [vanData, setVanData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const defaultBtnStyle =
    'font-medium px-6 py-2 bg-orange-100 rounded-md hover:text-white';

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const displayVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  const vanElements = displayVans.map((van) => (
    <Link to={`/vans/${van.id}`} key={van.id}>
      <Card van={van} key={van.id} />
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
            className={
              typeFilter === 'simple'
                ? `${defaultBtnStyle} bg-orange-500 text-white`
                : `${defaultBtnStyle} hover:bg-orange-500`
            }
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange('type', 'luxury')}
            className={
              typeFilter === 'luxury'
                ? `${defaultBtnStyle} bg-black text-white`
                : `${defaultBtnStyle} hover:bg-black`
            }
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange('type', 'rugged')}
            className={
              typeFilter === 'rugged'
                ? `${defaultBtnStyle} bg-teal-800 text-white`
                : `${defaultBtnStyle} hover:bg-teal-800`
            }
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
