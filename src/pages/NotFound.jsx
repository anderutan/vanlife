import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex flex-col m-auto p-10 pt-24 h-screen bg-orange-50'>
      <h1 className='text-3xl font-bold mb-10'>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to='..'
        relative='path'
        className='bg-black text-white text-center font-bold py-3'
      >
        Return to home
      </Link>
    </div>
  );
}
