import { useSelector } from 'react-redux';
import Button from './Button';
import { getUserInfo } from '../features/user/userSlice';

const Home = () => {
  const currentUser = useSelector(getUserInfo);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className=" text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {currentUser && (
        <div className="mt-10 space-y-10">
          <p>Welcome 👋 {currentUser.email}</p>
          <Button to="/menu" type="primary">
            Continue ordering
          </Button>
        </div>
      )}
      {!currentUser && (
        <>
          <img className="m-auto w-[70dvh]" src="./home.jpg" />
          <div className="mt-2 space-x-2">
            <Button to="/login" type="primary">
              Login
            </Button>
            <Button to="/signup" type="primary">
              Sign Up
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
