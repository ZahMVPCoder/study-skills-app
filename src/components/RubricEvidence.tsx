'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FileText, Plus, Trash2, Star, TrendingUp, Award, Search, Filter } from 'lucide-react';

interface Evidence {
  id: string;
  studentName: string;
  studentEmail: string;
  subject: string;
  rubricCategory: string;
  score: number;
  maxScore: number;
  description: string;
  dateSubmitted: string;
  evaluatedBy: string;
  notes: string;
}

const rubricCategories = [
  'Time Management',
  'Study Techniques',
  'Organization',
  'Focus & Concentration',
  'Goal Setting',
  'Self-Assessment',
];

export function RubricEvidence() {
  const { user } = useAuth();
  const [evidences, setEvidences] = useState<Evidence[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    subject: '',
    rubricCategory: rubricCategories[0],
    score: 0,
    maxScore: 5,
    description: '',
    notes: '',
  });

  // Load from localStorage - TODO: Replace with Neon database API call
  useEffect(() => {
    const saved = localStorage.getItem('rubricEvidence');
    if (saved) {
      setEvidences(JSON.parse(saved));
    } else {
      // Add some sample data
      const sampleData: Evidence[] = [
        {
          id: '1',
          studentName: 'Alex Student',
          studentEmail: 'student@example.com',
          subject: 'Mathematics',
          rubricCategory: 'Time Management',
          score: 4,
          maxScore: 5,
          description: 'Successfully completed weekly study schedule for 3 consecutive weeks',
          dateSubmitted: '2025-12-28',
          evaluatedBy: 'Coach Smith',
          notes: 'Great improvement in planning study sessions',
        },
        {
          id: '2',
          studentName: 'Alex Student',
          studentEmail: 'student@example.com',
          subject: 'Science',
          rubricCategory: 'Study Techniques',
          score: 3,
          maxScore: 5,
          description: 'Demonstrated use of active recall and spaced repetition',
          dateSubmitted: '2025-12-25',
          evaluatedBy: 'Dr. Johnson',
          notes: 'Good progress, needs to apply techniques more consistently',
        },
      ];
      setEvidences(sampleData);
      localStorage.setItem('rubricEvidence', JSON.stringify(sampleData));
    }
  }, []);

  // Save to localStorage - TODO: Replace with Neon database API call
  useEffect(() => {
    localStorage.setItem('rubricEvidence', JSON.stringify(evidences));
  }, [evidences]);

  const addEvidence = () => {
    if (!formData.studentName.trim() || !formData.description.trim()) return;

    const newEvidence: Evidence = {
      id: Date.now().toString(),
      ...formData,
      dateSubmitted: new Date().toISOString().split('T')[0],
      evaluatedBy: user?.name || 'Unknown',
    };

    setEvidences([newEvidence, ...evidences]);
    setFormData({
      studentName: '',
      studentEmail: '',
      subject: '',
      rubricCategory: rubricCategories[0],
      score: 0,
      maxScore: 5,
      description: '',
      notes: '',
    });
    setShowForm(false);
  };

  const deleteEvidence = (id: string) => {
    setEvidences(evidences.filter(e => e.id !== id));
  };

  const getFilteredEvidences = () => {
    return evidences.filter(evidence => {
      const matchesSearch = 
        evidence.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evidence.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evidence.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        filterCategory === 'All' || evidence.rubricCategory === filterCategory;
      
      return matchesSearch && matchesCategory;
    });
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600 bg-green-50';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50';
    if (percentage >= 40) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const stats = {
    totalEvidences: evidences.length,
    averageScore: evidences.length > 0 
      ? (evidences.reduce((sum, e) => sum + (e.score / e.maxScore) * 100, 0) / evidences.length).toFixed(1)
      : 0,
    uniqueStudents: new Set(evidences.map(e => e.studentEmail)).size,
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl mb-1">Rubric Evidence Tracker</h2>
          <p className="text-gray-600">Track student progress and learning evidence</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Evidence
        </button>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl text-blue-600">{stats.totalEvidences}</div>
              <div className="text-sm text-blue-700">Total Evidence</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 rounded-lg p-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl text-green-600">{stats.averageScore}%</div>
              <div className="text-sm text-green-700">Average Score</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 rounded-lg p-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl text-purple-600">{stats.uniqueStudents}</div>
              <div className="text-sm text-purple-700">Students Tracked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Evidence Form */}
      {showForm && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
          <h3 className="mb-4">New Evidence Entry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Student Name</label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g., John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Student Email</label>
              <input
                type="email"
                value={formData.studentEmail}
                onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                placeholder="student@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g., Mathematics"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Rubric Category</label>
              <select
                value={formData.rubricCategory}
                onChange={(e) => setFormData({ ...formData, rubricCategory: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {rubricCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Score</label>
              <input
                type="number"
                value={formData.score}
                onChange={(e) => setFormData({ ...formData, score: parseInt(e.target.value) || 0 })}
                min="0"
                max={formData.maxScore}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Max Score</label>
              <input
                type="number"
                value={formData.maxScore}
                onChange={(e) => setFormData({ ...formData, maxScore: parseInt(e.target.value) || 5 })}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Evidence Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the evidence of learning..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Additional Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any additional observations or recommendations..."
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={addEvidence}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Evidence
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student, subject, or description..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            {rubricCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Evidence List */}
      <div className="space-y-4">
        {getFilteredEvidences().map(evidence => (
          <div
            key={evidence.id}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg text-gray-800">{evidence.studentName}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${getScoreColor(evidence.score, evidence.maxScore)}`}>
                    <Star className="w-4 h-4 inline mr-1" />
                    {evidence.score}/{evidence.maxScore}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {evidence.rubricCategory}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {evidence.subject}
                  </span>
                  <span className="text-gray-500">
                    {new Date(evidence.dateSubmitted).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteEvidence(evidence.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-700 mb-3">{evidence.description}</p>
            
            {evidence.notes && (
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-600 italic">{evidence.notes}</p>
              </div>
            )}
            
            <div className="text-xs text-gray-500">
              Evaluated by: {evidence.evaluatedBy}
            </div>
          </div>
        ))}
      </div>

      {getFilteredEvidences().length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>No evidence entries found</p>
        </div>
      )}
    </div>
  );
}