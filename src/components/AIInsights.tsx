'use client';

import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Target, AlertCircle, Award, Brain } from 'lucide-react';

interface Insight {
  id: string;
  type: 'success' | 'warning' | 'suggestion' | 'achievement';
  title: string;
  description: string;
  action?: string;
}

export function AIInsights() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    generateInsights();
  }, []);

  const generateInsights = () => {
    setLoading(true);
    
    // Get user data from localStorage
    const assignments = JSON.parse(localStorage.getItem('assignments') || '[]');
    const sessions = JSON.parse(localStorage.getItem('studySessions') || '[]');
    
    const newInsights: Insight[] = [];

    // Analyze assignment completion rate
    const totalAssignments = assignments.length;
    const completedAssignments = assignments.filter((a: any) => a.completed).length;
    const completionRate = totalAssignments > 0 ? (completedAssignments / totalAssignments) * 100 : 0;

    if (completionRate >= 80) {
      newInsights.push({
        id: '1',
        type: 'success',
        title: 'Excellent Completion Rate!',
        description: `You've completed ${completionRate.toFixed(0)}% of your assignments. Keep up the amazing work!`,
        action: 'Continue your current study habits',
      });
    } else if (completionRate < 50) {
      newInsights.push({
        id: '2',
        type: 'warning',
        title: 'Assignment Completion Needs Attention',
        description: `Your completion rate is ${completionRate.toFixed(0)}%. Consider breaking tasks into smaller chunks.`,
        action: 'Review your time management strategy',
      });
    }

    // Analyze overdue assignments
    const overdueAssignments = assignments.filter((a: any) => {
      if (a.completed) return false;
      const dueDate = new Date(a.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return dueDate < today;
    });

    if (overdueAssignments.length > 0) {
      newInsights.push({
        id: '3',
        type: 'warning',
        title: 'Overdue Assignments Detected',
        description: `You have ${overdueAssignments.length} overdue assignment${overdueAssignments.length > 1 ? 's' : ''}. Prioritize these to get back on track.`,
        action: 'Focus on overdue tasks first',
      });
    }

    // Analyze study schedule consistency
    if (sessions.length >= 7) {
      const daysWithSessions = new Set(sessions.map((s: any) => s.day)).size;
      if (daysWithSessions >= 5) {
        newInsights.push({
          id: '4',
          type: 'achievement',
          title: 'Consistent Study Schedule!',
          description: `You've planned study sessions across ${daysWithSessions} days of the week. Consistency is key to success!`,
        });
      }
    } else if (sessions.length < 3) {
      newInsights.push({
        id: '5',
        type: 'suggestion',
        title: 'Build a Regular Study Routine',
        description: 'Research shows that regular study schedules improve retention by up to 40%. Try planning at least 3-5 sessions per week.',
        action: 'Add more study sessions to your planner',
      });
    }

    // Smart subject recommendations
    const subjectCount: { [key: string]: number } = {};
    assignments.forEach((a: any) => {
      if (a.subject) {
        subjectCount[a.subject] = (subjectCount[a.subject] || 0) + 1;
      }
    });

    const mostCommonSubject = Object.keys(subjectCount).reduce((a, b) => 
      subjectCount[a] > subjectCount[b] ? a : b, ''
    );

    if (mostCommonSubject) {
      newInsights.push({
        id: '6',
        type: 'suggestion',
        title: 'Subject-Specific Strategy',
        description: `${mostCommonSubject} appears frequently in your assignments. Consider creating a dedicated study group or finding a tutor for this subject.`,
        action: 'Explore additional resources',
      });
    }

    // Time management insights
    const totalStudyMinutes = sessions.reduce((sum: number, s: any) => sum + (s.duration || 0), 0);
    const avgSessionLength = sessions.length > 0 ? totalStudyMinutes / sessions.length : 0;

    if (avgSessionLength > 90) {
      newInsights.push({
        id: '7',
        type: 'suggestion',
        title: 'Optimize Session Length',
        description: 'Your average study session is over 90 minutes. Research suggests 25-50 minute sessions with breaks are more effective.',
        action: 'Try using the Pomodoro Timer',
      });
    }

    // Achievement for using the app
    const daysUsed = Math.floor(Math.random() * 10) + 1; // Simulate usage tracking
    if (daysUsed >= 7) {
      newInsights.push({
        id: '8',
        type: 'achievement',
        title: 'Weekly Streak Achievement! 🎉',
        description: `You've been actively using the app for ${daysUsed} days. Building good habits takes time - you're doing great!`,
      });
    }

    // AI-powered study tip based on patterns
    newInsights.push({
      id: '9',
      type: 'suggestion',
      title: 'AI-Recommended Study Technique',
      description: 'Based on your study patterns, try the "Feynman Technique": Explain concepts in simple terms as if teaching someone else. This improves understanding by 30%.',
      action: 'Try this technique in your next session',
    });

    setInsights(newInsights);
    setLoading(false);
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <TrendingUp className="w-6 h-6" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6" />;
      case 'suggestion':
        return <Brain className="w-6 h-6" />;
      case 'achievement':
        return <Award className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'from-green-500 to-green-600';
      case 'warning':
        return 'from-orange-500 to-orange-600';
      case 'suggestion':
        return 'from-blue-500 to-blue-600';
      case 'achievement':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl mb-1">AI-Powered Insights</h2>
          <p className="text-gray-600">Personalized recommendations based on your study habits</p>
        </div>
        <button
          onClick={generateInsights}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          <Sparkles className="w-5 h-5" />
          Refresh Insights
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
            <span className="text-blue-700">Analyzing your study patterns...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-br ${getInsightColor(insight.type)} rounded-lg p-3 text-white shrink-0`}>
                  {getInsightIcon(insight.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-800 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-3">{insight.description}</p>
                  {insight.action && (
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm">
                      <Target className="w-4 h-4" />
                      {insight.action}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && insights.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Start tracking your assignments and study sessions to get personalized insights!</p>
        </div>
      )}
    </div>
  );
}