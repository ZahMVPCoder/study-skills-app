import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LandingPage } from './components/LandingPage';
import { About } from './components/About';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { StudyPlanner } from './components/StudyPlanner';
import { AssignmentTracker } from './components/AssignmentTracker';
import { StudyTips } from './components/StudyTips';
import { PomodoroTimer } from './components/PomodoroTimer';
import { RubricEvidence } from './components/RubricEvidence';
import { AIInsights } from './components/AIInsights';
import { Calendar, Target, Lightbulb, Timer, FileText, Sparkles, LogOut, User } from 'lucide-react';

type TabType = 'planner' | 'assignments' | 'timer' | 'tips' | 'rubric' | 'ai-insights';
type AuthView = 'landing' | 'about' | 'login' | 'signup';

function AppContent() {
  const { user, isAuthenticated, logout, hasRole } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('planner');
  const [authView, setAuthView] = useState<AuthView>('landing');

  // Show landing/about/login/signup if not authenticated
  if (!isAuthenticated) {
    if (authView === 'landing') {
      return (
        <LandingPage 
          onGetStarted={() => setAuthView('signup')}
          onLogin={() => setAuthView('login')}
          onAbout={() => setAuthView('about')}
        />
      );
    }
    
    if (authView === 'about') {
      return <About onBack={() => setAuthView('landing')} />;
    }
    
    if (authView === 'signup') {
      return <Signup onSwitchToLogin={() => setAuthView('login')} />;
    }
    
    return <Login onSwitchToSignup={() => setAuthView('signup')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="mb-8 mt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Study Skills Support
              </h1>
              <p className="text-gray-600">Plan, Track, and Succeed in Your Studies</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" />
                  <span>{user?.name}</span>
                </div>
                <div className="text-sm text-gray-500 capitalize">{user?.role}</div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-2 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('planner')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'planner'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Study Planner</span>
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'assignments'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-5 h-5" />
            <span>Assignments</span>
          </button>
          <button
            onClick={() => setActiveTab('timer')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'timer'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Timer className="w-5 h-5" />
            <span>Focus Timer</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-insights')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'ai-insights'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>AI Insights</span>
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'tips'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span>Study Tips</span>
          </button>
          
          {/* Role-Based Access: Only show Rubric Evidence to coaches and instructors */}
          {hasRole(['coach', 'instructor']) && (
            <button
              onClick={() => setActiveTab('rubric')}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'rubric'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Rubric Evidence</span>
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'planner' && <StudyPlanner />}
          {activeTab === 'assignments' && <AssignmentTracker />}
          {activeTab === 'timer' && <PomodoroTimer />}
          {activeTab === 'ai-insights' && <AIInsights />}
          {activeTab === 'tips' && <StudyTips />}
          {activeTab === 'rubric' && hasRole(['coach', 'instructor']) && <RubricEvidence />}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}