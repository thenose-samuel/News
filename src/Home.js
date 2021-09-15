import React from "react";
import CardComponent from "./Components/Card";

export default function Home() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}
