import React, { useEffect } from "react";
import { useState } from "react";

interface Props {
  itemID: number;
}

let [items, setItems] = useState([]);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((err) => console.log(err));
}, []);

function CatalogueImage({ itemID }: Props) {
  return (
    <div>
      <img src={items[itemID - 1].image}></img>
    </div>
  );
}

export default CatalogueImage;
