'use client';

import { ArrowLeft, AlertTriangle, Clock, Brain, Target, CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Study Skills Support
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Understanding the student time management crisis and how we're solving it
        </p>

        {/* Problem Overview Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 rounded-lg p-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl text-gray-800">Problem Overview</h2>
          </div>

          {/* What the Problem Is */}
          <div className="mb-8">
            <h3 className="text-xl text-blue-600 mb-3">What the Problem Is</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Students today face a crisis of <strong>ineffective time management and poor study habits</strong> that directly 
              impacts their academic success and mental health. This isn't just about forgetting a homework assignment here 
              and there—it's a systematic failure to organize, prioritize, and execute study plans that leads to chronic stress, 
              poor grades, and burnout.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The problem has three interconnected parts:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li><strong>Lack of organization:</strong> Students don't know what's due when, which subjects need more attention, or how to balance multiple deadlines</li>
              <li><strong>Ineffective study techniques:</strong> Hours spent "studying" without retention because they're using passive methods (re-reading notes, highlighting)</li>
              <li><strong>No feedback loop:</strong> Students repeat the same mistakes because they have no system to track what's working and what isn't</li>
            </ul>
          </div>

          {/* How It Shows Up in Real Life */}
          <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl text-blue-600 mb-3">How This Problem Shows Up in Real Life for Young People</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a student who's lived through this and watched countless peers struggle, here's what the problem actually looks like day-to-day:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <p className="text-gray-800 mb-2"><strong>Sunday Night Panic</strong></p>
                <p className="text-gray-600 text-sm">
                  It's 9 PM on Sunday. You suddenly remember there's a chemistry lab report due Monday that you haven't started. 
                  You spend 3 hours rushing through it, get to bed at midnight, and the quality shows. You swear you'll "get more 
                  organized next week"—but you don't have a system to actually do that.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="text-gray-800 mb-2"><strong>The Cramming Cycle</strong></p>
                <p className="text-gray-600 text-sm">
                  You have a history test on Friday. Monday through Thursday, you tell yourself you'll study "later." Thursday night, 
                  you cram for 4 hours trying to memorize two months of material. You pass with a C, forget everything by next week, 
                  and feel exhausted. When the cumulative final comes, you have to re-learn everything.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-gray-800 mb-2"><strong>The Distraction Trap</strong></p>
                <p className="text-gray-600 text-sm">
                  You sit down to study at 3 PM. Your phone buzzes—someone tagged you on Instagram. You check it, scroll for 
                  "just a minute," and it's 3:45 PM. You start studying, then remember you need to text your friend about the 
                  group project. Before you know it, it's 5 PM and you've done 20 minutes of actual work but feel mentally drained.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-gray-800 mb-2"><strong>The Overcommitment Collapse</strong></p>
                <p className="text-gray-600 text-sm">
                  You're taking 5 AP classes, playing on the soccer team, volunteering at the animal shelter, and applying to 
                  colleges. Everything feels urgent. You don't know which homework to do first. You end up paralyzed, scrolling 
                  TikTok because at least that feels manageable. Your grades slip, and teachers say you're "not living up to your potential."
                </p>
              </div>
            </div>
          </div>

          {/* Why It's Difficult to Solve */}
          <div className="mb-8">
            <h3 className="text-xl text-blue-600 mb-3">Why This Problem Is Difficult to Solve</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If time management were easy, every student would be organized and stress-free. Here's why it's actually really hard:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-800 mb-1">Time Constraints</h4>
                    <p className="text-sm text-gray-600">
                      Students already feel overwhelmed. Learning a new organizational system feels like "one more thing" on an 
                      impossible list. The irony: you need time to learn how to manage time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3 mb-2">
                  <Brain className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-800 mb-1">Skill Development</h4>
                    <p className="text-sm text-gray-600">
                      Time management is a <em>skill</em>, not knowledge. You can't just "learn" it from a YouTube video—you 
                      have to practice consistently for weeks before it becomes a habit. Most students give up after a few days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3 mb-2">
                  <Target className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-800 mb-1">No Immediate Reward</h4>
                    <p className="text-sm text-gray-600">
                      When you scroll TikTok, you get instant dopamine. When you organize your study schedule for next week, 
                      you get... nothing. The benefits show up weeks later. Teen brains are wired for immediate rewards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3 mb-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-800 mb-1">Information Overload</h4>
                    <p className="text-sm text-gray-600">
                      There are thousands of productivity tips online. "Try the Pomodoro Technique!" "Use the Eisenhower Matrix!" 
                      "Wake up at 5 AM!" Students don't know what actually works for <em>them</em>, so they try nothing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Technical & Resource Constraints:</strong> Many existing solutions require paid subscriptions ($5-15/month), 
                work only on specific devices (iOS but not Android), or have steep learning curves (like Notion). Low-income students 
                or those without smartphones get left behind. Schools don't have budget to provide organizational tools to every student.
              </p>
            </div>
          </div>

          {/* What Happens If Not Solved */}
          <div className="mb-8 bg-red-50 rounded-lg p-6 border border-red-200">
            <h3 className="text-xl text-red-600 mb-3">What Happens If This Problem Is Not Solved?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The consequences compound over time, affecting students far beyond just their grades:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-800">Academic Decline</h4>
                  <p className="text-sm text-gray-600">
                    Grades drop not because students aren't smart, but because they're disorganized. This affects college 
                    admissions, scholarship opportunities, and self-esteem. Students start to believe they're "just bad at school."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-800">Mental Health Crisis</h4>
                  <p className="text-sm text-gray-600">
                    Chronic stress from last-minute cramming leads to anxiety and depression. Students feel constantly behind, 
                    guilty when they relax, and burned out. According to the American Psychological Association, teen stress 
                    levels now exceed those of adults—largely due to academic pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-800">Lifelong Skill Gap</h4>
                  <p className="text-sm text-gray-600">
                    If you don't learn time management as a student, you won't magically develop it in college or your career. 
                    This leads to missed deadlines at work, poor work-life balance, and chronic procrastination that follows 
                    people for decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-800">Opportunity Loss</h4>
                  <p className="text-sm text-gray-600">
                    Students who are disorganized miss application deadlines for scholarships, internships, and programs. 
                    They can't participate in extracurriculars because homework takes all evening. The gap between organized 
                    and disorganized students widens into a gap in life opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Example */}
          <div className="mb-8 bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-xl text-purple-600 mb-3">A Personal Example: Taheera's Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4 italic">
              "I'm a junior at a Philadelphia public high school. Last semester, I was taking AP English, Honors Chemistry, 
              Algebra II, and Spanish III. I thought I had it under control."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Breaking Point:</strong> In October, I had three major assignments due in the same week: an AP English 
              essay (worth 20% of my grade), a Chemistry lab report, and a Spanish presentation. I knew about all of them—they'd 
              been on the syllabus since September—but I kept thinking "I'll start this weekend."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weekend came, and I hung out with friends. I told myself I'd do it Sunday night. Sunday night, I was exhausted and 
              spent 2 hours scrolling my phone to "relax." Monday morning, I woke up in a panic. I wrote the essay in my first two 
              periods (didn't even proofread), threw together the lab report at lunch, and completely bombed the Spanish presentation 
              because I didn't practice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Aftermath:</strong> I got a C- on the essay (my teacher wrote "you're capable of much better"), a D on 
              the lab report (calculations were rushed and wrong), and a B- on the presentation (only because I'm naturally good at 
              Spanish). My GPA dropped. I felt like a failure. Worst part? I knew it was coming and still couldn't stop it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>The Wake-Up Call:</strong> My coach Rob at LaunchPad Philly sat me down and asked, "Do you have a system?" 
              I didn't. He helped me realize that relying on memory and motivation wasn't working. I needed tools to track assignments, 
              break them into smaller tasks, and actually schedule study time. That's why we built this app—so other students don't 
              have to learn this lesson the hard way.
            </p>
          </div>

          {/* Existing Solutions Analysis */}
          <div className="mb-0">
            <h3 className="text-xl text-blue-600 mb-3">Existing Solutions: What Worked & What Didn't</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We researched what's already out there before building Study Skills Support. Here's what we found:
            </p>

            <div className="space-y-4">
              {/* Solution 1: Google Calendar / Apple Reminders */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-lg text-gray-800 mb-2">📅 Google Calendar / Apple Reminders</h4>
                <p className="text-gray-600 mb-3 text-sm">
                  Free calendar and reminder apps that come built-in to most devices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What Worked
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li>Free and accessible to everyone</li>
                      <li>Simple to use, low learning curve</li>
                      <li>Good for basic deadline tracking</li>
                      <li>Syncs across devices</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      What Didn't Work
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li><strong>No study-specific features:</strong> Can't track how much time you actually spend studying vs. scheduled</li>
                      <li><strong>No insights:</strong> Doesn't tell you if you're overloading certain days or procrastinating</li>
                      <li><strong>Too generic:</strong> Built for adults with meetings, not students with assignments and study sessions</li>
                      <li><strong>Passive tool:</strong> You can ignore reminders with no consequence tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution 2: Notion */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-lg text-gray-800 mb-2">📝 Notion / Notion-based Study Planners</h4>
                <p className="text-gray-600 mb-3 text-sm">
                  Highly customizable workspace with templates for student planning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What Worked
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li>Extremely flexible and customizable</li>
                      <li>Beautiful aesthetic templates</li>
                      <li>Can combine notes, tasks, and calendars in one place</li>
                      <li>Free for students</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      What Didn't Work
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li><strong>Overwhelming complexity:</strong> Takes hours to set up. Students get lost in customization instead of actually studying</li>
                      <li><strong>Steep learning curve:</strong> You need to learn databases, relations, formulas. Too technical for most teens</li>
                      <li><strong>No AI guidance:</strong> It's a blank canvas—doesn't tell you if your study plan is realistic or effective</li>
                      <li><strong>Easy to abandon:</strong> When you stop using it for a week, coming back feels impossible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution 3: Forest / Focus Apps */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-lg text-gray-800 mb-2">🌳 Forest / Focus Timer Apps</h4>
                <p className="text-gray-600 mb-3 text-sm">
                  Gamified apps that help you stay focused by "growing trees" during study sessions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What Worked
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li>Fun and engaging with gamification</li>
                      <li>Helps reduce phone distractions</li>
                      <li>Visual progress tracking (seeing your "forest" grow)</li>
                      <li>Pomodoro technique built-in</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      What Didn't Work
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li><strong>Only addresses focus, not organization:</strong> Doesn't help you decide what to study or when</li>
                      <li><strong>No assignment tracking:</strong> You still need a separate tool to know what's due</li>
                      <li><strong>Costs money:</strong> Forest premium is $3.99 (not much, but adds up if you're trying multiple apps)</li>
                      <li><strong>Motivation-dependent:</strong> Once the novelty wears off, students stop opening it</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution 4: School LMS (Canvas, Google Classroom) */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-lg text-gray-800 mb-2">🏫 School LMS (Canvas, Google Classroom, Schoology)</h4>
                <p className="text-gray-600 mb-3 text-sm">
                  Learning Management Systems provided by schools to post assignments and grades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What Worked
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li>All assignments are listed in one place</li>
                      <li>Teachers post everything there, so it's the "source of truth"</li>
                      <li>Free and required by school</li>
                      <li>Grade tracking built-in</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      What Didn't Work
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      <li><strong>Terrible user experience:</strong> Clunky, slow, hard to navigate. Students dread logging in</li>
                      <li><strong>No planning features:</strong> Shows you what's due, but doesn't help you schedule study time</li>
                      <li><strong>No study techniques:</strong> Just a repository, not a learning tool</li>
                      <li><strong>Depressing design:</strong> Seeing all your missing assignments in red is demotivating, not helpful</li>
                      <li><strong>Teacher-centric, not student-centric:</strong> Built for teachers to post content, not for students to succeed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h4 className="text-gray-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <span>What We Learned & How Study Skills Support Is Different</span>
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Every existing solution solves <em>part</em> of the problem, but forces students to use 4+ different apps 
                (calendar for deadlines, timer for focus, Notion for notes, Canvas for assignments). Context-switching between 
                apps wastes mental energy and makes it easy to abandon the system.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Our approach:</strong> Combine the best features into one simple, student-friendly app. Free. No setup complexity. 
                AI-powered insights that existing tools don't have. Designed BY students (with coaching support) FOR students. Focus 
                on what actually helps: planning, tracking, focusing, and getting smarter about your study habits over time.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl mb-4">Ready to Take Control of Your Study Habits?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join students who are transforming how they learn, one organized study session at a time.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}