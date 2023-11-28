import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUserContext, signup } from './userSlice';

import Button from '../../ui/Button';

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .min(8, 'Length should be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .min(8, 'Length should be at least 8 characters')
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  .required();

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authError, status, userInfo } = useSelector(getUserContext);

  const isSubmitted = status === 'loading';

  useEffect(() => {
    const registrationSuccess =
      !authError && status === 'idle' && userInfo && userInfo?.message;
    if (registrationSuccess) navigate('/verify');
  }, [authError, userInfo, status, navigate]);

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return (
    <div className="px-4 py-6">
      <p className="mb-4 text-center text-sm text-stone-600 md:text-base">
        {' '}
        👋 Welcome! Please start by creating an account:
      </p>

      {authError && (
        <p className="mb-5 text-center text-xs text-red-600">{authError}</p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md bg-stone-300 px-6 py-6"
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="first-name">
            Username
          </label>
          <div className="grow">
            <input
              type="text"
              placeholder="Johnlook"
              {...register('username', { required: true })}
              className="input w-full"
            />
            {errors.username && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="email" className="sm:basis-40">
            Email
          </label>
          <div className="grow">
            <input
              placeholder="john@example.com"
              type="email"
              autoComplete="email"
              className="input w-full"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="password" className="sm:basis-40">
            Password
          </label>
          <div className="grow">
            <input
              type="password"
              className="input w-full"
              autoComplete="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="confirm-password" className="sm:basis-40">
            Confirm Password
          </label>
          <div className="grow">
            <input
              type="password"
              className="input w-full"
              autoComplete="password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-row-reverse">
          <Button type="primary" disabled={isSubmitted}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
