import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../../context";
import axios from "axios";
import { URL } from "../../reducer";
import SearchComponent from "./../Search_Component/SearchComponent";
import Loader from "../../assets/Pulse-1s-200px-1.svg";
import "./SearchPage.css";
export default function SearchPage(props) {
  const [store] = Store();
  let [searchData, setSearchData] = useState([]);
  let [loader, setLoader] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const popSearchData = async () => {
      setLoader(true);
      await axios
        .get(`${URL}/search?name=${store.searchTerm || ""}`)
        .then((res) => {
          setSearchData(res.data);
        })
        .catch((err) => console.log(err.message));
      setLoader(false);
    };
    popSearchData();
  }, [store.searchTerm, setSearchData, history]);

  return searchData.length !== 0 ? (
    <div>
      <div className="results__div py-2 container-fluid">
        <div className="row">
          {searchData.length !== 0 ? (
            <div className="col-12">
              Got {searchData.length} Results for You
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10 col-12">
            {searchData.map((item) => (
              <SearchComponent
                id={item._id}
                title={item.name}
                img={item.imageURLs.split(",")[0]}
                price={item.amountMax}
                stock={item.isSale}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <React.Fragment>
      {searchData.length === 0 && !loader ? (
        <div className="no__results__div my-5 jumbotron mx-auto">
          <p className="px-auto text-center no__results">No Results Found</p>
        </div>
      ) : (
        <div></div>
      )}
      {loader ? (
        <div className="container-fluid d-flex flex-row align-items-center justify-content-center ">
          <img
            src={Loader}
            className="mx-auto"
            height="200px"
            width="200px"
            alt=""
            srcset=""
          />
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
