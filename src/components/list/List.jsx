import React from "react";
import "./List.scss";

export default function List() {
  return (
    <div className="list">
      <div className="list__row">
        <div className="list__item">Buy New laptop</div>
        <div className="list__delete">Del</div>
      </div>

      <div className="list__row">
        <div className="list__item">Study Codehance Courses</div>
        <div className="list__delete">Del</div>
      </div>

      <div className="list__row">
        <div className="list__item">Make a site</div>
        <div className="list__delete">Del</div>
      </div>

      <div className="list__row">
        <div className="list__item">Revise Assignment</div>
        <div className="list__delete">Del</div>
      </div>
    </div>
  );
}
