
import { getAuthSession } from '@/app/api/auth/[...nextauth]/route';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { getAuthSession } from '@/src/auth/nextauth-option';
import { User2 } from 'lucide-react';
import Link from 'next/link';
 import LogoutButton from './LogoutButton';
 import Image from 'next/image';


export const UserProfile = async () => {
     const session = await getAuthSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
           
          {session?.user.image ? (
            <Image
              src={session.user.image}
              alt={`${session.user.name}'s profile`}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <User2 className="h-5 w-5" />
          )}
          <span className='mx-2'>{session?.user.name || 'User'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className='my-2' asChild>
          <Link href="/profile">
            <User2 className="mr-2 h-4 w-4" />
            Profile
          </Link>
         </DropdownMenuItem>
         
          <LogoutButton /> 
      </DropdownMenuContent> 
    </DropdownMenu>
  );
};