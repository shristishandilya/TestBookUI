import React from 'react';


function Tab() {
  return (
    <div className="layout horizontal center tabs">
      <a className="inline-block text-center p15 text-secondary-dark pos mr25" href="#prelims">Prelims (30)</a>
      <a className="inline-block text-center p15 text-secondary-dark pos mr25" href="#mains">Mains (30)</a>
      <a className="inline-block text-center p15 text-secondary-dark pos mr25" href="#sectional">Sectional</a>
      <a className="inline-block text-center p15 text-secondary-dark pos mr25" href="#chapter">Chapter</a>
      <a className="inline-block text-center p15 text-secondary-dark pos mr25" href="#liveTests">Live Tests</a>
    </div>
  );
}

export default Tab;
