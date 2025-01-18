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
            </div>
        </section>
    )
}
export default About
