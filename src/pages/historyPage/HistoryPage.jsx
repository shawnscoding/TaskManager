import React from "react";
import { CircleProgress } from "react-gradient-progress";

const HistoryPage = () => {
  return (
    <div>
      <CircleProgress
        percentage={70}
        strokeWidth={8}
        width={150}
        secondaryColor="#f0f0f0"
      />
    </div>
  );
};

export default HistoryPage;
