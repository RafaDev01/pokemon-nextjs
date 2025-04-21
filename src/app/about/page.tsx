import Image from "next/image";

export default function About() {
    return (
        <main className="h-[calc(100vh-5rem)] flex justify-center items-center flex-col">
            <h1 className="mb-2">Sobre o projeto</h1>
            <p className="w-2xl leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit omnis hic maiores, necessitatibus eum expedita ullam perspiciatis officia, cupiditate tempora minus sequi fugiat, assumenda iste reiciendis iusto minima laudantium.</p>
            <Image
                src="/images/charizard.png"
                width={300} height={300}
                alt="charizard"
            />
        </main>
    );
}