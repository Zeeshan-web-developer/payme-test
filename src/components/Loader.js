import React from "react";

function Loader({ loading, children }) {
  if (!loading) {
    return children;
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loader;
