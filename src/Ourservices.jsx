import Image from 'next/image'

import { Container } from '../src/components/Container'


export function Ourservices() {
  return (
    <section
      id="Ourservices"
      aria-labelledby="Ourservices-title"
      className="bg-slate-50 py-20 sm:py-32  "
    >


      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="Ourservices-title"
            className=" flex justify-center font-display text-3xl  tracking-tight text-slate-900 sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="flex justify-center mt-4 text-lg tracking-tight text-slate-800">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>

          <ul className="flex mx-auto  mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none  lg:grid-cols-3">
            <li className=" relative  rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
            <div className=" h-20 w-20 items-center   rounded-full bg-slate-500">
              .
              </div>
              <p className="text-lg tracking-tight py-6  text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</p>

            </li>

            <li className=" relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
            <div className=" h-20 w-20 items-center  rounded-full bg-slate-500">
              .
              </div>
              <p className="text-lg tracking-tight py-6 text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</p>

            </li>

            <li className=" relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
            <div className=" h-20 w-20 items-center rounded-full bg-slate-500">
              .
              </div>
              <p className="text-lg tracking-tight py-6 text-slate-900">
                We’re accelerating digital transformation for the insurance and
                automotive industries with our AI, IoT and workflow solutions.</p>

            </li>

          </ul>
        </div>


      </Container>

    </section>

  )
}