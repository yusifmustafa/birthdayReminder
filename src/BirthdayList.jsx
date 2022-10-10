import React from "react";
import { data } from "./Data";
import "./App.css";
import List from "./List";
import { useState } from "react";

const BirthdayList = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="card" style={{ height: "auto", width: "350px" }}>
      <div className="card-body">
        <h5 className="card-title">{people.length} birthday today</h5>
        <p className="card-text">
          <List people={people} />
        </p>
        <button onClick={() => setPeople([])} className="btn">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default BirthdayList;
