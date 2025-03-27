import { useState } from "react";

export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  
  function handleClick(e) {
    e.preventDefault();
    
    if (!name || !price) {
      return;
    }

    onAddStuff(name, price);

    setName("");
    setPrice(0);
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e) => setPrice(e.target.value)}/>

      <button onClick={handleClick}>Add Stuff</button>
    </form>
  );
}
