import React from 'react';
import './style.scss';
import {FilterSvg, LockSvg} from "./svg";
import Tab from "./Tabs";
import SearchButton from "./SearchButtons";


function AllTests() {
  return (
    <div className="bg-foreground">
      <div className="container pt25">
        <div className="layout horizontal wrap justified center test-header">
          <h3 className="font20 m0">
            All Tests
          </h3>
          <a
            className="web-view text-link"
            href="#testReleaseSchedule"
          >
            Test Release Schedule
          </a>
        </div>
        <div className="  layout horizontal center justified  mb15 test-card tab-layout">
          <Tab/>
          <div className="test-mob-layout">
            <i className="mob-view">
              <FilterSvg/>
            </i>
            <SearchButton/>
          </div>
        </div>
        <div className="layout vertical">
          {
            [...Array(6)].map((index) => {
              return (
                <div className="p25 bg-white mb15 layout horizontal center wrap test-card ">
                  <div className="mr15 layout flex-3 test-prelims">
                    <strong className="font18">
                      Prelims Full Test&nbsp;{index}
                    </strong>
                    <ul className="pl25 layout horizontal wrap test-marking">
                      <li>
                        <span className="text-secondary-light pos">
                          100 Questions
                          </span>
                      </li>
                      <li>
                        <span className="text-secondary-light pos">
                          100 Marks
                          </span>
                      </li>
                      <li>
                        <span className="text-secondary-light pos">
                         60 Mins
                          </span>
                      </li>
                    </ul>
                  </div>
                  <div className="layout horizontal flex-1 center end-justified wrap test-unlock">
                    <span className="web-view mr15">
                    <LockSvg/>
                    </span>
                    <button className="p10 bg-white text-link">
                      Unlock Now
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <p className="text-center">
          <a className="text-link no-text-decoration"
             href="#viewMore">
            View 10 more
          </a>
        </p>
      </div>
    </div>
  );
}

export default AllTests;
