'use client';

import React from "react";
import AuthButton from "./components/AuthButton";

const HomePage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontFamily: 'Pretendard', fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#000' }}>재택근무 캘린더</h1>
      <p style={{ fontFamily: 'Pretendard', fontSize: 18, color: '#333', marginBottom: 32 }}>Google 계정으로 로그인하여 팀의 재택/휴가 일정을 관리하세요.</p>
      <AuthButton />
    </div>
  );
};

export default HomePage;