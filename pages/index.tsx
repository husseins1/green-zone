import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutUs, Contact, Landing, Menu, Navbar, SectionBreak } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.home} id="home">
        <Navbar />
        <Landing />

        </section>

        {/* <SectionBreak /> */}
        <AboutUs />
        <Menu />
        <Contact />
      </main>

      
    </div>
  )
}

export default Home
