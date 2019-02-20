import React from "react";

const ArrowUp = ({ width, height, className, color }) => (
  <svg width={width} height={height} viewBox="0 0 8 10" className={className}>
    <path
      d="M3.999 0a.674.674 0 0 0-.413.162l-3.4 3.192c-.194.217-.275.631-.05.873.222.238.652.23.875-.007L3.4 1.976v6.602a.6.6 0 0 0 1.2 0V1.976L6.987 4.22c.205.205.65.243.875.007.224-.236.152-.666-.05-.873L4.412.162A.58.58 0 0 0 3.999 0z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);
ArrowUp.defaultProps = { width: 8, height: 10, color: "#A4A7AF" };

export default ArrowUp;
