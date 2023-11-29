import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserContext, login } from './userSlice';

const schema = yup
  .object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(8, 'Length must be at least 8 characters'),
  })
  .required();

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, status, authError } = useSelector(getUserContext);

  const handleOnSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (userInfo?.email && status === 'idle' && !authError) navigate('/menu');
  }, [navigate, userInfo, status, authError]);

  return (
    <div className="mt-10 px-4 py-6 align-middle">
      <div className="mb-5 space-y-1 text-center">
        <p className="text-xl font-bold">
          Feeling hungry <span className="text-3xl">🥘</span> ?{' '}
          <span className="text-sm text-stone-600">
            Checkout the offers now
          </span>
        </p>
      </div>

      {authError && (
        <p className="mb-5 text-center text-xs text-red-600">{authError}</p>
      )}

      <form
        className="rounded-md bg-stone-200 px-6 py-6"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Email</label>
          <div className="grow">
            <input
              placeholder="john@example.com"
              type="email"
              className="input w-full"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Password</label>
          <div className="grow">
            <input
              type="password"
              className="input w-full"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="text-right">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
