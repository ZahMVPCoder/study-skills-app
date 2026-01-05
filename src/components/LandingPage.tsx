'use client';

import { GraduationCap, Calendar, Target, Brain, Timer, Award, FileText, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
  onAbout: () => void;
}

export function LandingPage({ onGetStarted, onLogin, onAbout }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Study Skills Support
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onAbout}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <button
                onClick={onLogin}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Log In
              </button>
              <button
                onClick={onGetStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master Your Study Habits,
            <br />
            Achieve Academic Success
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            An AI-powered platform designed for <span className="text-blue-600">students</span> struggling with time management, 
            and <span className="text-purple-600">coaches & instructors</span> who want to track and improve student outcomes.
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Stop missing deadlines. Stay organized. Build better study habits. Get personalized AI insights.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Start Planning Your Success
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onLogin}
              className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg border-2 border-blue-600"
            >
              I Have an Account
            </button>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl text-center mb-6 text-gray-800">
            Are You Struggling With...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-gray-800">Missing Deadlines</h3>
              <p className="text-sm text-gray-600">Assignments pile up and you're always cramming at the last minute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="mb-2 text-gray-800">Poor Organization</h3>
              <p className="text-sm text-gray-600">You forget what's due when and have no clear study plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="mb-2 text-gray-800">Wasted Study Time</h3>
              <p className="text-sm text-gray-600">Hours studying but not retaining information effectively</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">Powerful tools for students, coaches, and instructors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">Weekly Study Planner</h3>
              <p className="text-gray-600 mb-3">
                Visualize your entire week. Schedule study sessions by subject with time blocks. Never forget when to study what.
              </p>
              <button
                onClick={onGetStarted}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 rounded-lg p-3 w-fit mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">Assignment Tracker</h3>
              <p className="text-gray-600 mb-3">
                Track all assignments with due dates and priorities. Get alerts for overdue tasks. See completion stats at a glance.
              </p>
              <button
                onClick={onGetStarted}
                className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 rounded-lg p-3 w-fit mb-4">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">Pomodoro Timer</h3>
              <p className="text-gray-600 mb-3">
                Stay focused with timed study sessions. Customize work and break intervals. Track your total focus time.
              </p>
              <button
                onClick={onGetStarted}
                className="text-green-600 hover:text-green-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 rounded-lg p-3 w-fit mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">AI-Powered Insights</h3>
              <p className="text-gray-600 mb-3">
                Get personalized recommendations based on your study patterns. Predict problems before they happen. Optimize your learning.
              </p>
              <button
                onClick={onGetStarted}
                className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 rounded-lg p-3 w-fit mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">Study Tips Library</h3>
              <p className="text-gray-600 mb-3">
                Access 18+ evidence-based study techniques. Filter by category. Learn memory tricks, focus strategies, and more.
              </p>
              <button
                onClick={onGetStarted}
                className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="bg-pink-600 rounded-lg p-3 w-fit mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">Rubric Evidence (Coaches)</h3>
              <p className="text-gray-600 mb-3">
                Track student learning evidence. Score with rubrics. Monitor progress across multiple students. Generate insights.
              </p>
              <button
                onClick={onGetStarted}
                className="text-pink-600 hover:text-pink-700 flex items-center gap-1"
              >
                Try it now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Sign Up for Free</h3>
              <p className="text-gray-600">
                Create your account in 30 seconds. Choose your role: Student, Coach, or Instructor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Add Your Schedule</h3>
              <p className="text-gray-600">
                Input your assignments and plan your study sessions for the week ahead.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Get AI Insights</h3>
              <p className="text-gray-600">
                Receive personalized recommendations and watch your productivity soar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">Who Benefits the Most?</h2>
            <p className="text-xl text-gray-600">Designed for three types of users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl mb-4 text-blue-600">Students</h3>
              <p className="text-gray-600 mb-6">
                Perfect for high school and college students who want to improve their grades and reduce stress.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Never miss an assignment deadline again</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build consistent study habits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Get AI-powered study recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Improve time management skills</span>
                </li>
              </ul>
            </div>

            {/* Coaches */}
            <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl mb-4 text-purple-600">Coaches</h3>
              <p className="text-gray-600 mb-6">
                Ideal for academic coaches who mentor students and track their progress over time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Document student learning evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Track progress with rubric scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monitor multiple students at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Generate progress reports easily</span>
                </li>
              </ul>
            </div>

            {/* Instructors */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl mb-4 text-green-600">Instructors</h3>
              <p className="text-gray-600 mb-6">
                Essential for teachers and professors who want data-driven insights on student performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Evaluate study skills systematically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Use rubrics for consistent assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Identify students who need support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">View class-wide analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl mb-4">Ready to Transform Your Study Habits?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students, coaches, and instructors who are achieving more with less stress.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Free Today
            </button>
            <button
              onClick={onLogin}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Log In
            </button>
          </div>
          <p className="text-sm mt-6 opacity-75">No credit card required • Free forever • Get started in 30 seconds</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="text-lg">Study Skills Support</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to reach their full potential through better study habits and personalized support.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><button onClick={onLogin} className="hover:text-white transition-colors">Login</button></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>LaunchPad Philly</li>
                <li>support@launchpadphilly.org</li>
                <li>launchpadphilly.org</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Study Skills Support by LaunchPad Philly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}