import React from "react";
import news from "./styles/news.css";
import NewOne from "./NewOne";

const Select = props => {
  return (
    <div className="container2">
      <div className="picture3"></div>
      <div className="product">
        {props.items.map(x => {
          if (x.group === 3) {
            return (
              <NewOne key={x.id} items={x} open={() => props.open(x.id)} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Select;
