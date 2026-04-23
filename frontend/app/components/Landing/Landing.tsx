import React from 'react'
import landingImg from '@/app/assets/images/landing.png'
import Image from 'next/image';

const Landing = () => {
  return (
    <div className='relative z-0'>
        <Image src={landingImg} alt="landing banner" className='h-[200px] md:h-[300px] xl:h-[400px] object-cover object-center rounded-bl-2xl rounded-br-2xl'></Image>
    </div>
  )
}

export default Landing