import Image from 'next/image'

import { ButtonLink } from '../src/components/Button'
import { Container } from '../src/components/Container'
import logoLaravel from '../images/logo/laravel.svg'
import logoMirage from '../images/logo/mirage.svg'
import BG from '../images/rm373batch2-04 1.png'


export function Hero() {
  return (

    <div className='relative'>
      <Image src={BG} alt="Laravel"
                  layout="fixed"
                  unoptimized className="h-auto w-full"
      />
      <Container className="pt-20 pb-16 bg-transparent absolute inset-0 flex flex-col items-center justify-center  text-center lg:pt-32 ">
        <h1 className=" flex justify-center   mx-auto  max-w-6xl font-display text-7xl  font-medium tracking-tight text-white sm:text-7xl">
          Power Better Decisions with
          {' '}</h1>

        <h1 className=" flex  justify-center  mx-auto  max-w-3xl font-display text-5xl font-medium tracking-tight text-white sm:text-6xl">
          Industry-leading technology

        </h1>
        <h5 className="mx-auto mt-6 max-w-7xl text-lg tracking-tight text-white">
          We’re accelerating digital transformation for the insurance and
          automotive industries with our AI, IoT and workflow solutions.


        </h5>
        <div className="mt-10 flex justify-center space-x-6">
          <ButtonLink href="/register">

            How it works</ButtonLink>

        </div>


      </Container>
    </div>
  )
}
