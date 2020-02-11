import React from "react";
import Header from "./Header";
import Body from "./Body";

const Content = props => {
  return (
    <div>
      <Header jump={e => props.jump(e)} />
      <Body />
    </div>
  );
};

export default Content;
