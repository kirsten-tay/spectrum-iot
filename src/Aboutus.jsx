import Image from 'next/image'

import { Container } from '../src/components/Container'
import Logos from '../images/Vector.jpg'



export function Aboutus() {
  return (
    <section
      id="Aboutus"
      aria-labelledby="Aboutus-title"
      className="bg-slate-50 py-20 sm:py-32 bg-black "
    >


      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className=" flex justify-center font-display text-4xl  tracking-tight text-white sm:text-4xl"
          >
          When you know us,You love us
          </h2>
          <div className="flex w-full h-full justify-center items-center   rounded-full">
          <Image src={Logos} alt="Laravel"
                  layout="fixed"
                  unoptimized className="h-40 w-full"
      />
              </div>
          <p className="flex justify-center mt-4 text-lg tracking-tight text-white">
            "From residential homes to commercial businesses, a wide range of customers
            depend on Spectrum's connectivity solutions.The company delivers mobile,internet,
            phone and tv services.However,organisations can request more secure connections through
            fibre technology for Ethernet access and other added perks"
          </p>
          <p className='flex justify-right py-3 mt-4 text-lg tracking-tight text-white'>
              ~John K.A Kennedy
          </p>
          
          <p className='flex justify-center py-5 mt-4 text-lg tracking-tight text-white'>
          Meet Our Customers  <span aria-hidden="true" className="text-blue-800">&rarr;</span>        </p>
          
        </div>


      </Container>

    </section>

  )
}