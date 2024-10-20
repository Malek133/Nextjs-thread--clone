
import GithubProvider from "next-auth/providers/github"
import { env } from "../src/env"
import { AuthOptions, getServerSession } from "next-auth"
import { prisma } from "./prisma"
import {PrismaAdapter} from '@next-auth/prisma-adapter'


export const authOptions:AuthOptions = {
  adapter:PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
   
  ],
  callbacks:{
    session({session,user}){
      if(!session?.user) return session;
      session.user.id =user.id
      return session
    }
  }
}

export const getAuthSession = async() =>{
  const session = await getServerSession(authOptions)
  return session ;
}

