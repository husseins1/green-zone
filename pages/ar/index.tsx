import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutUs, Contact, Landing, Menu, Navbar } from '../../components'
import styles from '../../styles/HomeAr.module.css'

const Home: NextPage = () => {
    return (
        <div dir='rtl' className={styles.container}>
            <Head>
                <title>Green Zone</title>
                <meta name="description" content="مطعم كرين زون اكثر من مجرد سلط. في النجف الاشرف سارع واطلب" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.home} id="home">
                    <Navbar lang={"ar"} />
                    <Landing lang={"ar"} />

                </section>

                {/* <SectionBreak /> */}
                <AboutUs lang={"ar"} />
                <Menu lang={"ar"} />
                <Contact lang={"ar"} />
            </main>


        </div>
    )
}

export default Home
