import React from 'react';
import './style.scss';
import LeftCaption from "./LeftCaption";
import RightCaption from "./RightCaption";

function BannerSection() {
  return (
    <section className="layout vertical banner-bg">
      <div className="layout horizontal center flex-1 banner-inner">
        <div className="container layout horizontal wrap pt25">
          <LeftCaption/>
          <RightCaption/>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
