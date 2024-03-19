import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    loginUser(formData)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem('loggedin', true);
        navigation('/host', { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setStatus('idle'));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className='bg-orange-50 h-screen flex flex-col p-5 pt-10 '>
      {location.state?.message && (
        <p className='text-center pb-5 text-red-500'>
          {location.state.message}
        </p>
      )}
      {error?.message && (
        <p className='text-center pb-5 text-red-500'>{error.message}</p>
      )}
      <h1 className='pb-10 text-center text-2xl font-bold'>
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          className='rounded-t-lg p-3 border-2'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='rounded-b-lg p-3 border-x-2 border-b-2 mb-5'
        />
        <button
          className='py-3 text-lg text-white font-bold bg-orange-400 rounded-md disabled:opacity-50'
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Logging in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
