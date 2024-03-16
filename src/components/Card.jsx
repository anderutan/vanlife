import Tag from './Tag';

export default function Card({ van }) {
  const { imageUrl, name, price, type } = van;

  return (
    <div className='inline-block font-bold w-56'>
      <img
        src={imageUrl}
        alt={name}
        className=' w-56 rounded-xl mb-2 aspect-square'
      />
      <div className='flex justify-between'>
        <p className='text-lg '>{name}</p>
        <p className='text-lg '>
          {`$${price}`}{' '}
          <span className='text-xs block text-right -mt-2'>/day</span>
        </p>
      </div>
      <Tag type={type} />
    </div>
  );
}

// https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png
