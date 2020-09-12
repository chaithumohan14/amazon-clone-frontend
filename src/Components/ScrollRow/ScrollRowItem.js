import React from "react";

export default function ScrollRowItem({ small = false, img }) {
  return (
    <React.Fragment>
      {small ? (
        <img className="mx-3" height="150px" width="150px" src={img} alt="" />
      ) : (
        <img className="mx-3" height="200px" width="200px" src={img} alt="" />
      )}
    </React.Fragment>
  );
}
