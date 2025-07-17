import React from "react";

interface ContainerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ContainerButton: React.FC<ContainerButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      style={{
        background: "#fff",
        border: "1px solid #d9d9d9",
        borderRadius: 8,
        padding: "12px 16px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 500,
        fontSize: 18,
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : undefined,
        cursor: disabled ? "default" : "pointer",
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ContainerButton; 