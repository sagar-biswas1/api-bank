"use client"

import { FC, useState } from 'react'
import Button from './ui/Button'
import { signIn, signOut } from 'next-auth/react'

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
const [isLoading,setIsLoading] = useState<boolean>(false)

const signUserOut = async () => {
    setIsLoading(true)
    try{
        await signOut()
    }catch(err){
        // toast({
        //     title:"Error signing in",
        //     message:"Please try again",
        //     type:"error"
        // })
    }
}

  return <Button onClick={signUserOut}  isLoading={isLoading} >
    Sign out
  </Button>
}

export default SignOutButton