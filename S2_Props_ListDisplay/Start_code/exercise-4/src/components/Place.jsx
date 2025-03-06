export default function Place({place}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}
