import React from 'react';
import {SBILogoSvg} from "../../common/svg";
import {TextPassSvg} from "./svg";

function LeftCaption() {
  return (
    <div className="layout flex-6 center-justified banner-left">
      <span className="exam-logo">
       <SBILogoSvg/>
      </span>
      <h2 className="font24">
        SBI PO Mock Test 2020
      </h2>
      <span className="text-secondary-dark">
        This Test Series Includes
      </span>
      <ul className="layout inline pl20 wrap mweb-vertical banner-series">
        {
          [...Array(6)].map(() => {
            return (
              <li key="testSeries" className="layout flex-auto  mb15">
                <span className="text-secondary font14 pl5 pos">
                  5 Prelims Advance Tests
                </span>
              </li>
            )
          })
        }
      </ul>
      <div>
        <span className="inline-block text-secondary-dark mb20">
          Included In
        </span>
        <div>
          <TextPassSvg/>
        </div>
        <p>
          <strong className="inline-block mr10">
            Get Access to All Tests & Courses for 100+ Exams
          </strong>
          <a href="#knowMore" className="text-link font14">
            Know more
          </a>
        </p>
      </div>
    </div>
  );
}

export default LeftCaption;
