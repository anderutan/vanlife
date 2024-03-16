import coverImage from '../assets/images/about-us-page-image.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='bg-orange-50 w-[548px]'>
      <div>
        <img
          src={coverImage}
          alt=''
          className='h-[223px] w-full object-cover'
        />
      </div>
      <div className='px-7 py-12'>
        <div className='mb-14'>
          <h1 className='text-3xl font-bold mb-8'>
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className='mb-6'>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className='px-9 py-8 bg-amber-200'>
          <p className='text-2xl font-bold mb-6'>
            Your destination is waiting.{' '}
            <span className='inline-block'>Your van is ready.</span>
          </p>
          <Link className='px-6 py-3 bg-gray-900 text-gray-100 rounded-xl font-bold'>
            Explore our vans
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
