
interface CakeProps {
        id: number,
        name: string,
        price: number,
        description: string,
        image: string
}
export default function CakesList(props:CakeProps) {

    return (
            <div className="cake-item">
                <h3>{props.name}</h3>
                <p>${props.price}</p>
                <p>{props.description}</p>
                <img src={props.image} alt={props.name} className="cake-img" />
                <button type="submit" className="button">Add to Cart</button>
            </div>
    )
}