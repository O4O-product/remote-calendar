'use client';

import React from "react";
import CalendarMonthNavButton from "../components/CalendarMonthNavButton";
import ContainerButton from "../components/ContainerButton";
import CalendarDayLabel from "../components/CalendarDayLabel";
import CalendarDayCell from "../components/CalendarDayCell";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

// Mock data for demonstration
const userName = "이지현";
const year = 2024;
const month = 7;
const daysInMonth = 31;
const firstDayOfWeek = 1; // 0=일, 1=월, ...
const totalCells = 35; // 5주
const days: any[] = [];

// 1. 6/30(일) 첫 셀에 추가
if (firstDayOfWeek === 1) {
  days.push({
    dateBlockProps: {
      date: 30,
      type: "disabled",
    },
    percentBlockProps: {
      percent: 0,
      warning: false,
    },
    statuses: [],
    onAddSchedule: undefined,
    addDisabled: true,
  });
}
// 2. 7/1(월)~7/31(수) 순서로 채움
for (let d = 1; d <= daysInMonth; d++) {
  // 요일 계산: (days.length % 7) === 0이면 일요일, === 6이면 토요일
  const cellIdx = days.length;
  days.push({
    dateBlockProps: {
      date: d,
      type: d === 15 ? "today" : (cellIdx % 7 === 0 || cellIdx % 7 === 6 ? "disabled" : "default"),
    },
    percentBlockProps: {
      percent: Math.floor(Math.random() * 100),
      warning: Math.random() > 0.5,
    },
    statuses: [
      { name: "이지현", type: "remote" },
      ...(d % 3 === 0 ? [{ name: "홍길동", type: "vacation" }] : []),
    ],
    onAddSchedule: () => alert(`${d}일 일정 추가`),
    addDisabled: false,
  });
}
// 3. 남는 셀(null) 마지막에만 추가
while (days.length < totalCells) {
  days.push(null);
}

const RemoteCalendarPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0" }}>
      {/* Header */}
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, padding: "0 16px" }}>
        {/* Left: Month navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <CalendarMonthNavButton direction="prev" onClick={() => alert("이전 달")}/>
          <span style={{ fontSize: 32, fontWeight: 500, margin: "0 8px", userSelect: "none", color: "#000", fontFamily: "Pretendard", fontStyle: "normal", lineHeight: "normal" }}>{year}.{String(month).padStart(2, "0")}</span>
          <CalendarMonthNavButton direction="next" onClick={() => alert("다음 달")}/>
          <div style={{ marginLeft: 8 }}>
            <ContainerButton onClick={() => alert("오늘로 이동")}>오늘</ContainerButton>
          </div>
        </div>
        {/* Right: User info */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 600, color: "#6E6E6E", userSelect: "none", fontFamily: "Pretendard", fontStyle: "normal", lineHeight: "normal" }}>{userName}</span>
          <ContainerButton onClick={() => alert("로그아웃")}>로그아웃</ContainerButton>
        </div>
      </div>
      {/* Calendar */}
      <div style={{ width: "100%", background: "#fff", padding: 0, boxSizing: "border-box" }}>
        {/* Weekday labels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, width: "100%", marginBottom: 0, padding: 0 }}>
          {WEEKDAYS.map((d, i) => (
            <CalendarDayLabel key={d} label={d} isLast={i === 6} />
          ))}
        </div>
        {/* Calendar grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, width: "100%", padding: 0 }}>
          {days.map((day, i) => (
            <div key={i} style={{ minHeight: 180, width: "100%" }}>
              {day ? <CalendarDayCell {...day} /> : null}
            </div>
          ))}
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .calendar-root { padding: 8px 0; }
          .calendar-header, .calendar-main { max-width: 100vw !important; padding: 0 4px !important; }
          .calendar-main { padding: 8px !important; }
        }
      `}</style>
    </div>
  );
};

export default RemoteCalendarPage; 