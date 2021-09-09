import React, {useState} from 'react'

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="item-container">
            <img src={image} alt={name} className="image"></img>
            <div className="info">
                <h5 className="name">{name}</h5>
                <h5 className="price">$ {price}</h5>
                <p className="description">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="read-more" onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
            </div>
            <button className="not-interested" onClick={() => removeTour(id)}>Not Interested</button>
        </article>
    )
}

export default Tour
