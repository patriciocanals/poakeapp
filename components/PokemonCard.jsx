import styles from '../styles/Card.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function PokemonCard({pokemon}) {
  return (
    <>  
        <Link href={`/Pokemon/${pokemon.name}`} className=' text-decoration-none'>
            <div className={`card text-white mb-3 p-1 ${styles.card} bg-secondary`}>
            <div className="card-header text-uppercase text-center">{pokemon.name}</div>
            <div className="card-body d-flex justify-content-around">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image unoptimized src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`} height={100} width={130} alt={pokemon.name}/>
                </div>
            </div>
            </div>
        </Link>
    </>
  );
}
