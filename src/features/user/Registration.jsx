import { useReducer } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'change_first_name':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'change_last_name':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'change_email':
      return {
        ...state,
        email: action.payload,
      };
    case 'change_password':
      return {
        ...state,
        password: action.payload,
      };
    case 'change_confirm_password':
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case 'reset':
      return initialState;
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const Registration = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rdispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    )
      return;
    rdispatch(registerUser(state));
    navigate('/menu');
  };

  return (
    <div className="px-4 py-6">
      <p className="mb-4 text-center text-sm text-stone-600 md:text-base">
        {' '}
        👋 Welcome! Please start by creating an account:
      </p>
      <form
        onSubmit={handleSubmit}
        className="rounded-md bg-stone-300 px-6 py-6"
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="first-name">
            First name
          </label>
          <div className="grow">
            <input
              placeholder="John"
              id="first-name"
              name="first-name"
              value={state.firstName}
              onChange={(e) => {
                dispatch({
                  type: 'change_first_name',
                  payload: e.target.value,
                });
              }}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="last-name" className="sm:basis-40">
            Last name
          </label>
          <div className="grow">
            <input
              placeholder="Doe"
              id="last-name"
              name="last-name"
              value={state.lastName}
              onChange={(e) => {
                dispatch({
                  type: 'change_last_name',
                  payload: e.target.value,
                });
              }}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="email" className="sm:basis-40">
            Email
          </label>
          <div className="grow">
            <input
              placeholder="john@example.com"
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: 'change_email',
                  payload: e.target.value,
                });
              }}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="password" className="sm:basis-40">
            Password
          </label>
          <div className="grow">
            <input
              id="password"
              name="password"
              type="password"
              value={state.confirmPassword}
              onChange={(e) => {
                dispatch({
                  type: 'change_confirm_password',
                  payload: e.target.value,
                });
              }}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="confirm-password" className="sm:basis-40">
            Confirm Password
          </label>
          <div className="grow">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              value={state.password}
              onChange={(e) => {
                dispatch({
                  type: 'change_password',
                  payload: e.target.value,
                });
              }}
              className="input w-full"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-row-reverse">
          <Button type="primary">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
