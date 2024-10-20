'use client'
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"


const LogoutButton = () => {
  return (
    <>
        <Button className="p-1 block w-full" 
        onClick={() => signOut()}>Logout</Button>
    </>
  )
}

export default LogoutButton