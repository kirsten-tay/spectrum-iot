import React from 'react'
import{ Hero} from '../src/Hero'
import {Footer} from '../src/Footer'
import {Ourservices} from '../src/Ourservices'
const Homepage = () => {
    return (
        <>

        <main>
        <Hero/>
       <Ourservices/>
        </main>
        <Footer/>
        </>
    )

}
export default Homepage;