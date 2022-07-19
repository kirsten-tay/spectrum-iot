import Image from 'next/image'

import  {ButtonLink}  from '../src/components/Button'
import  {Container}  from '../src/components/Container'
import logoLaravel from '../images/logo/laravel.svg'
import logoMirage from '../images/logo/mirage.svg'

export function Hero() {
  return (
    
  <div className='.bg'>
    <Container className="pt-20 pb-16  text-center lg:pt-32">
      <h1 className=" flex justify-center   mx-auto  max-w-6xl font-display text-7xl  font-medium tracking-tight text-slate-900 sm:text-7xl">
      Power Better Decisions with 
{' '}</h1>
       
        <h1 className=" flex  justify-center  mx-auto  max-w-3xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        Industry-leading technology

      </h1>
      <h5 className="mx-auto mt-6 max-w-7xl text-lg tracking-tight text-slate-700">
      We’re accelerating digital transformation for the insurance and 
      automotive industries with our AI, IoT and workflow solutions.


      </h5>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="/register">How it works</ButtonLink>
        <ButtonLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">How it works</span>
        </ButtonLink>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display .bg text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        
               
          
         
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src={logoMirage}
                  alt="Mirage"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src={logoLaravel}
                  alt="Laravel"
                  layout="fixed"
                  unoptimized
                />
              </li>
              
            </ul>
            </li>
        
      </div>
    </Container>
    </div>
  )
}
