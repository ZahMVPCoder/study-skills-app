'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Calendar, AlertCircle, Target } from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  notes: string;
}

export function AssignmentTracker() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    dueDate: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    notes: ''
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('assignments');
    if (saved) {
      setAssignments(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = () => {
    if (!formData.title.trim() || !formData.dueDate) return;

    const newAssignment: Assignment = {
      id: Date.now().toString(),
      ...formData,
      completed: false
    };

    setAssignments([...assignments, newAssignment]);
    setFormData({
      title: '',
      subject: '',
      dueDate: '',
      priority: 'medium',
      notes: ''
    });
    setShowForm(false);
  };

  const toggleComplete = (id: string) => {
    setAssignments(assignments.map(a =>
      a.id === id ? { ...a, completed: !a.completed } : a
    ));
  };

  const deleteAssignment = (id: string) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getFilteredAssignments = () => {
    let filtered = assignments;
    if (filter === 'active') {
      filtered = assignments.filter(a => !a.completed);
    } else if (filter === 'completed') {
      filtered = assignments.filter(a => a.completed);
    }
    return filtered.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return a.dueDate.localeCompare(b.dueDate);
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const stats = {
    total: assignments.length,
    active: assignments.filter(a => !a.completed).length,
    completed: assignments.filter(a => a.completed).length
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl mb-1">Assignment & Goal Tracker</h2>
          <p className="text-gray-600">Keep track of your assignments and academic goals</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Assignment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
          <div className="text-2xl text-blue-600 mb-1">{stats.total}</div>
          <div className="text-sm text-blue-700">Total</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
          <div className="text-2xl text-orange-600 mb-1">{stats.active}</div>
          <div className="text-sm text-orange-700">Active</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
          <div className="text-2xl text-green-600 mb-1">{stats.completed}</div>
          <div className="text-sm text-green-700">Completed</div>
        </div>
      </div>

      {/* Add Assignment Form */}
      {showForm && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
          <h3 className="mb-4">New Assignment or Goal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Math homework chapter 5"
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
              <label className="block text-sm text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Notes (optional)</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Additional details..."
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={addAssignment}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Assignment
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

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>

      {/* Assignments List */}
      <div className="space-y-3">
        {getFilteredAssignments().map(assignment => {
          const daysUntilDue = getDaysUntilDue(assignment.dueDate);
          const isOverdue = daysUntilDue < 0 && !assignment.completed;
          const isDueSoon = daysUntilDue >= 0 && daysUntilDue <= 3 && !assignment.completed;

          return (
            <div
              key={assignment.id}
              className={`border rounded-lg p-4 transition-all ${
                assignment.completed
                  ? 'bg-gray-50 border-gray-200 opacity-75'
                  : 'bg-white border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleComplete(assignment.id)}
                  className="mt-1 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {assignment.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className={`${assignment.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {assignment.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(assignment.priority)}`}>
                        {assignment.priority}
                      </span>
                      <button
                        onClick={() => deleteAssignment(assignment.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {assignment.subject && (
                    <p className="text-sm text-gray-600 mb-2">{assignment.subject}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className={`flex items-center gap-1 ${
                      isOverdue ? 'text-red-600' : isDueSoon ? 'text-orange-600' : 'text-gray-600'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      <span>
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                        {isOverdue && ' (Overdue)'}
                        {isDueSoon && ` (${daysUntilDue} day${daysUntilDue !== 1 ? 's' : ''})`}
                      </span>
                    </div>
                    {(isOverdue || isDueSoon) && !assignment.completed && (
                      <div className="flex items-center gap-1 text-orange-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs">Needs attention</span>
                      </div>
                    )}
                  </div>
                  {assignment.notes && (
                    <p className="text-sm text-gray-500 mt-2 italic">{assignment.notes}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {getFilteredAssignments().length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>
            {filter === 'completed'
              ? 'No completed assignments yet'
              : filter === 'active'
              ? 'No active assignments'
              : 'No assignments yet. Click "Add Assignment" to get started!'}
          </p>
        </div>
      )}
    </div>
  );
}