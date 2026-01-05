export type UserRole = 'student' | 'coach' | 'instructor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Mock users - Replace with Neon database calls
export const mockUsers = [
  { id: '1', email: 'rob@launchpadphilly.org', password: 'lpuser1', name: 'Rob', role: 'coach' as UserRole },
  { id: '2', email: 'sanaa@launchpadphilly.org', password: 'lpuser2', name: 'Sanaa', role: 'instructor' as UserRole },
  { id: '3', email: 'taheera@launchpadphilly.org', password: 'lpuser3', name: 'Taheera', role: 'student' as UserRole },
];