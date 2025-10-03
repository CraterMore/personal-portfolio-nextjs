import Image from "next/image";
import HomeImageSplash from "/public/images/HomeImageSplash.png";
import HeroPage from "/public/images/soft-eng/hero-page.png";
import Github from "/public/images/github.png";
import LinkedIn from "/public/images/linkedin.png";
import Dribbble from "/public/images/dribbble-icon.svg";
import Email from "/public/images/email.png";
import Globe from "/public/images/globe.png";
import NavBar from "./components/nav-bar";
import CarterWordmark from "/public/carter-wordmark.svg";

export default function Home() {
  return (
    <main>
        <section className="md:flex flex-row justify-between px-10">
            <div className="md:max-w-lg self-end">
                <Image className="w-fit h-auto" src={HomeImageSplash} alt="Home Image Splash"/>
            </div>
            <div className="flex flex-col self-center items-center md:items-start md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">
                    Hi, my name is
                    <Image className="w-32 ml-4 -translate-y-1 inline" src={CarterWordmark} alt="Carter"/>
                </h1>
                <p className="text-xl text-center md:text-left">I am a senior at Worcester Polytechnic Institute majoring in Computer Science with a passion for user-focused design. My interests include frontend software engineering, UI/UX design, and product design.</p>
                <a className="btn-primary mb-4 transition ease-in-out duration-150 hover:-translate-y-1" href="/work">Learn more</a>
            </div>
        </section>
        <div className="w-full h-2 bg-accent"></div>


        <div className="my-4 mx-auto md:ml-4 bg-primary rounded-xl border-2 border-r-text text-2xl font-bold font-heading w-fit px-3 py-1">
            Featured Work
        </div>
        <div className="md:flex flex-row justify-between px-10 md:my-6">
            <div className="md:max-w-lg max-w-md mx-auto self-center md:mx-0 md:mr-4 md:my-8  p-2">
                <Image className="w-full h-full object-contain -rotate-3" src={HeroPage} alt="React App for Hospital"/>
            </div>
            <div className="flex flex-col self-center items-center md:items-start md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">React App for Hospital</h1>
                <p className="text-xl text-center md:text-left mb-2">A React web app prototype that was developed in 7 weeks using Agile methodologies for Brigham and Women's Hospital. The project significantly improved my skills in web development, databases, UI/UX, and version control.</p>
                <div className="flex gap-2">
                    <a className="btn-primary mb-4 transition ease-in-out duration-150 hover:-translate-y-1" href="/work/react-hospital-app">Read more</a>
                </div>
                <p className="text-accent mb-4 text-center">React Web Development · Agile Methodology · Design Patterns · UI and UX</p>
            </div>
        </div>
        <div className="w-full h-2 bg-accent"></div>

        <div className="my-4 mx-auto md:mr-4 md:ml-auto bg-primary rounded-xl border-2 border-r-text text-2xl font-bold font-heading w-fit px-3 py-1">
            Links & Social Media
        </div>
        <div className="md:flex flex-row justify-between px-10">
            <div className="flex flex-col self-center items-center md:items-start md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">Wait, don't go!</h1>
                <p className="text-xl text-center md:text-left mb-2">Whether it's software development or branding, let's get to know each other! You can view my work on GitHub and Dribbble, or get in contact via LinkedIn or email.</p>
                <div className="flex gap-2">
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://github.com/CraterMore">
                        <Image src={Github} className="size-[1.8rem]" alt="GitHub"/>
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://www.linkedin.com/in/carter-moore-239954261/">
                        <Image src={LinkedIn} className="size-[1.8rem]" alt="LinkedIn"/>
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://dribbble.com/Crater14">
                        <Image src={Dribbble} className="size-[1.8rem]" alt="Dribbble"/>
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-[44.8px] flex w-fit transition ease-in-out duration-150 hover:-translate-y-1" href="mailto:ctm6704@gmail.com">
                        <Image src={Email} className="size-[1.8rem]" alt="Email"/>
                        <p className="font-semibold px-1 my-auto text-base hidden md:block">ctm6704@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className="md:max-w-md px-12 py-8 object-center my-auto">
                <Image className="object-cover" src={Globe} alt="Globe"/>
            </div>
        </div>
        
    
</main>
  );
}
