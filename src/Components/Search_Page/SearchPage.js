import React, { useEffect } from "react";
import { Store } from "../../context";

export default function SearchPage(props) {
  const [store] = Store();

  useEffect(() => {
    let searchData = [];
    const popSearchData = async () => {
      await fetch(`http://localhost:5000/search?name=${store.searchTerm || ""}`)
        .then((res) => res.json())
        .then((data) => {
          searchData = data;
          console.log(searchData);
        })
        .catch((err) => console.log(err.message));
    };
    popSearchData();
  }, [store.searchTerm]);

  return <div>Hello</div>;
}

//   const parseQuery = () => {
//     const params = document.location.search.replace("?", "");
//     const rawParams = params.split("&");
//     for (let i = 0; i < rawParams.length; i++) {
//       let tmp = rawParams[i].split("=");
//       query[tmp[0]] = tmp[1] || "";
//     }
//   };

//   if (query.name === "" || query.name === null) {
//     history.push("/");
//   }
//   console.log(query);
//   parseQuery();
