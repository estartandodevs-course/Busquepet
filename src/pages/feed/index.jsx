import React from "react";
import { useLocation } from "react-router-dom";

export default function Feed() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="head">
        <p>feed</p>
      </div>
    </>
  );
}
