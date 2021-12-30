import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer'
import About from '../components/about'

export default function Home() {

  return (
    <div>
      <Head><title>Queue - Home</title></Head>
      <Nav />
      <div className='container'>
        <Slider />
        <br />
        <br />


      </div>
      <About />
      <br />
      <Footer />


    </div>
  )
}
