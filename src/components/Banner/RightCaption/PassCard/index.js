import React from 'react';
import './style.scss';
import {PassSvg} from "../svg";

const passList = [
  {id: 1, title: 'Yearly'},
  {id: 2, title: 'Monthly',},
  {id: 3, title: '6 Months',}
];

function PassCards() {
  return (
    <React.Fragment>
      {
        passList.map((pass) => {
          return (
            <div className="mb15 layout horizontal center pos pass-cards">
              <input
                className="pos-abs width-full height-full m0"
                id={'input' + pass.id} name="radio"
                type="radio"
                checked/>
              <label
                className="pos-abs ml20 inline-block radio-label"
                htmlFor={'input' + pass.id} id={"label" + pass.id}/>
              <div className="layout horizontal center justified width-full bg-white pass-list p20 ">
                <div className="ml35 layout flex-2 pass-validity">
                  <h3 className="mt0 mb5 font20">
                    {pass.title}
                    <PassSvg/>
                  </h3>
                  <span className="font14 text-secondary-dark">
                          Valid for 6 months
                </span>
                </div>
                <div className="layout flex-1 ml5">
                  <div className="layout horizontal center end-justified wrap mb10">
                    <del className="text-secondary-light">
                      &#x20B9;
                      1980
                    </del>
                    <button className="ml10 ptb5 prl10 font12 font-bold">
                      30% Off
                    </button>
                  </div>
                  <div className="layout horizontal center end-justified wrap">
                  <span className="text-secondary-light inline-block">
                    only
                  </span>
                    <strong className="inline-block ml5 font18">
                      &#x20B9;
                      1299

                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  );
}

export default PassCards;
