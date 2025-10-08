import React from 'react';

const JobStatsSection = () => {
  return (
    <section className="bg-background pt-16 pb-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 text-center">
          <h3 className="w-full flex-shrink-0 text-[32px] font-bold leading-tight text-foreground">
            Never Miss Out On New Jobs Again.
            <br />
            Join The Largest Job Board!
          </h3>

          <div className="flex flex-col items-center">
            <span className="text-[56px] font-black leading-none text-foreground">
              400,000+
            </span>
            <span className="mt-2 text-base text-muted-foreground">
              Today's new jobs
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[56px] font-black leading-none text-foreground">
              8,000,000+
            </span>
            <span className="mt-2 text-base text-muted-foreground">
              Total jobs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobStatsSection;