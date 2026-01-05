// Run this script once to create tables: npx tsx init-db.ts

import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const initDatabase = async () => {
  try {
    console.log('Initializing Neon database...\n');

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'coach', 'instructor')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Users table created');

    // Create study_sessions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS study_sessions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        subject VARCHAR(255) NOT NULL,
        day VARCHAR(20) NOT NULL,
        start_time VARCHAR(10) NOT NULL,
        duration INTEGER NOT NULL,
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Study Sessions table created');

    // Create assignments table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignments (
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
    `);
    console.log('✓ Assignments table created');

    // Create rubric_evidence table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rubric_evidence (
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
    `);
    console.log('✓ Rubric Evidence table created');

    console.log('\n✅ Database initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

initDatabase();
