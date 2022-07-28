import Image from 'next/image'

import { Container } from '../src/components/Container'
import { Input } from '../src/components/input'




export function Contact() {
  return (
    <section
      id="Ourservices"
      aria-labelledby="Ourservices-title"
      className="bg-slate-50 py-20 sm:py-20  "
    >


      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
         <h6> Get in touch</h6>
          <h2 className=" flex justify-center font-display text-3xl  tracking-tight text-slate-900 sm:text-4xl" >
          Contact Us          </h2>
           
          <div className="mt-10">
                <div className="mt-6">
                    <form action="#" method="" className="space-y-4">
                    
        
                        <div className="flex flex-col  sm:flex-row sm:space-y-0 sm:space-x-6">
                            <Input
                                placeholder="First Name"
                                id="First Name"
                                name="First Name"
                                type="text"
                                autoComplete="given-First Name"
                                required
                            />
                            <Input
                                placeholder="Last Name"
                                id="Last Name"
                                name="Name"
                                type="text"
                                autoComplete="given-name"
                                required
                            />
                           
                        </div>
                        <Input
                           
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                       <Input
                            placeholder="Message"
                            id="Message"
                            name="Message"
                            type="text"
                            autoComplete="Message"
                            required
                        />
                       
                        
                        <div className="pt-1">
                            <button
                                type="submit"
                                className="w-1/3  border border-transparent bg-slate-900 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                </div>
         </div>

         </Container>

         </section>
         
  )
}