import React from 'react'
import{ Hero} from './Hero'
import {Footer} from './Footer'
import {Ourservices} from './Ourservices'
import { Aboutus } from './Aboutus'
import {Latest} from './Latest'
import { Onboard } from './Onboard'
import { Contact } from './Contact'
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