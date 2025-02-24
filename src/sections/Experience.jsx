import React from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../Constants/index.js";
import {CanvasLoader} from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <div className="work-cointainer">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <orbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3}/>
                            </suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id,name, pos, icon, duration, title, animation}) => (
                                    <div key={id} className="work-content_container group">
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                <img src={icon} alt="logo" className="w-full h-full"/>
                                            </div>
                                            <div className="work-content_bar"/>
                                        </div>
                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className="font-bold text-white-800">{name}</p>
                                            <p className="text-sm mb-5">{pos}--{duration}</p>
                                            <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
