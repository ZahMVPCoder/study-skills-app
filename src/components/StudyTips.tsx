'use client';

import { useState } from 'react';
import { Lightbulb, RefreshCw, Brain, Target, Heart, Zap, BookOpen, Users } from 'lucide-react';

interface Tip {
  category: string;
  icon: string;
  title: string;
  description: string;
}

const studyTips: Tip[] = [
  {
    category: 'Focus',
    icon: 'brain',
    title: 'Use the Pomodoro Technique',
    description: 'Study for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.'
  },
  {
    category: 'Focus',
    icon: 'brain',
    title: 'Eliminate Distractions',
    description: 'Put your phone on silent, close unnecessary tabs, and create a dedicated study space.'
  },
  {
    category: 'Organization',
    icon: 'target',
    title: 'Set Clear Goals',
    description: 'Before each study session, write down what you want to accomplish. Specific goals lead to better results.'
  },
  {
    category: 'Organization',
    icon: 'target',
    title: 'Use a Planner',
    description: 'Keep track of assignments, tests, and deadlines. Review your planner daily to stay on top of your work.'
  },
  {
    category: 'Organization',
    icon: 'target',
    title: 'Prioritize Tasks',
    description: 'Tackle high-priority or difficult tasks when your energy is highest, usually early in the day.'
  },
  {
    category: 'Learning',
    icon: 'book',
    title: 'Active Recall',
    description: 'Test yourself regularly instead of just re-reading notes. This strengthens memory and understanding.'
  },
  {
    category: 'Learning',
    icon: 'book',
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals over time. This helps move information into long-term memory.'
  },
  {
    category: 'Learning',
    icon: 'book',
    title: 'Teach Someone Else',
    description: 'Explaining concepts to others helps you identify gaps in your own understanding.'
  },
  {
    category: 'Learning',
    icon: 'book',
    title: 'Use Multiple Sources',
    description: 'Don\'t rely on just one textbook or resource. Different explanations can deepen understanding.'
  },
  {
    category: 'Wellbeing',
    icon: 'heart',
    title: 'Get Enough Sleep',
    description: 'Aim for 7-9 hours per night. Sleep is crucial for memory consolidation and cognitive function.'
  },
  {
    category: 'Wellbeing',
    icon: 'heart',
    title: 'Take Regular Breaks',
    description: 'Short breaks during study sessions help maintain concentration and prevent mental fatigue.'
  },
  {
    category: 'Wellbeing',
    icon: 'heart',
    title: 'Stay Hydrated',
    description: 'Keep water nearby while studying. Even mild dehydration can impair concentration and memory.'
  },
  {
    category: 'Wellbeing',
    icon: 'heart',
    title: 'Exercise Regularly',
    description: 'Physical activity boosts brain function, reduces stress, and improves sleep quality.'
  },
  {
    category: 'Motivation',
    icon: 'zap',
    title: 'Reward Yourself',
    description: 'After completing a study goal, give yourself a small reward. This reinforces positive study habits.'
  },
  {
    category: 'Motivation',
    icon: 'zap',
    title: 'Find Your Why',
    description: 'Connect your studies to your long-term goals. Understanding the purpose makes the work meaningful.'
  },
  {
    category: 'Motivation',
    icon: 'zap',
    title: 'Track Your Progress',
    description: 'Keep a record of what you\'ve accomplished. Seeing your progress builds confidence and motivation.'
  },
  {
    category: 'Collaboration',
    icon: 'users',
    title: 'Study Groups',
    description: 'Join or form study groups. Discussing material with peers can provide new perspectives and insights.'
  },
  {
    category: 'Collaboration',
    icon: 'users',
    title: 'Ask for Help',
    description: 'Don\'t hesitate to ask teachers, tutors, or classmates when you\'re stuck. Asking questions is a strength.'
  }
];

const categories = ['All', 'Focus', 'Organization', 'Learning', 'Wellbeing', 'Motivation', 'Collaboration'];

export function StudyTips() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [randomTip, setRandomTip] = useState<Tip | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-6 h-6" />;
      case 'target': return <Target className="w-6 h-6" />;
      case 'book': return <BookOpen className="w-6 h-6" />;
      case 'heart': return <Heart className="w-6 h-6" />;
      case 'zap': return <Zap className="w-6 h-6" />;
      case 'users': return <Users className="w-6 h-6" />;
      default: return <Lightbulb className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Focus': return 'from-blue-500 to-blue-600';
      case 'Organization': return 'from-purple-500 to-purple-600';
      case 'Learning': return 'from-green-500 to-green-600';
      case 'Wellbeing': return 'from-pink-500 to-pink-600';
      case 'Motivation': return 'from-orange-500 to-orange-600';
      case 'Collaboration': return 'from-teal-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const filteredTips = selectedCategory === 'All'
    ? studyTips
    : studyTips.filter(tip => tip.category === selectedCategory);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * studyTips.length);
    setRandomTip(studyTips[randomIndex]);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl mb-1">Study Tips & Strategies</h2>
        <p className="text-gray-600">Evidence-based techniques to improve your learning</p>
      </div>

      {/* Random Tip Generator */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-400 rounded-full p-3">
            <Lightbulb className="w-8 h-8 text-yellow-900" />
          </div>
          <div className="flex-1">
            {randomTip ? (
              <>
                <div className="text-xs text-yellow-700 mb-1">{randomTip.category}</div>
                <h3 className="text-lg text-yellow-900 mb-2">{randomTip.title}</h3>
                <p className="text-yellow-800">{randomTip.description}</p>
              </>
            ) : (
              <>
                <h3 className="text-lg text-yellow-900 mb-2">Get a Random Study Tip</h3>
                <p className="text-yellow-800">Click the button below to discover a helpful study strategy!</p>
              </>
            )}
          </div>
        </div>
        <button
          onClick={getRandomTip}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-4 py-3 rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          {randomTip ? 'Get Another Tip' : 'Get Random Tip'}
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTips.map((tip, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`bg-gradient-to-br ${getCategoryColor(tip.category)} rounded-lg p-3 text-white shrink-0`}>
                {getIcon(tip.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-1">{tip.category}</div>
                <h3 className="text-lg text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Lightbulb className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>No tips found in this category</p>
        </div>
      )}
    </div>
  );
}