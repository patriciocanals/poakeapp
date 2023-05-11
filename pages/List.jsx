import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function List({ response }) {
  const [pokemon,setPokemon] = useState(response)
  const [offset,setOffset] = useState(0)
  const fetchPokemon = async (url,next) => {
    const res = await fetch(url)
    const nexPkmn = await res.json()
    setOffset(next ? offset + 20 : offset - 20)
    setPokemon(nexPkmn);
  }
  return (
    <>
      <Head>
        <title>PokeApp - List</title>
        <meta name="description" content="Generated by Patricio Pellegrini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="bg-dark">
      <h2 className="text-center text-light p-2">List of Pokemon</h2>
      <div className="d-flex justify-content-center gap-2 p-3">
        <button disabled={!pokemon.previous} onClick={ () => fetchPokemon(pokemon.previous)} className="btn btn-primary">Previous</button>
        <button disabled={!pokemon.next} onClick={ () => fetchPokemon(pokemon.next)} className="btn btn-primary">Next</button>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly gap-1">
        {
            pokemon.results.map( (pkmn,index) => (
                <PokemonCard key={index} pokemon={pkmn} index={index + offset}/>
            ))
        }
      </div>
      <div className="d-flex justify-content-center gap-2 p-3">
        <button disabled={!pokemon.previous} onClick={ () => fetchPokemon(pokemon.previous)} className="btn btn-primary">Previous</button>
        <button disabled={!pokemon.next} onClick={ () => fetchPokemon(pokemon.next)} className="btn btn-primary">Next</button>
      </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const response = await res.json();
  return {
    props: {
      response,
    },
  };
}
