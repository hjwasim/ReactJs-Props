import React from "react";
import "./styles.css";

const ChildComponent = props => {
  return <p>{props.text}</p>;
};

export default function App() {
  return (
    <h1>
      I'm Greetings.
      <ChildComponent text={"Hii"} />
      <ChildComponent text={"Hello"} />
      <ChildComponent text={"Hey"} />
    </h1>
  );
}
