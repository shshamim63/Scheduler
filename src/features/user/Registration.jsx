import { useReducer } from 'react';
import Button from '../../ui/Button';

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-center text-sm text-stone-600 md:text-base">
        {' '}
        👋 Welcome! Please start by creating an account:
      </p>
      <div className="text-center">
        <div className="my-1">
          <label htmlFor="first-name">First name</label>
          <div>
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
              className="input mb-3"
            />
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="last-name">Last name</label>
          <div>
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
              className="input mb-3"
            />
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="email">Email address</label>
          <div>
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
              className="input mb-3"
            />
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="password">Password</label>
          <div>
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
              className="input mb-3"
            />
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <div>
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
              className="input mb-3"
            />
          </div>
        </div>
        <div className="mt-8">
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
