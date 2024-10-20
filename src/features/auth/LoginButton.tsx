'use client';

import { Button } from '@/components/ui/button';
// import { Loader } from '@/components/ui/loader';
 import { LogIn } from 'lucide-react';
 import { signIn } from 'next-auth/react';
// import useSWRMutation from 'swr/mutation';

export const LoginButton = () => {
//   const { trigger, isMutating } = useSWRMutation('auth', signIn);

  return (
    <Button
              onClick={() => signIn('google')}
              className=" border-0 px-6 py-1">
              <LogIn />
              <span className='text-lg mx-1'>LogIn</span>
            </Button> 
    // <Button 
    //   onClick={() => signIn()} 
    //  size="sm">
    //  {/* {isMutating ? <Loader /> : <LogIn className="mr-2 h-4 w-4" />} */}
    //  <LogIn className="mr-2 h-4 w-4" />
    //  Login
    // </Button>
  );
};