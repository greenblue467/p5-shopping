import React from "react";
import news from "./styles/news.css";
import NewOne from "./NewOne";

const Pop = props => {
  return (
    <div className="container2">
      <div className="picture2"></div>
      <div className="product">
        {props.items.map(x => {
          if (x.group === 2) {
            return (
              <NewOne key={x.id} items={x} open={() => props.open(x.id)} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Pop;
