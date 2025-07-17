import React from "react";

interface CalendarStatusBlockProps {
  name: string;
  type: "vacation" | "remote";
}

const styles = {
  vacation: {
    background: "#eaffd1",
    emoji: "🌴",
    nameColor: "#1f4a09",
  },
  remote: {
    background: "#f3f3f3",
    emoji: "🏠",
    nameColor: "#000000",
  },
};

const CalendarStatusBlock: React.FC<CalendarStatusBlockProps> = ({ name, type }) => {
  const { background, emoji, nameColor } = styles[type];
  return (
    <div
      style={{
        background,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        minHeight: 40,
        minWidth: 120,
        width: "100%",
        fontFamily: "Pretendard, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <span style={{ fontSize: 18, marginRight: 8 }}>{emoji}</span>
      <span
        style={{
          color: nameColor,
          fontSize: 18,
          fontFamily: "Pretendard, sans-serif",
          flex: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </span>
      <span style={{ marginLeft: 8, display: "flex", alignItems: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M12.2825 4.78257L8.56506 8.50002L12.2825 12.2175L11.7174 12.7826L7.99996 9.06512L4.28251 12.7826L3.71741 12.2175L7.43485 8.50002L3.71741 4.78257L4.28251 4.21747L7.99996 7.93492L11.7174 4.21747L12.2825 4.78257Z" fill="black" fillOpacity="0.6"/>
        </svg>
      </span>
    </div>
  );
};

export default CalendarStatusBlock; 