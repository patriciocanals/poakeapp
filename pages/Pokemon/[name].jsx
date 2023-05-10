import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/pokemonPage.module.css'

export default function Pokemon({response}){
    console.log(response);
    const renderTypes = ()=> (
        response.types.map(type => (
            <div key={type.slot} className={`d-flex justify-content-center gap-2 align-items-center text-uppercase p-1 my-1 w-25 text-center shadow border border-light rounded text-light ${type.type.name}`}>
                <Image unoptimized src={`https://storage.googleapis.com/nianticweb-media/pokemongo/types/${type.type.name}.png?cb=1`} height={40} width={40} alt="logotype"/>
                <div>
                    {type.type.name}
                </div>
            </div>
        ))
    )
    const renderStats = () => (
        response.stats.map( (stat,index) => (
            <div key={index} className="bg-light p-2 mb-2 rounded opacity-25">
                <span className={`text-uppercase text-white fw-bold rounded p-1 bg-dark w-${stat.base_stat} opacity-100`}>
                {stat.stat.name} - {stat.base_stat}
                </span>
            </div>
        ))
    )
    const renderAbilities = () => (
        response.abilities.map ( (ability,index)=> (
            <div key={index} className="text-uppercase p-2 my-3 text-center border border-light rounded text-light" >
                {ability.ability.name}
            </div>
        ) )
    )
    return(<>
        <Head>
            <title>PokeApp - {response.name}</title>
        </Head>
        <div className={`mainPage p-3 ${response.types[0].type.name}`}>
            <div className="headerPokemon text-light p-1 d-flex justify-content-between align-items-center">
                <Link href="/" className="text-decoration-none text-light shadow rounded p-2">INICIO</Link>
                <h1 className="text-uppercase">{response.name}</h1>
                <Link href="/List" className="text-decoration-none text-light text-light shadow rounded p-2">LISTA</Link>
            </div>
            <div className="d-flex justify-content-center" >
                <Image src={response.sprites.other.dream_world.front_default} width={290} height={290} alt={response.name}/>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-1">
                {renderTypes()}
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-evenly align-items-center w-90">
                <div className={`card p-1 mt-3 bg-transparent shadow-lg ${styles.card}`}>
                    <div className="card-header text-center text-light">Abilities</div>
                    <div className="card-body d-flex flex-column justify-content-evenly">{renderAbilities()}</div>
                </div>
                <div className={`card p-1 mt-3 bg-transparent shadow-lg ${styles.card}`}>
                    <div className="card-header text-center text-light">Stats</div>
                    <div className="card-body">{renderStats()}</div>
                </div>
            </div>
        </div>
    </>)
}
export async function getServerSideProps(context) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`);
    const response = await res.json();
    return {
      props: {
        response,
      },
    };
  }