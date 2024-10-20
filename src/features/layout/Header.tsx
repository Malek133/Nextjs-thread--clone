

//  import { getAuthSession } from '@/src/auth/nextauth-option';
  import { getAuthSession } from '@/app/api/auth/[...nextauth]/route';
import { LoginButton } from '../auth/LoginButton';
 
import { UserProfile } from '../auth/UserProfile';

import { ThemeToggle } from "@/src/theme/ThemeToggle";


export const Header = async () => {
  
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-background">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Githread</h1>
        <ThemeToggle />
         {session?.user ? <UserProfile /> : <LoginButton />} 
         {/* <LoginButton />   */}
        
        {/* <UserProfile /> */}
      </div>
    </header>
  );
};
