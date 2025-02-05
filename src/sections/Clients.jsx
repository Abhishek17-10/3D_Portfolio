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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

