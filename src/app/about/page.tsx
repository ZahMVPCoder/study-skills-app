'use client';

import { About } from '@/components/About';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  return <About onBack={() => router.push('/')} />;
}
