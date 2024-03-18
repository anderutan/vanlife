import { useEffect, useState } from 'react';
import HostVanCard from '../../components/HostVanCard';
import { Link } from 'react-router-dom';

export default function HostVans() {
  const [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  return (
    <div className='h-screen bg-orange-50'>
      <h1 className='px-6 pt-10 pb-4 text-3xl font-bold'>Your listed vans</h1>
      <div className='px-6 py-4 flex flex-col gap-4'>
        {vanData.map((van) => (
          <Link to={van.id} key={van.id}>
            <HostVanCard vanList={van} />
          </Link>
        ))}
      </div>
    </div>
  );
}
