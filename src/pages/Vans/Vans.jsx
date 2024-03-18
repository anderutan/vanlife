import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

export default function Vans() {
  let [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  return (
    <div className=' h-full md:h-screen pb-20 bg-orange-50'>
      <div className='p-7'>
        <h1 className='text-3xl font-bold py-5'>Explore our van options</h1>
        <div className='pb-12 flex justify-between items-center'>
          <a href='' className='font-medium px-6 py-2 bg-orange-100 rounded-md'>
            Simple
          </a>
          <a href='' className='font-medium px-6 py-2 bg-orange-100 rounded-md'>
            Luxury
          </a>
          <a href='' className='font-medium px-6 py-2 bg-orange-100 rounded-md'>
            Rugged
          </a>
          <a
            href=''
            className='font-medium underline underline-offset-4 decoration-1'
          >
            Clear filters
          </a>
        </div>
        <div className='flex flex-wrap gap-10 justify-center'>
          {vanData.map((van) => (
            <Link to={`/vans/${van.id}`} key={van.id}>
              <Card van={van} key={van.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
