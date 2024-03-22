import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { getHostVans } from '../../api';

export default function Dashboard() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className='flex items-center bg-white mb-4 px-6 py-4' key={van.id}>
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className='h-16 rounded-md mr-4'
        />
        <div className='mr-auto'>
          <h3 className='text-lg font-semibold m-2'>{van.name}</h3>
          <p className='m-2'>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ));

    return (
      <div className='p-6'>
        <section>{hostVansEls}</section>
      </div>
    );
  }

  // if (loading) {
  //     return <h1>Loading...</h1>
  // }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <section className='bg-orange-100 px-9 py-6 flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-bold'>Welcome!</h1>
          <p className='my-6'>
            Income last <span className='underline font-bold'>30 days</span>
          </p>
          <h2 className='text-4xl font-bold'>$2,260</h2>
        </div>
        <Link to='income'>Details</Link>
      </section>
      <section className='bg-orange-200 px-9 py-11 flex items-center'>
        <h2 className='font-bold'>Review score</h2>

        <BsStarFill className='text-orange-500 ml-4 text-xl' />

        <p className='ml-1 text-lg mr-auto'>
          <span className='font-bold'>5.0</span>/5
        </p>
        <Link to='reviews'>Details</Link>
      </section>
      <section className='p-9'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-xl'>Your listed vans</h2>
          <Link to='vans'>View all</Link>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
      </section>
    </>
  );
}
