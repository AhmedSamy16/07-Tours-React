import { useState } from "react"

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadeMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{
                    readMore ? info : `${info.slice(0, 200)}...`
                }
                    <button onClick={() => setReadeMore(!readMore)}>
                        {readMore ? "show less" : "show more"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not Intersted</button>
            </footer>
        </article>
    )
}

export default Tour