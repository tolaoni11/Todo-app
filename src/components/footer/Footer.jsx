import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">You have 4 pending tasks</p>
      <button className="footer__btn">Clear All</button>
    </div>
  );
}
