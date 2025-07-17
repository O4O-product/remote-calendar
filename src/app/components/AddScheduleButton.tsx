import React from "react";

interface AddScheduleButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const AddScheduleButton: React.FC<AddScheduleButtonProps> = ({ disabled = false, onClick }) => {
  const iconColor = disabled ? "#B3B3B3" : "#6E6E6E";
  return (
    <button
      type="button"
      style={{
        flex: 1,
        minHeight: 40,
        minWidth: 120,
        borderRadius: 8.5,
        background: "#ffffff",
        border: "1px dashed #d9d9d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        pointerEvents: disabled ? "none" : undefined,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "default" : "pointer",
        boxSizing: "border-box",
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M7.99995 3.20001V8.00001M7.99995 8.00001V12.8M7.99995 8.00001H3.19995M7.99995 8.00001H12.8" stroke={iconColor} strokeMiterlimit="10"/>
      </svg>
    </button>
  );
};

export default AddScheduleButton; 