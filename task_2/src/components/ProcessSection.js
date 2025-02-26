import React from 'react';
import ProcessStep from './ProcessStep';
import "../assets/css/ProcessSection.css"

const ProcessSection = () => {
  return (
    <section className="process-section">
      <h2>The process we follow</h2>
      <div className="process-steps">
        <ProcessStep
          title="Planning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProcessStep
          title="Conception"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProcessStep
          title="Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProcessStep
          title="Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
};

export default ProcessSection;
