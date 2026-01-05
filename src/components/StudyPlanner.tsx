'use client';

import { useState, useEffect } from "react";
import { Plus, Trash2, Clock, Calendar } from "lucide-react";

interface StudySession {
  id: string;
  subject: string;
  day: string;
  startTime: string;
  duration: number;
  notes: string;
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function StudyPlanner() {
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    day: "Monday",
    startTime: "09:00",
    duration: 60,
    notes: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("studySessions");
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "studySessions",
      JSON.stringify(sessions),
    );
  }, [sessions]);

  const addSession = () => {
    if (!formData.subject.trim()) return;

    const newSession: StudySession = {
      id: Date.now().toString(),
      ...formData,
    };

    setSessions([...sessions, newSession]);
    setFormData({
      subject: "",
      day: "Monday",
      startTime: "09:00",
      duration: 60,
      notes: "",
    });
    setShowForm(false);
  };

  const deleteSession = (id: string) => {
    setSessions(sessions.filter((s) => s.id !== id));
  };

  const getSessionsForDay = (day: string) => {
    return sessions
      .filter((s) => s.day === day)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl mb-1">
            Weekly Study Planner
          </h2>
          <p className="text-gray-600">
            Organize your study schedule for the week
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Session
        </button>
      </div>

      {/* Add Session Form */}
      {showForm && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
          <h3 className="mb-4">New Study Session</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
                placeholder="e.g., Mathematics"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Day
              </label>
              <select
                value={formData.day}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    day: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Start Time
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    startTime: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    duration: parseInt(e.target.value) || 0,
                  })
                }
                min="15"
                step="15"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">
                Notes (optional)
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    notes: e.target.value,
                  })
                }
                placeholder="e.g., Chapter 5 review"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={addSession}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Session
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

      {/* Weekly Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DAYS.map((day) => {
          const daySessions = getSessionsForDay(day);
          return (
            <div
              key={day}
              className="border border-gray-200 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50"
            >
              <h3 className="mb-3 text-lg text-blue-600">
                {day}
              </h3>
              {daySessions.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  No sessions planned
                </p>
              ) : (
                <div className="space-y-2">
                  {daySessions.map((session) => (
                    <div
                      key={session.id}
                      className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-gray-800">
                          {session.subject}
                        </h4>
                        <button
                          onClick={() =>
                            deleteSession(session.id)
                          }
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {session.startTime} •{" "}
                          {session.duration} min
                        </span>
                      </div>
                      {session.notes && (
                        <p className="text-sm text-gray-500 mt-2">
                          {session.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {sessions.length === 0 && !showForm && (
        <div className="text-center py-12 text-gray-400">
          <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>
            No study sessions planned yet. Click "Add Session"
            to get started!
          </p>
        </div>
      )}
    </div>
  );
}