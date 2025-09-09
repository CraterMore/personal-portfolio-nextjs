import Image from "next/image";
import HeroPage from "/public/images/soft-eng/hero-page-cropped.png";
import WordleScreenshot from "/public/images/wordleScreenshot.jpeg";
import Advertisement from "/public/images/Advertisement.png";
import Dribbble from "/public/images/dribbble-icon.svg";
import ArrowUp from "/public/images/arrow-small-up.png";

export default function WorkPage() {
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
            <a className="group md:block bg-secondary-gray bg-center md:bg-none bg-cover bg-[url('/../images/soft-eng/hero-page-cropped.png')] rounded-3xl overflow-clip border-4 border-text transition-shadow ease-linear hover:shadow-2xl duration-200" href="/work/hospital-app.html">
                <Image src={HeroPage} className="hidden md:block h-48 w-full object-cover md:group-hover:saturate-150" alt="React Web App for Hospital"/>
                <div className="flex flex-col px-3 py-3 gap-4 md:bg-opacity-100 bg-primary-gray bg-opacity-85">
                    <div className="bg-primary rounded-lg border-2 border-r-text text-md font-bold font-heading w-fit px-2">
                        Programming
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-left leading-tight">
                        React Web App for Hospital</h2>
                    <p className="text-lg text-left -translate-y-2">A React-Typescript web app developed in CS3733 Software Engineering over 7 weeks.</p>
                </div>
            </a> 
            <a className="group md:block bg-primary-gray bg-center md:bg-none bg-cover bg-[url('/../images/wordleScreenshot.jpeg')] rounded-3xl overflow-clip border-4 border-text transition-shadow ease-linear hover:shadow-2xl duration-200" href="/work/your-wordle.html">
                <Image src={WordleScreenshot} className="hidden md:block h-48 w-full object-cover md:group-hover:saturate-150" alt="Your Wordle Web App"/>
                <div className="flex flex-col px-3 py-3 gap-4 md:bg-opacity-100 bg-primary-gray bg-opacity-85">
                    <div className="bg-primary rounded-lg border-2 border-r-text text-md font-bold font-heading w-fit px-2">
                        Programming
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-left leading-tight">
                        Your Wordle Web App</h2>
                    <p className="text-lg text-left -translate-y-2">My first web app project that lets you play Wordle with a twist. Included database management, API calls, routing, and users.</p>
                </div>
            </a> 
            <a className="group md:block bg-secondary-gray bg-center md:bg-none bg-cover bg-[url('/../images/Advertisement.png')] rounded-3xl overflow-clip border-4 border-text transition-shadow ease-linear hover:shadow-2xl duration-200" href="/work/therapeutic-innovations.html">
                <Image src={Advertisement} className="hidden md:block h-48 w-full object-cover md:group-hover:saturate-150" alt="Therapeutic Innovations Rebranding"/>
                <div className="flex flex-col px-3 py-3 gap-4 md:bg-opacity-100 bg-secondary-gray bg-opacity-85">
                    <div className="bg-secondary rounded-lg border-2 border-r-text text-md font-bold font-heading w-fit px-2">
                        Graphic Design
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-left leading-tight">
                        Therapeutic Innovations Rebranding</h2>
                    <p className="text-lg text-left -translate-y-2">Developing a comprehensive brand identity for a medical device start-up.</p>
                </div>
            </a> 
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