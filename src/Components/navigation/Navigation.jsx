import React from "react";
import "./style.scss";
import avatar from "./../../assets/images/image/avatar.JPG";

function Navigation() {
  return (
    <div className="navigation  ">
      <div className="navigation__wrapper">
        <div className="navigation__top">
          <div className="avatar__wrapper">
            <img src={avatar} alt="my-avatar" className="avatar__item"></img>
          </div>
        </div>

        <div className="nav__wrapper"></div>
      </div>
    </div>
  );
}

export default Navigation;
