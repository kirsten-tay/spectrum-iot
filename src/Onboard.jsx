import Image from 'next/image'

import { Container } from '../src/components/Container'
import { ButtonLink } from '../src/components/Button'
import Logos from '../images/Vector.jpg'



export function Onboard() {
  return (
    <section
      id="Onboard"
      aria-labelledby="Onboard-title"
      className="bg-slate-50 py-20 sm:py-32 bg-black "
    >


      <Container>
        <div className=" mx-auto max-w-2xl md:text-left items-left  ">
            <Image src={Logos} className="h-40 w-full"/>
          <h1  id="onboard-title"
            className=" flex font-medium text-7xl font-display  text-white sm:text-4xl" >
             Bring everyone and everything together on Spectrum          </h1>
          
             <div className="mt-10 flex  space-x-6">
              <ButtonLink href="/">

              Join us</ButtonLink>
              </div>

         
        </div>


      </Container>

    </section>

  )
}