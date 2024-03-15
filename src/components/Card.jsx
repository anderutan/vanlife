export default function Card() {
  return (
    <div className='inline-block font-bold'>
      <img
        src='https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png'
        alt=''
        className='h-60 w-60 rounded-xl mb-2'
      />
      <div className='flex justify-between'>
        <p className='text-xl '>Modest Explorer</p>
        <p className='text-xl '>
          $60 <span className='text-xs block text-right -mt-2'>/day</span>
        </p>
      </div>
      <p className='px-4 py-1 capitalize rounded inline-block -mt-4 bg-orange-600 text-white'>
        simple
      </p>
    </div>
  );
}

// https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png
