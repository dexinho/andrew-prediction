import React from "react";

type LegendMarkerProps = {
  bgColor: string;
  title: string;
  description: string;
};

const LegendMarker = ({ bgColor, title, description }: LegendMarkerProps) => {
  return (
    <div className="flex-col mb-2">
      <div className="flex items-center gap-1">
        <div
          className={`w-4 h-4`}
          style={{ backgroundColor: `${bgColor}` }}
        ></div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="px-5">{description}</div>
    </div>
  );
};

export default LegendMarker;
