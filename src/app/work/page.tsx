import Image from "next/image";
import Dribbble from "/public/images/dribbble-icon.svg";
import ArrowUp from "/public/images/arrow-small-up.png";
import { getAllPosts } from "@/lib/api";
import PostBlock from "../components/post-block";

export default function WorkPage() {
    const allPosts = getAllPosts();

    return (
        <main>
        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
            <h1 className="font-heading font-bold text-4xl text-center leading-tight mt-4 px-4">
                Explore My Work</h1>
            <p className="md:max-w-lg text-xl text-center px-4">From freelance work to academic and personal
                projects, see some of my most recent work below.</p>
            <a className="btn-primary p-[6px] h-fit mb-5 mt-4 animate-bounce">
                <Image className="size-[2rem] rotate-180" src={ArrowUp} alt="Bouncing Arrow"/>
            </a>
        </div>
        <div className="w-full h-2 bg-accent"></div>
        {/* Project Gallery */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 p-10">
            {allPosts.map((post) => (
                <PostBlock key={post.slug} post={post} />
            ))}
        </div>
        <div className="flex justify-center items-center gap-4 px-4">
            <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://dribbble.com/Crater14">
                <Image src={Dribbble} className="size-[1.8rem]" alt="Dribbble Icon"/>
            </a>
            <div>
                <h1 className="font-heading text-xl font-bold">More graphic design work...</h1>
                <h2 className="font-heading">See more of my art on my Dribbble page!</h2>
            </div>
            
        </div>
    </main>
    )
}