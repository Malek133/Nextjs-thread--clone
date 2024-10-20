//http://localhost:3002

import { Button } from "@/components/ui/button";
import { getAuthSession } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getAuthSession();
  // const userEmail = session?.user?.email;
  const name = session?.user?.name;
  return (
    <>
     <p className="my-5">
      {name ? `User : ${name}` : "No user logged in"}</p>
    <p className="text-center my-7">Hello Alphazero</p>
    <Button>Clike Her</Button>
    </>
  );
}
