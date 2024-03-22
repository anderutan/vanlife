import { BsStarFill } from 'react-icons/bs';
import reviewGraph from '../../assets/images/reviews-graph.png';

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className='p-6'>
      <div className='flex gap-4 items-center mb-8'>
        <h2 className='text-3xl font-bold '>Your reviews</h2>
        <p>
          Last <span className='font-bold underline'>30 days</span>
        </p>
      </div>
      <img
        className='w-full max-w-[500px] mb-8'
        src={reviewGraph}
        alt='Review graph'
      />
      <h3 className='font-bold mb-4'>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className='text-xs mt-5'>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill
                className='text-orange-400 inline-flex mr-1 mb-3'
                key={i}
              />
            ))}
            <div className='flex mb-3'>
              <p className='mr-2 font-bold'>{review.name}</p>
              <p className='date'>{review.date}</p>
            </div>
            <p className='mb-5'>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
