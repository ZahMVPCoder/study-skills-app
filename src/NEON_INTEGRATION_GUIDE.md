# Neon Database Integration Guide

This app is ready to integrate with your Neon Console backend. Follow these steps to connect it to your PostgreSQL database.

## Demo Credentials

Currently, the app uses these demo accounts (stored in `/types/auth.ts`):

- **Student**: taheera@launchpadphilly.org / lpuser3
- **Coach**: rob@launchpadphilly.org / lpuser1
- **Instructor**: sanaa@launchpadphilly.org / lpuser2

## Database Schema

Create these tables in your Neon database:

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'coach', 'instructor')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Study Sessions Table
```sql
CREATE TABLE study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  subject VARCHAR(255) NOT NULL,
  day VARCHAR(20) NOT NULL,
  start_time VARCHAR(10) NOT NULL,
  duration INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Assignments Table
```sql
CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  due_date DATE NOT NULL,
  priority VARCHAR(20) CHECK (priority IN ('low', 'medium', 'high')),
  completed BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Rubric Evidence Table
```sql
CREATE TABLE rubric_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name VARCHAR(255) NOT NULL,
  student_email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  rubric_category VARCHAR(255) NOT NULL,
  score INTEGER NOT NULL,
  max_score INTEGER NOT NULL,
  description TEXT NOT NULL,
  notes TEXT,
  evaluated_by VARCHAR(255) NOT NULL,
  date_submitted DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints to Create

Create these API endpoints in your backend:

### Authentication
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Study Sessions
- `GET /api/study-sessions` - Get all sessions for user
- `POST /api/study-sessions` - Create new session
- `DELETE /api/study-sessions/:id` - Delete session

### Assignments
- `GET /api/assignments` - Get all assignments for user
- `POST /api/assignments` - Create new assignment
- `PUT /api/assignments/:id` - Update assignment
- `DELETE /api/assignments/:id` - Delete assignment

### Rubric Evidence (Coach/Instructor only)
- `GET /api/rubric-evidence` - Get all evidence entries
- `POST /api/rubric-evidence` - Create new evidence
- `DELETE /api/rubric-evidence/:id` - Delete evidence

## Files to Update

### 1. `/context/AuthContext.tsx`
Replace the login function with your Neon API call:

```typescript
const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch('YOUR_NEON_API_URL/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // For cookies
    });
    
    if (response.ok) {
      const userData = await response.json();
      setUser(userData.user);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(userData.user));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};
```

Replace the signup function with your Neon API call:

```typescript
const signup = async (email: string, password: string, name: string, role: UserRole): Promise<boolean> => {
  try {
    const response = await fetch('YOUR_NEON_API_URL/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, role }),
      credentials: 'include'
    });
    
    if (response.ok) {
      const userData = await response.json();
      setUser(userData.user);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(userData.user));
      return true;
    }
    return false; // Email already exists or other error
  } catch (error) {
    console.error('Signup error:', error);
    return false;
  }
};
```

### 2. `/components/StudyPlanner.tsx`
Replace localStorage calls with API calls:

```typescript
// Load sessions
useEffect(() => {
  const fetchSessions = async () => {
    const response = await fetch('YOUR_NEON_API_URL/api/study-sessions');
    const data = await response.json();
    setSessions(data);
  };
  fetchSessions();
}, []);

// Add session
const addSession = async () => {
  const response = await fetch('YOUR_NEON_API_URL/api/study-sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const newSession = await response.json();
  setSessions([...sessions, newSession]);
};
```

### 3. `/components/AssignmentTracker.tsx`
Similar pattern - replace localStorage with API calls

### 4. `/components/RubricEvidence.tsx`
Similar pattern - replace localStorage with API calls

## Environment Variables

Create a `.env` file:

```
VITE_NEON_API_URL=your_neon_api_url
VITE_NEON_DATABASE_URL=your_neon_connection_string
```

## Security Notes

1. **Never store passwords in plain text** - Use bcrypt or argon2 for password hashing
2. **Use JWT tokens or sessions** for authentication
3. **Implement CORS properly** on your backend
4. **Validate all inputs** on the backend
5. **Use prepared statements** to prevent SQL injection
6. **Implement rate limiting** on login endpoints

## Next Steps

1. Set up your Neon database
2. Create the tables using the SQL above
3. Build your API backend (Node.js/Express, Python/FastAPI, etc.)
4. Update the frontend files to use your API endpoints
5. Deploy both frontend and backend
6. Test thoroughly with different user roles

## Support

For Neon-specific questions, visit: https://neon.tech/docs