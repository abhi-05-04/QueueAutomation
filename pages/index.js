import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer'
import About from '../components/about'

export default function Home({ userInfo }) {
  // console.log("-> "+userInfo);
  return (
    <div>
      <Head><title>Queue - Home</title></Head>
      <Nav cook={userInfo}  />
      {/* user={userInfo == undefined ? "login" : userInfo.fname} */}
      {/* <div>
        <Slider />
        <br />
        <br />


      </div> */}
      <About />
      <br />
      <Footer />


    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  let cook = req.cookies.user;
  // console.log("hello"+req.cookies.user);
  if (cook == undefined) {
    return { props: { userInfo: "" } }
  }
  else {
    // await fetch(`http://localhost:3000/api/userInfo?admin=${cook}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(async (data) => {
    //     await data.json().then((result)=>{
    //       console.log(result);
    //       return { props: {result} }
    //     })
    //     .catch((err)=>{
    //       console.log(err);
    //     })
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // const response = await userInfo.json();
    // console.log(userInfo);
    return { props: { userInfo: cook, cook: cook } }
  }



}
