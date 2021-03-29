import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="row">
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  className="temp-img"
                  src={photo.src.landscape}
                  alt="Photo"
                  key={index}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }

  {
    /* <div className="col-4">
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
          </div> */
  }
}
