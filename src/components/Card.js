import React from "react";

function Card(props) {
  return (
    <div className="alert alert-warning position-absolute top-50 start-50 translate-middle opacity-75 z-3">
      <h3 className="alert-message">{props.message}</h3>
    </div>
  );
}

export default Card;
