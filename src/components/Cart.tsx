import { useState } from "react";
import "../App.css";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

function Cart() {
  let count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <div className="m-0 border rounded itemCircle">{count}</div>
    </>
  );
}

export default Cart;
