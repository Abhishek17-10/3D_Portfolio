import {clientReviews} from "../Constants/index.js";

export const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">My Certifications</h3>
            <div className="client-container">
                {clientReviews.map(({id, name, review, img, position, link})=>(
                    <div key={id} className="client-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                            <div className="client-content">
                                <div className="flex- gap-3">
                                    <img src={img} alt={name} className="w-13 h-12 rounded-full"/>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{position}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-white hover:text-gray-200 w-fit"
                                    title="View certificate"
                                >
                                    <span className="mr-1 text-sm font-bold">View certificate</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform transform hover:translate-x-1"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}