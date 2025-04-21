import Image from "next/image"
import Link from "next/link";

type CardProps = {
    pokemon: {
        name: string;
        url: string;
        id: number;
    };
}

export default function Card({ pokemon: pokemon }: CardProps) {
    return (
        <li className="flex justify-center items-center flex-col border-1 bg-gray-700 border-red-500 rounded-lg p-4 m-2">
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={100}
                height={100}
                alt={pokemon.name}
            />
            <p className="bg-red-500 text-gray-100 rounded px-1">#{pokemon.id}</p>
            <h3 className="text-gray-100 p-2">{pokemon.name}</h3>
            <Link className="bg-white text-gray-500 rounded p-1 text-sm hover:bg-red-500 hover:text-white transition-all duration-400" href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </li>
    )
}