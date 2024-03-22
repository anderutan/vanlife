import graph from '../../assets/images/income-graph.png';

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <section className='p-6'>
      <h1 className='font-bold text-2xl mb-8'>Income</h1>
      <p className='mb-3'>
        Last <span className='underline font-bold'>30 days</span>
      </p>
      <h2 className='text-3xl font-bold mb-8'>$2,260</h2>
      <img
        className='w-[100%] max-w-[500px] mb-8'
        src={graph}
        alt='Income graph'
      />
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-xl'>Your transactions (3)</h3>
        <p>
          Last <span className='underline font-bold'>30 days</span>
        </p>
      </div>
      <div className=''>
        {transactionsData.map((item) => (
          <div
            key={item.id}
            className='flex justify-between items-center bg-white py-9 px-7 rounded-lg mt-5'
          >
            <h3 className='text-2xl font-bold'>${item.amount}</h3>
            <p className=' font-semibold'>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
