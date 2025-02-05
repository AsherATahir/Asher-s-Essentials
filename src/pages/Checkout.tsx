import Navbar from "../components/Navbar";
import CustomerInfo from "../components/CustomerInfo";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/incrementSlice";
import { reset, clearID, removeID } from "../store/incrementSlice";
import { RootState } from "../store/store";
import { useState } from "react";
import persistor from "../main";
import favicon from "../assets/favicon.png";

function Checkout() {
  useSelector((state: RootState) => state.counter.value);
  useSelector((state: RootState) => state.counter.itemID);
  const dispatch = useDispatch();
  let count = useSelector((state: RootState) => state.counter.value);
  let itemArray = useSelector((state: RootState) => state.counter.items);
  let itemID = useSelector((state: RootState) => state.counter.itemID);

  let [currentItem, setItem] = itemID?.length != 0 ? useState(0) : useState(-1);

  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center overflow-x-hidden">
        <div className="vh-100 d-flex flex-column justify-content-evenly">
          <h1
            style={{ fontFamily: "Oswald, sans-serif" }}
            className="mobileHeader"
          >
            Review Your Selections
          </h1>
          <div className="d-flex justify-content-center align-items-center">
            <button className="removeButtonAttributes">
              <ChevronLeft
                className="me-3"
                size={100}
                onClick={() => {
                  currentItem > 0 &&
                    itemID?.length != 0 &&
                    setItem(currentItem - 1);

                  currentItem == 0 &&
                    itemID?.length != 0 &&
                    setItem(itemID?.length - 1);
                }}
              />
            </button>
            <div className="card col-6 col-sm-4 col-md-4 col-lg-3 col-xl-4 border-white shadow cardScroll">
              <div className="d-flex flex-column my-auto">
                <img
                  src={
                    currentItem == -1
                      ? favicon
                      : itemArray[itemID[currentItem] - 1]?.image || favicon
                  }
                  className="card-img"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="imgLink">
                    {currentItem == -1
                      ? "CART IS EMPTY"
                      : itemArray[itemID[currentItem] - 1]?.title}
                  </h5>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                currentItem < itemID?.length - 1 &&
                  itemID?.length != 0 &&
                  setItem(currentItem + 1);

                currentItem == itemID?.length - 1 &&
                  itemID?.length != 0 &&
                  setItem(0);
              }}
              className="removeButtonAttributes"
            >
              <ChevronRight className="ms-3" size={100} />
            </button>
          </div>
          <div>
            <button
              className="me-2 btn btn-dark shadow btn-width mx-auto"
              onClick={() => {
                count != 0 && dispatch(decrement());
                if (currentItem != -1) {
                  dispatch(removeID(currentItem));
                  currentItem - 1 == -1 && itemID?.length == 1 && setItem(-1); //about to be empty
                  currentItem - 1 != -1 &&
                    itemID?.length != 1 &&
                    setItem(currentItem - 1); //not located at index 0
                }
              }}
            >
              Remove from Cart
            </button>
            <button
              className="ms-2 btn btn-dark shadow btn-width mx-auto"
              onClick={() => {
                persistor.purge();
                dispatch(reset());
                dispatch(clearID());
                setItem(-1);
              }}
            >
              Reset Cart
            </button>
          </div>
        </div>
        <div className="vh-100 col-12 col-md-10 col-lg-10 col-xl-6 me-xl-5 d-flex flex-column justify-content-center">
          <CustomerInfo></CustomerInfo>
        </div>
      </div>
    </>
  );
}

export default Checkout;
