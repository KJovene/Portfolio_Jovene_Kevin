import React from "react";

interface BackgroundProps {
  splineUrl?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  splineUrl = "https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/",
}) => {
  return (
    <>
      <div className="spline-bg">
        <iframe
          src={splineUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
      <div className="overlay" />
    </>
  );
};
