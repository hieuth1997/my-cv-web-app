import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { TiArrowRightThick, TiSocialGithub } from "react-icons/ti";
import devImage from "../../assets/images/image/it.png";
import hbImg from "../../assets/images/image/hbRight.jpg";
Interest.propTypes = {};

function Interest(props) {
  return (
    <section className="interest">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">Interests</h1>
          </div>
          <div className="col c-12 m-12 l-6">
            <p className="interest__desc">
              Apart from being a developer, I enjoy most of my spare time to
              listen beautiful relaxing music, read peaceful books and watching
              Anime also English fantasy television shows
            </p>
            <p className="interest__desc">
              In addition, I like to grow vegetable and take care them. It is
              the way I can enjoy the fresh food and give it for my friends
            </p>
            <p className="interest__desc">
              Besides, I keen on learning VietNam history and spend more time to
              search it.
            </p>
            <p className="interest__desc">
              Last but not least, I really enjoy traveling and taking pictures
              with my friends.
            </p>
            <div className="img">
              <img className="img__item" src={devImage} alt="img-dev"></img>
            </div>
          </div>
          <div className="col c-12 l-6">
            <div className="rightImg">
              <img src={hbImg} alt="hobby" className="rightImg__item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interest;
