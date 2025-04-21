import Image from "next/image";
import styles from './styles.module.css';

type PokemonResult = {
    name: string;
    url: string;
};

export async function generateStaticParams() {
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon";

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    return data.results.map((_: PokemonResult, index: number) => ({
        pokemon: (index + 1).toString(),
    }));
}

// ✅ CORREÇÃO: Tipagem com Promise e uso de await
type Props = {
    params: Promise<{
        pokemon: string;
    }>;
};

export default async function PokemonPage({ params }: Props) {
    const { pokemon } = await params;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();

    return (
        <div className="h-[calc(100vh-46px)] flex flex-col items-center justify-center">
            <h1 className="bg-gray-700 text-white px-4 py-2">{data.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                width={100}
                height={100}
                alt={data.name}
            />
            <div className="flex flex-row items-center justify-center">
                <h3>Número:</h3>
                <p>#{data.id}</p>
            </div>
            <div>
                <h3 className="font-bold">Tipo(s):</h3>
                {data.types.map((item: { type: { name: string } }, index: number) => (
                    <span
                        key={index}
                        className={`${styles.type} ${styles['type_' + item.type.name]}`}
                    >
                        {item.type.name}
                    </span>
                ))}
            </div>
            <div className="flex">
                <div className="p-2">
                    <h4 className="font-bold">Altura:</h4>
                    <p>{data.height * 10} cm</p>
                </div>
                <div className="p-2">
                    <h4 className="font-bold">Peso:</h4>
                    <p>{data.weight / 10} kg</p>
                </div>
            </div>
        </div>
    );
}
