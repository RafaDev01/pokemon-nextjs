import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <nav className="flex justify-between bg-gray-700 p-2 text-white">
            <div className="flex justify-between items-center self-center text-center">
                <Image src={"/images/pokeball.png"} height={30} width={30} alt="PokeNext" />
                <h1>PokeNext</h1>
            </div>
            <ul className="flex items-center gap-4">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="mr-4">
                    <Link href={"/about"}>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}