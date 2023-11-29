import { useSelector } from 'react-redux';
import { getUserContext } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useEffect } from 'react';

const Instruction = () => {
  const { userInfo, status } = useSelector(getUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo?.email && status === 'idle') navigate('/');

    if (!userInfo) navigate('/');
  }, [userInfo, status, navigate]);

  return (
    <div className="mt-[30dvh] space-y-10 px-4 py-6 text-center">
      <p className="text-sm text-stone-500">
        Please verify your email before continue, we have sent you an email
      </p>
      <Button to="/login" type="primary">
        Login
      </Button>
    </div>
  );
};

export default Instruction;
