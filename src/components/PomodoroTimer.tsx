'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Coffee, BookOpen } from 'lucide-react';

type TimerMode = 'focus' | 'break';

export function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<TimerMode>('focus');
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive && (minutes > 0 || seconds > 0)) {
      intervalRef.current = window.setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            handleTimerComplete();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, minutes, seconds]);

  const handleTimerComplete = () => {
    setIsActive(false);
    if (mode === 'focus') {
      setSessionsCompleted(sessionsCompleted + 1);
      // Switch to break
      setMode('break');
      setMinutes(breakDuration);
      setSeconds(0);
      // Play a notification sound (optional)
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Focus session complete!', {
          body: 'Great work! Time for a break.',
        });
      }
    } else {
      // Switch back to focus
      setMode('focus');
      setMinutes(focusDuration);
      setSeconds(0);
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Break complete!', {
          body: 'Ready to focus again?',
        });
      }
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
    // Request notification permission
    if (!isActive && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(mode === 'focus' ? focusDuration : breakDuration);
    setSeconds(0);
  };

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsActive(false);
    setMinutes(newMode === 'focus' ? focusDuration : breakDuration);
    setSeconds(0);
  };

  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = mode === 'focus'
    ? ((focusDuration * 60 - (minutes * 60 + seconds)) / (focusDuration * 60)) * 100
    : ((breakDuration * 60 - (minutes * 60 + seconds)) / (breakDuration * 60)) * 100;

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl mb-1">Focus Timer</h2>
        <p className="text-gray-600">Use the Pomodoro Technique to boost productivity</p>
      </div>

      {/* Timer Display */}
      <div className="max-w-md mx-auto">
        {/* Mode Selector */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => switchMode('focus')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              mode === 'focus'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Focus
          </button>
          <button
            onClick={() => switchMode('break')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              mode === 'break'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Coffee className="w-5 h-5" />
            Break
          </button>
        </div>

        {/* Timer Circle */}
        <div className="relative mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={mode === 'focus' ? '#2563eb' : '#16a34a'}
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`text-6xl mb-2 ${mode === 'focus' ? 'text-blue-600' : 'text-green-600'}`}>
              {formatTime(minutes, seconds)}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              {mode === 'focus' ? 'Focus Time' : 'Break Time'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            onClick={toggleTimer}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-lg ${
              mode === 'focus'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-5 h-5" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Start
              </>
            )}
          </button>
          <button
            onClick={resetTimer}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        {/* Settings */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-sm text-gray-700 mb-3">Timer Settings</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Focus Duration (min)</label>
              <input
                type="number"
                value={focusDuration}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  setFocusDuration(val);
                  if (mode === 'focus' && !isActive) {
                    setMinutes(val);
                    setSeconds(0);
                  }
                }}
                min="1"
                max="60"
                disabled={isActive}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Break Duration (min)</label>
              <input
                type="number"
                value={breakDuration}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  setBreakDuration(val);
                  if (mode === 'break' && !isActive) {
                    setMinutes(val);
                    setSeconds(0);
                  }
                }}
                min="1"
                max="30"
                disabled={isActive}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
          <div className="text-center">
            <div className="text-3xl text-blue-600 mb-1">{sessionsCompleted}</div>
            <div className="text-sm text-gray-600">Sessions Completed Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}