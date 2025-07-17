import React from "react";
import CalendarDateBlock from "./CalendarDateBlock";
import RemotePercentBlock from "./RemotePercentBlock";
import CalendarStatusBlock from "./CalendarStatusBlock";
import AddScheduleButton from "./AddScheduleButton";

interface CalendarDayCellProps {
  dateBlockProps: React.ComponentProps<typeof CalendarDateBlock>;
  percentBlockProps: React.ComponentProps<typeof RemotePercentBlock>;
  statuses: Array<{ name: string; type: "remote" | "vacation" }>;
  onAddSchedule?: () => void;
  addDisabled?: boolean;
}

const CalendarDayCell: React.FC<CalendarDayCellProps> = ({
  dateBlockProps,
  percentBlockProps,
  statuses,
  onAddSchedule,
  addDisabled = false,
}) => {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: 160,
        height: "100%",
        padding: "8px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        boxSizing: "border-box",
        borderTop: "1px solid #e5e5e5",
        borderRight: "1px solid #e5e5e5",
        flex: 1,
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CalendarDateBlock {...dateBlockProps} />
      </div>
      <div style={{ marginTop: 4, width: "100%", display: "flex", justifyContent: "center" }}>
        <RemotePercentBlock {...percentBlockProps} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", marginTop: 4 }}>
        {statuses.map((s, i) => (
          <CalendarStatusBlock key={i} name={s.name} type={s.type} />
        ))}
      </div>
      <div style={{ marginTop: 8, width: "100%", display: "flex", justifyContent: "center" }}>
        <AddScheduleButton onClick={onAddSchedule} disabled={addDisabled} />
      </div>
    </div>
  );
};

export default CalendarDayCell; 