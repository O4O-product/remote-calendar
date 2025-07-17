import React from "react";

interface CalendarMonthNavButtonProps {
  direction: "prev" | "next";
  onClick?: () => void;
}

const CalendarMonthNavButton: React.FC<CalendarMonthNavButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      type="button"
      style={{
        width: 32,
        height: 32,
        borderRadius: 20,
        background: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      onClick={onClick}
      aria-label={direction === 'prev' ? '이전 달' : '다음 달'}
    >
      {direction === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.43497 8.36287C5.25542 8.14292 5.25554 7.82573 5.43497 7.60571L5.47599 7.56014L10.1342 2.90129L10.4174 3.18384L10.6999 3.46704L6.18237 7.98462L10.6999 12.5015L10.4174 12.7841L10.1342 13.0667L5.47599 8.40845L5.43497 8.36287Z" fill="black"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.5653 8.36287C10.7449 8.14292 10.7448 7.82573 10.5653 7.60571L10.5243 7.56014L5.86611 2.90129L5.58291 3.18384L5.30036 3.46704L9.81794 7.98462L5.30036 12.5015L5.58291 12.7841L5.86611 13.0667L10.5243 8.40845L10.5653 8.36287Z" fill="black"/>
        </svg>
      )}
    </button>
  );
};

export default CalendarMonthNavButton; 