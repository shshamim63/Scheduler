import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex h-[100dvh] w-full justify-center bg-slate-500">
      <div className="w-3/4 space-y-5 self-center text-center lg:w-8/12">
        <h1 className="bg-indigo-950 text-base font-semibold text-white lg:text-2xl ">
          Something went wrong 😢
        </h1>
        <div className="mx-auto w-11/12 bg-slate-900 p-4">
          <img src="/error.jpg" className="w-full" />
        </div>
        <p className="bg-slate-600 text-red-300">
          {error.data || error.message}
        </p>
        <LinkButton to="-1" type="customButton">
          &larr; Go Back
        </LinkButton>
      </div>
    </div>
  );
};

export default Error;
