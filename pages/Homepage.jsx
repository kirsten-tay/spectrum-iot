import React from 'react'
import{ Hero} from '../src/Hero'
import {Footer} from '../src/Footer'
import {Ourservices} from '../src/Ourservices'
import { Aboutus } from '../src/Aboutus'
const Homepage = () => {
    return (
        <>

        <main>
        <Hero/>
     <Ourservices/>
     <Aboutus/>
        </main>
        <Footer/>
        </>
    )

}
export default Homepage;