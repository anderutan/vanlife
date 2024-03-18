export default function HostVanCard({ vanList }) {
  const { imageUrl, name, price } = vanList;
  return (
    <div className='flex items-center gap-4 px-6 py-3 bg-white rounded-lg'>
      <img src={imageUrl} alt={name} className='h-16 w-16 rounded-lg' />
      <div>
        <p className='text-xl font-semibold'>{name}</p>
        <p>${price}/day</p>
      </div>
    </div>
  );
}
