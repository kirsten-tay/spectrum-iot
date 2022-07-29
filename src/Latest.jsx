import Image from 'next/image'

import { Container } from '../src/components/Container'
import Lat1 from '../images/latest1.png'
import Lat2 from '../images/latest2.png'
import Lat3 from '../images/latest3.png'


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
            className=" flex justify-center font-bold text-4xl  tracking-tight text-slate-700 sm:text-4xl"
          >
            The latest from Spectrum
          </h2>

        </div>
        <ul className="flex mx-auto bg-slate-100 mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none  lg:grid-cols-3">
          <div className=" relative    p-6 shadow-slate-900/10">
            <Image src={Lat1} alt="latest" />
            <span className="text-lg leading-6  py-6  text-slate-900">
              We’re accelerating digital transformation for the insurance and
              automotive industries with our AI, IoT and workflow solutions.</span>
            <p className="py-5">Learn More <span aria-hidden="true" className="text-blue-800">&rarr;</span>
            </p>

          </div>

          <div className=" relative    p-6 shadow-slate-900/10">
            <Image src={Lat2} alt="latest2" />
            <span className="text-lg  py-6  text-slate-900">
              We’re accelerating digital transformation for the insurance and
              automotive industries with our AI, IoT and workflow solutions.</span>
            <p className="py-5">Learn More <span aria-hidden="true" className="text-blue-800">&rarr;</span>
            </p>

          </div>

          <div className=" relative    p-6 shadow-slate-900/10">
          <Image src={Lat3} alt="latest3" />
            <span className="text-lg  py-6  text-slate-900">
              We’re accelerating digital transformation for the insurance and
              automotive industries with our AI, IoT and workflow solutions.</span>
            <p className="py-5">Learn More  <span aria-hidden="true" className="text-blue-800">&rarr;</span>
            </p>

          </div>


        </ul>
      </Container>


    </section>

  )
}