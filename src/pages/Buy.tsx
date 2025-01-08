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
      <div className="d-flex justify-content-around align-items-center vh-100 mt-5">
        <Navbar />
        <div className="d-flex justify-content-center flex-column flex-md-row">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={items[numID - 1]?.image}
              style={{ height: "20rem" }}
              className=""
            ></img>
          </div>
          <div className="justify-content-center d-flex itemDesc col-md-6">
            <div className="d-flex flex-column col-12 col-md-8">
              <h2 className="mb-3">{items[numID - 1]?.title}</h2>
              <h3 className="my-auto mb-3">{"$" + items[numID - 1]?.price}</h3>
              <div className="w-50 mx-auto mt-auto">
                <p>{items[numID - 1]?.description}</p>
                <a className="btn btn-dark shadow btn-width mx-auto mb-3">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
