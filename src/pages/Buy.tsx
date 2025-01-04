import BodyGlobals from "../components/BodyGlobals";
import { useEffect } from "react";
import LoadingFallback from "../components/LoadingFallback";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../Interfaces/interface";

interface Props {
  itemList: item[];
  loading: boolean;
}

function Buy({ itemList, loading }: Props) {
  let [items, setItems] = useState(itemList);
  const { id } = useParams();
  const numID = Number(id);
  useEffect(() => setItems(itemList));

  if (loading == true) {
    return (
      <div>
        <Navbar />
        <BodyGlobals />
        <div className="mt-5">
          <LoadingFallback></LoadingFallback>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-5" id="top">
        <div className="card bg-dark text-white">
          <div className="card-header">{items[numID - 1]?.title}</div>
          <div className="card-body">
            <img
              src={items[numID - 1]?.image}
              style={{ height: "20rem" }}
              className="mt-3"
            ></img>
            <h5 className="card-title mt-4">{"$" + items[numID - 1]?.price}</h5>
            <p className="card-text">{items[numID - 1]?.description}</p>
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <BodyGlobals />
    </>
  );
}

export default Buy;
