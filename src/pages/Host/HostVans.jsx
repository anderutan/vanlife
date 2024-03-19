import { useEffect, useState } from 'react';
import HostVanCard from '../../components/HostVanCard';
import { Link } from 'react-router-dom';
import { getHostVans } from '../../api';

export default function HostVans() {
  const [vanData, setVanData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVanData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

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
