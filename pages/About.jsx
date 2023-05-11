import Head from "next/head"
import Header from "./components/Header"
import styles from '../styles/About.module.css'
export default function List(){
    return(
        <>  
            <Head>
                <title>PokeApp - About</title>
                <meta name="description" content="Generated by Patricio Pellegrini" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <div className="bg-dark">
                <h1>About this Project</h1>
            </div>
        </>
    )
}