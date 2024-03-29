import homePageImage from '../assets/images/home-page-image.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div
        className='h-screen bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${homePageImage})` }}
      >
        <div className='w-full h-full flex flex-col justify-center backdrop-brightness-50 px-6'>
          <h1 className='text-[36px] font-bold leading-snug mb-5'>
            You got the travel plans, we got the travel vans.
          </h1>
          <p className='mb-12'>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            className='py-3 bg-orange-400 rounded-lg font-bold text-center'
            to='/vans'
          >
            Find your van
          </Link>
        </div>
      </div>
    </>
  );
}
