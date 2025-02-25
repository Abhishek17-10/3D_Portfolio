import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('abhishekyadav2773@gmail.com');

        setHasCopied(true);

        setTimeout(() =>{
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className= "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I am Abhishek </p>
                            <p className="grid-subtext">Web developer specializing in Three.js 3D animations and interactive experiences. Currently expanding into data analytics with PowerBI and Tableau to create visually compelling, data-driven web applications that transform complex information into intuitive experiences.</p>
                        </div>
                    </div>
                </div>
                <div className ="col-span-1 xl:row-span-3">
                    <div className="grid-cointainer">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Skilled developer specializing in JavaScript/TypeScript with advanced expertise in React and Three.js for creating sophisticated 3D visualizations and interactive web experiences. </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[
                                {lat: 27, lng: 74, text:"I'm here", color:'white', size:30,}
                            ]} />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely  across most timezones
                            </p>
                            <p className="grid-subtext">I'm based in India, with remote work available</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for Coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code and Driven by a passion for coding and continuous learning, I actively expand my expertise beyond web development into data analytics. My current focus on PowerBI and data visualization techniques reflects my commitment to creating meaningful visual narratives from complex data sets, combining technical expertise with creative problem-solving</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/check.svg' : 'assets/copy.svg'} alt="copy" className="w-6 h-6"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">abhishekyadav2773@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
