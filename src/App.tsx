import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import "./components/BodyGlobals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { item } from "./Interfaces/interface";

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";

//commit test

function App() {
  let [items, setItems] = useState<item[]>([]);
  let [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //rerender so state is now set to itemsList
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          console.log("Issue Loading Item \n (Data cannot be fetched)");
          return;
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch((err) => console.log(err));
    console.log("constant");
  }, []);

  /*I would have passed some of these props via use context, but react 
  router dom does not allow routes to be wrapped in other components*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home itemList={items} loading={loading} />}
          ></Route>
          <Route
            path="/home"
            element={<Home itemList={items} loading={loading} />}
          ></Route>
          <Route
            path="/buy/:id"
            element={<Buy itemList={items} loading={loading} />}
          ></Route>
          <Route path="*"></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
