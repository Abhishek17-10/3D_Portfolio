import {clientReviews} from "../Constants/index.js";

export const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">My Certifications</h3>
            <div className="client-container">
                {clientReviews.map(({id, name, review ,img,position})=>(
                    <div key={id} className="client-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                            <div className="client-content">
                                <div className="flex- gap-3">
                                    <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

