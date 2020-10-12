import React from 'react';
import './style.scss';
import {SecuritySvg, SettingSvg} from "./svg";
import FaqsTabs from "./FaqsTabs";
import Accordion from "./Accordion";


function Faqs() {
  return (
    <div className="bg-foreground">
      <div className="container pt25">
        <h3 className="font20 mt0 mb25">
          FAQ's
        </h3>
        <div className="layout horizontal faqs-main">
          <aside className="faqs-aside">
            <FaqsTabs
              icon={SettingSvg}
              href="#GeneralEnquiries"
              title="General Enquiries"
              tabInfo="New to Testbook? Start
              with the basics"
            />
            <FaqsTabs
              icon={SecuritySvg}
              href="#SecurityIssues"
              title="Security Issues"
              tabInfo="New to Testbook? Start
              with the basics"
            />
          </aside>
          <Accordion/>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
