import { authOptions } from "@/lib/authOptions"
import NextAuth, { getServerSession } from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

export const getAuthSession = async() =>{
    const session = await getServerSession(authOptions)
    return session ;
  }