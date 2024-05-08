import React from "react";

export default function SearchBar(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.setSearch(e.target.value)}
      ></input>
    </div>
  );
}
