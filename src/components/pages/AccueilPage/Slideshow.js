import React from "react";
import { Slide } from "react-slideshow-image";
import iconConserver from "../../../images/iconConserver.jpg";
import iconPartager from "../../../images/iconPartager.jpg";
import iconImprimer from "../../../images/iconImprimer.jpg";
import "./Slide.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

export default function Slideshow() {
  return (
    <div className="containerSlide">
      <Slide {...properties}>
        <div className="eachslide">
          <div>
            <img scr={iconConserver} alt="iconConserver" />
          </div>
        </div>
        <div className="eachslide">
          <div>
            <img scr={iconPartager} alt="iconPartager" />
          </div>
        </div>
        <div className="eachslide">
          <div>
            <img scr={iconImprimer} alt="iconImprimer" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
