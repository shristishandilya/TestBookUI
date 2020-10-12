import React from 'react';
import './style.scss';
import examPatterns from '../../assets/svgs/exam-patterns.svg';
import savedTests from '../../assets/svgs/saved-tests.svg';
import videoTips from '../../assets/svgs/video-tips.svg';
import videoDiscussion from '../../assets/svgs/video-discussion.svg';
import performance from '../../assets/svgs/performace.svg';

const infoCards = [
  {
    icon: examPatterns,
    title: 'Latest Exam Patterns',
    desc: 'Prepare for the level expected in the upcoming exams.'
  },
  {
    icon: savedTests,
    title: 'Save Tests & Questions',
    desc: 'Save important Tests & Questions to revise or reattempt them later.'
  },

  {
    icon: videoTips,
    title: 'Video Tips & Tricks',
    desc: 'Find fascinating tips to improve your speed & Accuracy.'
  },
  {
    icon: videoDiscussion,
    title: 'Video Discussions',
    desc: 'Understand the right strategy to attempt and exam from our Expert Faculties.',
  },

  {
    icon: performance,
    title: 'In-depth Performance Analysis',
    desc: 'Get insights on your Strengths & Weaknesses, All India Rank & Performance Comparison with the Topper.',
  },
];


function TestSeriesInfo() {
  return (
    <div className="bg-white">
      <div className="container pt25">
        <h3 className="font20 mt15 mb40">
          Why Take Test Series?
        </h3>
        <div className="layout horizontal wrap">
          {
            infoCards.map((infoCard, index) => {
              return (
                <div className="layout horizontal center ptb25 prl20 mb25 mr25 series-card">
                  <span className="inline-block series-img">
                    <img className="width-full" alt={infoCard.title} src={infoCard.icon}/>
                  </span>
                  <div className="series-info">
                    <span className="inline-block series-title">
                    {infoCard.title}
                  </span>
                    <p className="text-secondary-light font14 series-desc">
                      {infoCard.desc}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TestSeriesInfo;
