import BodyGlobals from "../components/BodyGlobals";
import LoadingFallback from "../components/LoadingFallback";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../Interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/incrementSlice";
import { RootState } from "../store/store";

interface Props {
  itemList: item[];
  loading: boolean;
}

function Buy({ itemList, loading }: Props) {
  useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  let [items, setItems] = useState(itemList);
  let [itemClicked, setClick] = useState(false);
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
      <div className="vh-100 align-items-center justify-content-center d-flex overflow-hidden">
        <div className="d-flex justify-content-around align-items-center mt-5">
          <Navbar />
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <div className="d-flex justify-content-center mb-3 col-9 col-md-6">
              <img src={items[numID - 1]?.image} className="img-fluid"></img>
            </div>
            <div className="justify-content-center d-flex itemDesc col-md-6">
              <div className="d-flex flex-column col-12 col-md-8">
                <h2 className="mb-3">{items[numID - 1]?.title}</h2>
                <h3 className="my-auto mb-3">
                  {"$" + items[numID - 1]?.price}
                </h3>
                <div className="col-11 col-lg-10 mx-auto mt-auto">
                  <p>{items[numID - 1]?.description}</p>
                  <a
                    className="btn btn-dark shadow btn-width mx-auto mb-3"
                    onClick={() => {
                      dispatch(increment());
                      setClick(true);
                      setTimeout(() => setClick(false), 4000);
                    }}
                  >
                    Add to Cart
                  </a>
                  <div className="smallToast bigToast mt-2">
                    <Popup
                      itemName={items[numID - 1]?.title}
                      itemImage={items[numID - 1]?.image}
                      active={itemClicked}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
