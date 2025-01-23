import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
            <div className= "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I am Abhishek </p>
                            <p className="grid-subtext">With 2 years of experience , I honed my skills  in full-stack development utilizing the MERN stack , AI/ML with a focus on animated 3D websites</p>
                        </div>
                    </div>
                </div>
                <div className ="col-span-1 xl:row-span-3">
                    <div className="grid-cointainer">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I  specialize in javascript/typescipt with a focus on React ,AI/ML and Next.js ecosystems </p>
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
                            <p className="grid-subtext">I love solving problems and building things through code</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
