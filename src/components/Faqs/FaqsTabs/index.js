import React from 'react';


function FaqsTabs(props) {
  const {icon, title, tabInfo, href} = props;
  return (
    <a href={href} className="p20 width-full no-text-decoration layout horizontal faqs-tab">
      <i className="faqs-tab-icon">
        {icon()}
      </i>
      <span  className="layout flex-1 ml10">
        <strong className="mt0 mb5 font16">
          {title}
        </strong>
        <br/>
        <span className="web-view font14 text-secondary">
       {tabInfo}
      </span>
      </span>
    </a>
  );
}

export default FaqsTabs;
