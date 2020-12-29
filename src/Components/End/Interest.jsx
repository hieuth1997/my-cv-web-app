import React from "react";
import "./styles.scss";
import svg from "../../assets/images/it.svg";

function End(props) {
  return (
    <section className="end">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">The end</h1>
          </div>
          <div className="col l-12 m-12">
            <p className="interest__desc">
              Finally, I would like to say <strong>"Thank You"</strong> for your
              spent time to look at my CV profile.
            </p>
            <p className="interest__desc">
              Hope you have a wonderful day. (◕‿↼)
            </p>
          </div>
          <div className="col l-12 m-12">
            <img src={svg} alt="svg" className="thankYou" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default End;
