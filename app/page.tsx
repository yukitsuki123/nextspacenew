'use client';
import { useAuth } from '@/context/useAuth';
import React from 'react';
import { useShallow } from 'zustand/shallow';

export default function Home() {
  const { user }: any = useAuth(
    useShallow((state) => ({
      user: state.user,
    })),
  );
  console.log(`user is: ${user}`);
  return <div className="min-h-screen w-full bg-slate-300">hello</div>;
}
