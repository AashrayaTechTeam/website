import React from "react";

function Anouncement() {
  return (
    <div
      className="anouncements"
      style={{
        width: "60%",
        border: "soild 2px black",
        height: "300px",
        textAlign: "center"
      }}
    >
      <strong>
        <h1>Anouncements :</h1>{" "}
      </strong>
      <h1 style={{ textAlign: "center", position: "relative", top: "20%" }}>
        Comming Soon
      </h1>
    </div>
  );
}

export default Anouncement;
