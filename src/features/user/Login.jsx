import { useState } from 'react';
import Button from '../../ui/Button';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    navigate('/menu');
  };

  return (
    <div className="mt-10 px-4 py-6 align-middle">
      <div className="mb-5 space-y-1 text-center">
        <p className="text-xl font-bold">
          Feeling hungry <span className="text-3xl">🥘</span> ?
        </p>
        <p className="text-sm text-stone-600">Checkout the offers now</p>
      </div>
      <form
        className="rounded-md bg-stone-200 px-6 py-6"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Email</label>
          <div className="grow">
            <input
              placeholder="john@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Password</label>
          <div className="grow">
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
