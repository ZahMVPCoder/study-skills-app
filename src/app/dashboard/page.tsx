'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { StudyPlanner } from '@/components/StudyPlanner';
import { AssignmentTracker } from '@/components/AssignmentTracker';
import { StudyTips } from '@/components/StudyTips';
import { PomodoroTimer } from '@/components/PomodoroTimer';
import { RubricEvidence } from '@/components/RubricEvidence';
import { AIInsights } from '@/components/AIInsights';
import { Calendar, Target, Lightbulb, Timer, FileText, Sparkles, LogOut, User } from 'lucide-react';

type TabType = 'planner' | 'assignments' | 'timer' | 'tips' | 'rubric' | 'ai-insights';

export default function DashboardPage() {
  const { user, isAuthenticated, logout, hasRole } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('planner');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  const tabs = [
    { id: 'planner' as TabType, label: 'Study Planner', icon: Calendar },
    { id: 'assignments' as TabType, label: 'Assignments', icon: Target },
    { id: 'timer' as TabType, label: 'Focus Timer', icon: Timer },
    { id: 'tips' as TabType, label: 'Study Tips', icon: Lightbulb },
    { id: 'ai-insights' as TabType, label: 'AI Insights', icon: Sparkles },
  ];

  // Add rubric tab for coaches and instructors
  if (hasRole(['coach', 'instructor'])) {
    tabs.push({ id: 'rubric' as TabType, label: 'Rubric Evidence', icon: FileText });
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Study Skills Support
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-5 h-5" />
                <span className="text-sm">
                  {user?.name} ({user?.role})
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap
                    ${isActive 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'planner' && <StudyPlanner />}
        {activeTab === 'assignments' && <AssignmentTracker />}
        {activeTab === 'timer' && <PomodoroTimer />}
        {activeTab === 'tips' && <StudyTips />}
        {activeTab === 'ai-insights' && <AIInsights />}
        {activeTab === 'rubric' && hasRole(['coach', 'instructor']) && <RubricEvidence />}
      </main>
    </div>
  );
}
