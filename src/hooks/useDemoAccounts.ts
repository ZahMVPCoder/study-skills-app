'use client';

import { useEffect } from 'react';

// Initialize demo accounts in localStorage
export function useDemoAccounts() {
  useEffect(() => {
    // Only run once on mount
    const initialized = localStorage.getItem('demoAccountsInitialized');
    
    if (!initialized) {
      const demoAccounts = [
        {
          id: 'demo-1',
          email: 'rob@launchpadphilly.org',
          password: 'lpuser1',
          name: 'Rob',
          role: 'coach',
        },
        {
          id: 'demo-2',
          email: 'sanaa@launchpadphilly.org',
          password: 'lpuser2',
          name: 'Sanaa',
          role: 'instructor',
        },
        {
          id: 'demo-3',
          email: 'taheera@launchpadphilly.org',
          password: 'lpuser3',
          name: 'Taheera',
          role: 'student',
        },
      ];

      localStorage.setItem('registeredUsers', JSON.stringify(demoAccounts));
      localStorage.setItem('demoAccountsInitialized', 'true');
      console.log('Demo accounts initialized');
    }
  }, []);
}
