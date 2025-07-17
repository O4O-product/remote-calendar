import React from "react";

interface CalendarDayLabelProps {
  label: string;
  isLast?: boolean;
}

const CalendarDayLabel: React.FC<CalendarDayLabelProps> = ({ label, isLast = false }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
        paddingTop: 8,
        borderRight: isLast ? undefined : "1px solid #e5e5e5",
        fontFamily: "Pretendard, sans-serif",
        fontSize: 20,
        color: "#6e6e6e",
        width: "100%",
        boxSizing: "border-box",
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
};

export default CalendarDayLabel; 