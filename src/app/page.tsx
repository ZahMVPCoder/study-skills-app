'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { LandingPage } from '@/components/LandingPage';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // If authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null; // Show nothing while redirecting
  }

  return (
    <LandingPage 
      onGetStarted={() => router.push('/signup')}
      onLogin={() => router.push('/login')}
      onAbout={() => router.push('/about')}
    />
  );
}