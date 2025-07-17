"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const AuthButton: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  return session ? (
    <button onClick={() => signOut()} style={{ fontFamily: 'Pretendard', fontSize: 18, background: '#fff', border: '1px solid #000', color: '#000', padding: '8px 16px', cursor: 'pointer' }}>
      로그아웃
    </button>
  ) : (
    <button onClick={() => signIn('google')} style={{ fontFamily: 'Pretendard', fontSize: 18, background: '#fff', border: '1px solid #000', color: '#000', padding: '8px 16px', cursor: 'pointer' }}>
      Google 로그인
    </button>
  );
};

export default AuthButton; 