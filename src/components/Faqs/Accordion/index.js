import React from 'react';
import './style.scss';

const accordionInfos = [
  {
    id: 1,
    title: 'What are Test Series?',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and\n' +
      'demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee\n' +
      'the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their\n' +
      'duty through weakness of will, which is the same as saying through shrinking from toil and pain.\n' +
      'These cases are perfectly simple and easy to distinguish. In a free hour, when our power.'
  },
  {
    id: 2,
    title: 'What are Test Series?',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and\n' +
      'demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee\n' +
      'the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their\n' +
      'duty through weakness of will, which is the same as saying through shrinking from toil and pain.\n' +
      'These cases are perfectly simple and easy to distinguish. In a free hour, when our power.'
  },
  {
    id: 3,
    title: 'What are Test Series?',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and\n' +
      'demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee\n' +
      'the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their\n' +
      'duty through weakness of will, which is the same as saying through shrinking from toil and pain.\n' +
      'These cases are perfectly simple and easy to distinguish. In a free hour, when our power.'
  },

];

function Accordion() {
  return (
    <div className="bg-white layout vertical flex-1 pt25 prl25  accordion">
      {
        accordionInfos.map((accordionInfo, index) => {
          return (
            <div className="width-full pos accordion-tab">
              <input
                className="pos-abs"
                type="checkbox" id={'accordion' + accordionInfo.id}/>
              <label className="text-secondary-dark ptb15  accordion-tab-label"
                     htmlFor={'accordion' + accordionInfo.id}>
                  <span className="inline-block prl15">
                    {accordionInfo.title}
                  </span>
              </label>
              <div className="font14 text-secondary scroll-vertical prl15 accordion-tab-content">
                {accordionInfo.desc}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Accordion;
