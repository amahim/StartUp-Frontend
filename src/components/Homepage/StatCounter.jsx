import React from "react";

const StatCounter = () => {
  return (
    <div className="w-4/5 mx-auto py-10">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200">
        <div className="stat">
          <div className="stat-title text-center">case studies</div>
          <div className="stat-value text-center">250+</div>
        </div>

        <div className="stat">
          <div className="text-center stat-title ">happy customers</div>
          <div className="text-center stat-value ">4200+</div>
        </div>

        <div className="stat">
          <div className="text-center stat-title "> Total revenue</div>
          <div className="text-center stat-value ">2200$+</div>
        </div>
      </div>
    </div>
  );
};

export default StatCounter;
