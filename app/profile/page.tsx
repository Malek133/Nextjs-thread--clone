// http://localhost:3000/profile

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React from 'react'

const page = () => {
  return (
    <>
    <div className='text-center my-7 font-semibold'>
      Profile Page
    </div>
    <div className='container'>
       
    <Input /> 
    <Button className='mt-3'>Clike me</Button>
    </div>
    
    </>
    
  )
}

export default page
