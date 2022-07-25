import Image from 'next/image'

import { Container } from '../src/components/Container'


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

        </div>

      </Container>  

    
    </section>

  )
}