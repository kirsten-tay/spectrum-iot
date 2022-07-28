import React from 'react'
import{ Hero} from '../src/Hero'
import {Footer} from '../src/Footer'
import {Ourservices} from '../src/Ourservices'
import { Aboutus } from '../src/Aboutus'
import {Latest} from '../src/Latest'
import { Onboard } from '../src/Onboard'
import { Contact } from '../src/Contact'
const Homepage = () => {
    return (
        <>

        <main>
        <Hero/>
     <Ourservices/>
     <Aboutus/>
     <Latest/>
     <Onboard/>
     <Contact/>
        </main>
        <Footer/>
        </>
    )

}
export default Homepage;