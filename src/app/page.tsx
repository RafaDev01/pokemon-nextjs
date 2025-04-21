import Image from "next/image";

import Card from "@/components/Card/Card";

type Pokemon = {
  name: string;
  url: string;
  id: number;
};

async function getPokemons(): Promise<Pokemon[]> {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const pokemons = data.results.map(
    (item: { name: string; url: string }, index: number) => ({
      ...item,
      id: index + 1,
    })
  );
  console.log(pokemons);
  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-center text-red-500">
          Poke<span className="text-black">Next</span>
        </h1>
        <Image src="/images/pokeball.png" width={50} height={50} alt="PokeNext" />
      </div>
      <div className="flex px-8 pb-6">
        <ul className="flex flex-wrap space-x-1 justify-between">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </main>
  );
}