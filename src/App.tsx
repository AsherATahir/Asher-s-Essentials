import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { item } from "./Interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "./store/incrementSlice";
import { RootState } from "./store/store";

import "./App.css";
import "./components/BodyGlobals";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";
import InternalError from "./components/InternalError";

function App() {
  let [items, setItems] = useState<item[]>([]);
  let [loading, setLoading] = useState<boolean>(true);
  let [error, setError] = useState<boolean>(false);

  useSelector((state: RootState) => state.counter.value);
  let dispatch = useDispatch();

  useEffect(() => {
    //rerender so state is now set to itemsList
    fetch("https://f514e33f-7fd2-4797-9d35-8270653a965b.mock.pstmn.io?items=04")
      .then((response) => {
        if (!response.ok) {
          console.log("Issue Loading Item \n (Data cannot be fetched)");
          setError(true);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setItems(data);
        dispatch(setArray({ payload: data })); //I originally didn't want to use redux, but needed it for certain features.
      })
      .catch((err) => console.log(err));
  }, []);

  if (error == true)
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100 my-auto">
          <InternalError />
        </div>
      </>
    );

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
