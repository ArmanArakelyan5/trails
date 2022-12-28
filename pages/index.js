import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomePage from "../components/homePage/homePage";
import Studio from "../components/studio/studio";
import Offers from "../components/offers/offers";
import InstallNow from "../components/installNow/installNow";
import OurTrails from "../components/ourTrails/ourtrails";
import Partners from "../components/partners/partners";
import Contact from "../components/contacts/contacts";
import Faq from "../components/faq/faq";
import Footer from "../components/footer/footer";


export default function Home() {
  return (
    <>
        <HomePage/>
        <Studio/>
        <Offers/>
        <InstallNow/>
        <OurTrails/>
        <Partners/>
        <Contact/>
        <Faq/>
        <Footer/>
    </>
  )
}
