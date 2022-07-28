import Image from 'next/image'

import { Container } from '../src/components/Container'
import {Lat1} from '../images/Vector.png'


export function Latest() {
  return (
    <section
      id="Aboutus"
      aria-labelledby="Aboutus-title"
      className="bg-slate-50 py-20 sm:py-32 "
    >
       <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className=" flex justify-center font-display text-4xl  tracking-tight text-slate-700 sm:text-4xl"
          >
          The latest from Spectrum
          </h2>

        </div>
        <ul className="flex mx-auto bg-red-500 mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none  lg:grid-cols-3">
        <div className=" relative    p-6 shadow-slate-900/10">
         
              <span className="text-lg  py-6  text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</span>
                <p className="py-5">Learn More </p>

        </div>

         <div className=" relative    p-6 shadow-slate-900/10">

              <span className="text-lg  py-6  text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</span>
                <p className="py-5">Learn More </p>

        </div>

        <div className=" relative    p-6 shadow-slate-900/10">

              <span className="text-lg  py-6  text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</span>
                <p className="py-5">Learn More </p>

        </div>


      </ul>
      </Container>  

    
    </section>

  )
}