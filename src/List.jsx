import React from "react";
import "./List.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((item, key) => (
        <article key={item.id} className="person">
          {<img src={item.image} alt={item.name} />}
          <div className="text-box">
            <h6>{item.name}</h6>
            <small>{item.age}</small>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
