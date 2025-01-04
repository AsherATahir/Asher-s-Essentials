import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { item } from "../Interfaces/interface";
import LoadingFallback from "./LoadingFallback";

interface Props {
  itemList: item[];
  loading: boolean;
}

function Selections({ itemList, loading }: Props) {
  let [items, setItems] = useState<item[]>([]);
  let exceededLength = "...";

  useEffect(() => {
    setItems(itemList);
    console.log("use effect entered");
  });

  let filteredList = items.filter((numbers) => {
    //this API has some terribly cropped pictures, so I filtered them out.
    if (numbers.id < 4 || numbers.id > 8) return numbers;
  });

  //returns a loading screen until items load (the API I chose can be slow at times)
  if (loading == true) return <LoadingFallback />;

  return (
    <>
      <ul
        className="d-flex flex-row mt-5 justify-content-center overflow-hidden w-100
    flex-wrap p-0"
      >
        {filteredList.map((item, index) => (
          <li
            className="d-flex col-lg-4 justify-content-evenly mb-5 col-md-6 col-sm-8"
            key={index}
            id="listCard"
          >
            <div className="card bg-black">
              <img
                id="fetchImage"
                className="card-img-top"
                src={item.image}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title text-white lead">
                  {item.title.length > 25
                    ? item.title.substring(0, 17) + exceededLength
                    : item.title}
                </h5>
                <p className="card-text"></p>
                <Link to={`/buy/${item.id}`} className="btn btn-primary">
                  Buy This!
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

/* */

export default Selections;
