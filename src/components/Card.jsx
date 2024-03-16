export default function Card({ van }) {
  const { imageUrl, name, price, type } = van;
  const tagBaseCSS =
    'text-sm px-4 py-1 capitalize rounded inline-block -mt-4 text-white';
  const tagColor =
    type === 'simple'
      ? 'bg-orange-600'
      : type === 'rugged'
      ? 'bg-teal-800'
      : 'bg-neutral-900';
  const tagCSS = tagBaseCSS + ' ' + tagColor;

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
      <p className={tagCSS}>{type}</p>
    </div>
  );
}

// https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png
