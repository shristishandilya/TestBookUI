import React from 'react';
import PassCards from "./PassCard";


function RightCaption() {
  return (
    <form className="layout vertical flex-4 banner-right">
      <PassCards/>
      <button className="ptb20 prl10 font-bold mb15 button-filled">
        Buy Now
      </button>
      <button className="ptb20 prl10 text-secondary-dark button-border">
        Add to cart
      </button>
      <a href="#couponCode" className="inline-block mt15 text-link font16 text-center">
        I have a Coupon Code
      </a>
    </form>
  );
}

export default RightCaption;
