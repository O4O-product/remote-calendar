import React from "react";

interface CalendarDateBlockProps {
  date: number;
  type?: "default" | "today" | "disabled";
}

const typeStyles = {
  default: {
    color: "#000000",
    background: "transparent",
    border: "none",
  },
  today: {
    color: "#ffffff",
    background: "#000000",
    border: "1px solid #e5e5e5",
  },
  disabled: {
    color: "#b3b3b3",
    background: "transparent",
    border: "none",
  },
};

const CalendarDateBlock: React.FC<CalendarDateBlockProps> = ({ date, type = "default" }) => {
  const style = typeStyles[type];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: style.background,
        border: style.border,
        fontFamily: "Pretendard, sans-serif",
        fontSize: 24,
        color: style.color,
        userSelect: "none",
        boxSizing: "border-box",
      }}
    >
      {date}
    </div>
  );
};

export default CalendarDateBlock; 