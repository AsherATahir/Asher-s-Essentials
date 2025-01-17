import Navbar from "../components/Navbar";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/incrementSlice";
import { RootState } from "../store/store";
import persistor from "../main";

function Checkout() {
  useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  let count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <div className="vh-100 flex-column d-flex justify-content-evenly">
        <Navbar />
        <h1 style={{ fontFamily: "Oswald, sans-serif" }}>
          Review Your Selections
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <button className="removeButtonAttributes">
            <ChevronLeft className="me-3" size={100} />
          </button>
          <div className="card col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 border-white shadow">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">COMING SOON</h5>
              <p className="card-text">
                COMING SOON. (the remove buttons are ugly right now, i know, but
                they work)
              </p>
            </div>
          </div>
          <button className="removeButtonAttributes">
            <ChevronRight className="ms-3" size={100} />
          </button>
        </div>
        <div>
          <button
            className="me-2"
            onClick={() => {
              count != 0 && dispatch(decrement());
            }}
          >
            Remove from Cart
          </button>
          <button
            className="ms-2"
            onClick={() => {
              persistor.purge();
              window.location.reload(); //there be a better alternative to this
            }}
          >
            Reset Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
