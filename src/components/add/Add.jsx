import React from "react";
import "./Add.scss";

export default function Add() {
  return (
    <div className="add">
      <input className="add__text" type="text" placeholder="Add Your Todo" />
      <button className="add__btn"> + </button>
    </div>
  );
}
