import React from "react";
import empty from "../../assets/empty.jpg";
function Empty() {
  return (
    <div className="container">
      <img
        style={{ marginLeft: "500px", marginTop: "30px" }}
        src={empty}
        alt=""
      />
    </div>
  );
}

export default Empty;
