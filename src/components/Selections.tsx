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
      <div className="d-flex justify-content-center">
        <ul
          className="d-flex flex-row mt-5 justify-content-center overflow-hidden
    flex-wrap p-0"
        >
          {filteredList.map((item, index) => (
            <li
              className="d-flex justify-content-evenly mb-5 col-lg-3 col-md-4 col-sm-8 mx-5 col-xl-3"
              key={index}
              id="listCard"
            >
              <div className="card bg-white shadow-lg">
                <img
                  id="fetchImage"
                  className="card-img-top img-fluid"
                  src={item.image}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-subtle lead">
                    {item.title.length > 25
                      ? item.title.substring(0, 17) + exceededLength
                      : item.title}
                  </h5>
                  <p className="card-text"></p>
                  <Link to={`/buy/${item.id}`} className="btn btn-dark shadow">
                    Buy This!
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* */

export default Selections;
