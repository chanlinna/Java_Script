import Card from "./components/Card.jsx";
import {CARD} from "./data.js";
function App() {
  return (
    <>
      <header>
        <h1>My Favorite character in Lookism</h1>
      </header>
      <main>
        <section className="cards-category">
          <ul className="cards">
            {CARD.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
