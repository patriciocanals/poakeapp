import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Neucha } from "next/font/google";

const neucha = Neucha({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeApp - Home</title>
        <meta name="description" content="Generated by Patricio Pellegrini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section
        class={`${styles.sectionHeader} d-flex justify-content-center align-items-center flex-column`}
      >
        <div className="d-flex flex-row align-items-center justify-content-center flex-wrap">
          <Image
            className={`${styles.fadePokeball}`}
            src="logo.svg"
            width="300"
            height="300"
            alt="pokeball"
          />
          <h1 className={`${styles.fadeText} ${neucha.className} text-center`}>
            Welcome to the PokeApp
          </h1>
        </div>
        <div className="w-100 text-center">
          <Link href="/List">
            <button className={`${styles.btnList} btn btn-primary btn-lg m-3`}>
              Lista
            </button>
          </Link>
          <Link href="/About">
            <button className={`${styles.btnAbout} btn btn-primary btn-lg m-3`}>
              About
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
