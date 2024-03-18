import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link, useSearchParams } from 'react-router-dom';

export default function Vans() {
  let [vanData, setVanData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

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

  return (
    <div className=' h-full md:h-screen pb-20 bg-orange-50'>
      <div className='p-7'>
        <h1 className='text-3xl font-bold py-5'>Explore our van options</h1>
        <div className='pb-12 flex justify-between items-center'>
          <Link
            to='?type=simple'
            className='font-medium px-6 py-2 bg-orange-100 rounded-md'
          >
            Simple
          </Link>
          <Link
            to='?type=luxury'
            className='font-medium px-6 py-2 bg-orange-100 rounded-md'
          >
            Luxury
          </Link>
          <Link
            to='?type=rugged'
            className='font-medium px-6 py-2 bg-orange-100 rounded-md'
          >
            Rugged
          </Link>
          <a
            onClick={() => setSearchParams('')}
            className='font-medium underline underline-offset-4 decoration-1 cursor-pointer'
          >
            Clear filters
          </a>
        </div>
        <div className='flex flex-wrap gap-10 justify-center'>
          {vanElements}
        </div>
      </div>
    </div>
  );
}
