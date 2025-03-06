export default function Card({card}) {
    return (
        <li className="card-item">
            <img src={card.image.src} alt={card.image.alt} />
            <h3>{card.name}</h3>
            <h4>{card.age}</h4>
            <h3>{card.title}</h3>
        </li>
    );
}