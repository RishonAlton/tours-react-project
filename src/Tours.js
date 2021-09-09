import React from 'react'
import Tour from "./Tour"

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <h1 className="main-heading">Our Tours</h1>
            <div className="underline"></div>
            <div className="tour-container">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    )
                })}
            </div>
        </section>
    )
}

export default Tours
