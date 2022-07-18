import Image from 'next/image'

import  {Container } from '../src/components/Container'


export function Testimonials() {
    return (
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 py-20 sm:py-32 bg-testimonials "
      >
         
      
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2
              id="testimonials-title"
              className="font-display text-3xl  tracking-tight text-white sm:text-4xl"
            >
              Loved by businesses worldwide.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>


</Container>

</section>

    )
}