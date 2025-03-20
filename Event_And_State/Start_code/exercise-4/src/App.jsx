import { Carousel } from "./components/Carousel";
import { ALL_IMAGES } from "./data/imagesData.js";

function App() {
  return (
    <>
      <header>
        <h1>Statue Game at PNV !</h1>
        <p>Browse images using the arrows</p>
      </header>
      <main>
        <Carousel images={ALL_IMAGES} />
      </main>
    </>
  );
}

export default App;
