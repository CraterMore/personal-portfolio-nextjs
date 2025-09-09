import Image from "next/image";
import AvatarLarge from "/public/images/avatar_large.png";

export default function NavBar() {
    return (
        <nav className="h-16 flex items-center justify-between px-4 w-full sticky top-0 bg-background z-10">
            <a className="flex flex-row items-center gap-2" href="/">
                <Image className="h-12 w-12" src={AvatarLarge} alt="Carter Moore"/>
                <p className="font-logo pt-1 hover:font-bold transition-all">CARTER MOORE</p>
            </a>
            <ul className="flex flex-row gap-12 md:translate-y-1">
                <li className="group">
                    <a className="font-heading transition-colors ease-in-out duration-300 group-hover:text-accent" href="/work">Work
                    </a>
                    <div className="w-0 h-[2px] bg-accent transition-width ease-in-out duration-300 group-hover:w-full"></div>
                </li>
                <li className="group">
                    <a className="font-heading transition-colors ease-in-out duration-300 group-hover:text-accent" href="/about">About</a>
                    <div className="w-0 h-[2px] bg-accent transition-width ease-in-out duration-300 group-hover:w-full"></div>
                </li>
            </ul>
        </nav>
    );
}