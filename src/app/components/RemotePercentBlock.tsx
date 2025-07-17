import React from "react";

interface RemotePercentBlockProps {
  percent: number;
  warning?: boolean;
}

const RemotePercentBlock: React.FC<RemotePercentBlockProps> = ({ percent, warning = false }) => {
  const textColor = warning ? "#ed1f1d" : "#6e6e6e";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 8,
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        fontFamily: "Pretendard, sans-serif",
        fontSize: 18,
        color: textColor,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {percent}%
    </div>
  );
};

export default RemotePercentBlock; 