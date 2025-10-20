import Image from "next/image"
import Github from "/public/images/github.png";
import LinkedIn from "/public/images/linkedin.png";
import Dribbble from "/public/images/dribbble-icon.svg";
import Email from "/public/images/email.png";
import Globe from "/public/images/globe.png";
import CKHeadshot from "/public/images/CK-headshot.jpg";

export default function AboutPage() {
    return (
        <main>
        <div className="md:flex flex-row justify-center gap-12 px-10">
            <div className="md:max-w-md self-center p-4">
                <Image className="m-auto md:w-auto w-2/3 aspect-square lg:max-h-64 object-cover rounded-full border-2 border-text" src={CKHeadshot} alt="Headshot"/>
            </div>
            <div className="flex flex-col self-center items-center md:items-start md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">
                    About Me</h1>
                <p className="text-xl text-center md:text-left">I am a senior at Worcester Polytechnic Institute majoring
                    in Computer Science with a minor in Management Information Systems. I am also a 
                    freelance graphic designer who enjoys branding projects and
                    product design. I would love to hear about your next project!
                </p>
                <a className="btn-primary mt-2 mb-5 transition ease-in-out duration-150 hover:-translate-y-1" href="/work">View Projects →</a>
            </div>
        </div>
        <div className="w-full h-2 bg-accent"></div>
        {/* Experience and Activities */}
        <div className="my-4 mx-auto md:ml-4 bg-primary rounded-xl border-2 border-r-text text-2xl font-bold font-heading w-fit px-3 py-1">
            Experience
        </div>
        <div className="md:flex flex-row justify-between px-10">
            {/* Experience */}
            <div className="md:max-w-xl max-w-lg flex flex-col gap-3 mx-auto md:mx-0">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">Work</h1>
                <div className="min-h-16 flex items-center">
                    <div className="font-heading text-2xl text-right min-w-36">
                        2023-Now
                    </div>
                    <div className="self-stretch w-1 bg-secondary mx-2 rounded-full"></div>
                    <div className="">
                        <p className="font-body text-xl font-normal leading-6">Student Tour Guide</p>
                        <p className="font-body text-lg italic font-light leading-4">WPI Crimson Key</p>
                    </div>
                </div>
                <div className="min-h-16 flex items-center">
                    <div className="font-heading text-2xl text-right min-w-36">
                        2025
                    </div>
                    <div className="self-stretch w-1 bg-secondary mx-2 rounded-full"></div>
                    <div className="">
                        <p className="font-body text-xl font-normal leading-6">Software Engineer Intern</p>
                        <p className="font-body text-lg italic font-light leading-4">Genesys</p>
                    </div>
                </div>
                <div className="min-h-16 flex items-center">
                    <div className="font-heading text-2xl text-right min-w-36">
                        2024
                    </div>
                    <div className="self-stretch w-1 bg-secondary mx-2 rounded-full"></div>
                    <div className="">
                        <p className="font-body text-xl font-normal leading-6">Engineering & Marketing Intern</p>
                        <p className="font-body text-lg italic font-light leading-4">CELLTREAT Scientific Products</p>
                    </div>
                </div>
                <div className="min-h-16 flex items-center">
                    <div className="font-heading text-2xl text-right min-w-36">
                        2023-24
                    </div>
                    <div className="self-stretch w-1 bg-secondary mx-2 rounded-full"></div>
                    <div className="">
                        <p className="font-body text-xl font-normal leading-6">Branding Consultant / Graphic Designer</p>
                        <p className="font-body text-lg italic font-light leading-4">Therapeutic Innovations</p>
                    </div>
                </div>
                <div className="min-h-16 flex items-center">
                    <div className="font-heading text-2xl text-right min-w-36">
                        2023
                    </div>
                    <div className="self-stretch w-1 bg-secondary mx-2 rounded-full"></div>
                    <div className="">
                        <p className="font-body text-xl font-normal leading-6">Branding & Design Lead</p>
                        <p className="font-body text-lg italic font-light leading-4">WPI - MeDHigh Summer Program</p>
                    </div>
                </div>
            </div>
            {/* Activities */}
            <div className="flex flex-col items-center md:items-end md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-right leading-tight mt-4">Activities</h1>
                <div className="flex items-right flex-col">
                    <div>
                        <p className="font-body text-xl font-normal text-right leading-none">WPI Engineers Without Borders</p>
                        <p className="font-body text-lg italic text-right font-light">President (prev. Fundraising Chair)</p>
                        <div className="w-full h-1 bg-secondary my-2 rounded-full"></div>
                    </div>
                    <div>
                        <p className="font-body text-xl font-normal text-right leading-none">WPI Computer Science Dept.</p>
                        <p className="font-body text-lg italic text-right font-light">Peer Mentor & Ambassador</p>
                        <div className="w-full h-1 bg-secondary my-2 rounded-full"></div>
                    </div>
                    <div>
                        <p className="font-body text-xl font-normal text-right leading-none">Association of Computing Machinery</p>
                        <p className="font-body text-lg italic text-right font-light">Member</p>
                        <div className="w-full h-1 bg-secondary my-2 rounded-full"></div>
                    </div>
                    <div>
                        <p className="font-body text-xl font-normal text-right leading-none">Tea Club</p>
                        <p className="font-body text-lg italic text-right font-light">Member</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-accent my-4 text-center px-5">Detail-Oriented · Team Coordination & Leadership · Organized · Quick Learner</p>
        <div className="w-full h-2 bg-accent"></div>
        {/* Links & Social Media */}
        <div className="my-4 mx-auto md:mr-4 md:ml-auto bg-primary rounded-xl border-2 border-r-text text-2xl font-bold font-heading w-fit px-3 py-1">
            Links & Social Media
        </div>
        <div className="md:flex flex-row justify-between px-10">
            <div className="flex flex-col self-center items-center md:items-start md:max-w-xl gap-3">
                <h1 className="font-heading font-bold text-4xl text-center md:text-left leading-tight mt-4">Contact Me</h1>
                <p className="text-xl text-center md:text-left mb-2">Whether it's branding or software development, let's get to know each other! You can view my work on GitHub and Dribbble, or get in contact via LinkedIn or email.</p>
                <div className="flex gap-2">
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://github.com/CraterMore">
                        <Image src={Github} className="size-[1.8rem]" alt="GitHub" />
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://www.linkedin.com/in/carter-moore-239954261/">
                        <Image src={LinkedIn} className="size-[1.8rem]" alt="LinkedIn" />
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-fit transition ease-in-out duration-150 hover:-translate-y-1" href="https://dribbble.com/Crater14">
                        <Image src={Dribbble} className="size-[1.8rem]" alt="Dribbble" />
                    </a>
                    <a className="btn-primary p-[6px] m-0 h-[44.8px] flex w-fit transition ease-in-out duration-150 hover:-translate-y-1" href="mailto:ctm6704@gmail.com">
                        <Image src={Email} className="size-[1.8rem]" alt="Email" />
                        <p className="font-semibold px-1 my-auto text-base hidden md:block">ctm6704@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className="md:max-w-md px-12 py-8 object-center my-auto">
                <Image className="object-cover" src={Globe} alt="Globe" />
            </div>
        </div>
    </main>
    )
}