import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import SuperNav from '../components/NavforSuperAdmin'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer'
import About from '../components/about'
import Cookies from 'js-cookie'

export default function Home({ userInfo, cook, date }) {
  // console.log("-> "+userInfo);

  const setDate = async () => {
    const D = new Date();
    let d = D.getDate();
    // d = 16;
    // console.log(date + "  " + d);
    try {
      if (d != date) {
        // console.log("confilct");
        Cookies.set("date", d, { expires: 24 / 24 });
        // await fetch(`/api/deleteList`);
        // console.log("deleted");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setDate();

  }, []);
  return (
    <div>

    
      <Head><title>Queue - Home</title></Head>
      {userInfo == "61ebb855231640c1d2f54c76"?<SuperNav cook={userInfo} />:<Nav cook={userInfo} />}
      {/* <Nav cook={userInfo} /> */}
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
    // await fetch(`https://queue-mu.vercel.app/api/userInfo?admin=${cook}`, {
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
    let date = "";
    if (req.cookies.date != undefined) {
      date = req.cookies.date;
    }
    return { props: { userInfo: cook, cook: cook, date: date } }
  }



}
