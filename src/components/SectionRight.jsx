import React from 'react'

const SectionRight = ({ id, title, description, img }) => {
    return (
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src={img} alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionRight