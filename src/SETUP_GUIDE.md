# Setup Guide: Moving to Visual Studio Code

This guide walks you through setting up the Study Skills Support App on your local machine and completing the project.

---

## 📋 Prerequisites (Install These First)

### 1. **Node.js and npm**
- **What it is**: JavaScript runtime that lets you run the app
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Version needed**: Node.js 18 or higher (required for Next.js 14)
- **Check if installed**: Open terminal/command prompt and run:
  ```bash
  node --version
  npm --version
  ```
  You should see version numbers like `v18.x.x` or higher

### 2. **Visual Studio Code**
- **Download**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Recommended Extensions** (install from VS Code Extensions marketplace):
  - **ES7+ React/Redux/React-Native snippets** - Code shortcuts
  - **Prettier - Code formatter** - Auto-format your code
  - **ESLint** - Catch errors as you type
  - **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
  - **Error Lens** - See errors inline
  - **Auto Rename Tag** - Automatically rename paired HTML/JSX tags

### 3. **Git** (Optional but Recommended)
- **What it is**: Version control to track changes and push to GitHub
- **Download**: [https://git-scm.com/](https://git-scm.com/)
- **Check if installed**:
  ```bash
  git --version
  ```

---

## 🚀 Initial Setup Steps

### Step 1: Open Project in VS Code

1. **Download/Copy the project files** to a folder on your computer (e.g., `C:\Projects\study-skills-app` or `~/Projects/study-skills-app`)

2. **Open VS Code**

3. **File → Open Folder** and select your project folder

4. **Open the integrated terminal** in VS Code:
   - Menu: `Terminal → New Terminal`
   - Keyboard shortcut: `` Ctrl+` `` (Windows/Linux) or `` Cmd+` `` (Mac)

### Step 2: Install Dependencies

In the VS Code terminal, run:

```bash
npm install
```

**What this does**: Downloads all the libraries the app needs (React, TypeScript, Tailwind CSS, Lucide icons, etc.)

**Time**: Takes 2-5 minutes depending on internet speed

**Expected output**: You'll see a progress bar and eventually a message like:
```
added 234 packages in 2m
```

**Common issues**:
- ❌ `npm: command not found` → You need to install Node.js (see Prerequisites)
- ❌ `EACCES: permission denied` → Run `sudo npm install` (Mac/Linux) or run terminal as Administrator (Windows)

### Step 3: Start the Development Server

```bash
npm run dev
```

**What this does**: Starts a local web server so you can see the app in your browser

**Expected output**:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

**Open in browser**: Go to `http://localhost:3000`

**You should see**: The landing page with "Study Skills Support" and the hero section

### Step 4: Test the App

1. **Test Landing Page Navigation**:
   - Click "About" → Should show the problem overview page
   - Click "Back to Home" → Returns to landing
   - Click "Get Started" → Should show signup page

2. **Test Demo Accounts** (click "Log In" from landing page):
   - **Student**: taheera@launchpadphilly.org / lpuser3
   - **Coach**: rob@launchpadphilly.org / lpuser1
   - **Instructor**: sanaa@launchpadphilly.org / lpuser2

3. **Test Each Feature**:
   - ✅ Study Planner - Add a study session
   - ✅ Assignment Tracker - Create an assignment
   - ✅ Focus Timer - Start a Pomodoro session
   - ✅ AI Insights - Click "Generate New Insights"
   - ✅ Study Tips - Search for a tip
   - ✅ Rubric Evidence (coaches/instructors only) - Add evidence

**If everything works**: ✅ Your setup is complete!

---

## 📁 Project File Structure Check

Make sure you have all these files in VS Code:

```
study-skills-support-app/
├── app/                        # ✅ Next.js App Router
│   ├── page.tsx                # ✅ Landing/home page
│   ├── about/page.tsx          # ✅ About page
│   ├── login/page.tsx          # ✅ Login page
│   ├── signup/page.tsx         # ✅ Signup page
│   ├── dashboard/page.tsx      # ✅ Main dashboard
│   └── layout.tsx              # ✅ Root layout
├── components/                 # ✅ React components
│   ├── About.tsx               # ✅ Problem overview content
│   ├── LandingPage.tsx         # ✅ Home page content
│   ├── Login.tsx               # ✅ Login form
│   ├── Signup.tsx              # ✅ Registration form
│   ├── StudyPlanner.tsx        # ✅ Weekly planner
│   ├── AssignmentTracker.tsx   # ✅ Assignment management
│   ├── PomodoroTimer.tsx       # ✅ Focus timer
│   ├── StudyTips.tsx           # ✅ Tips library
│   ├── AIInsights.tsx          # ✅ AI recommendations
│   ├── RubricEvidence.tsx      # ✅ Evidence tracker
│   └── DemoAccountsInitializer.tsx # ✅ Demo setup
├── context/
│   └── AuthContext.tsx         # ✅ Authentication state
├── types/
│   └── auth.ts                 # ✅ TypeScript types
├── styles/
│   └── globals.css             # ✅ Global styles
├── public/                     # ✅ Static assets
├── package.json                # ✅ Dependencies list
├── tsconfig.json               # ✅ TypeScript config
├── next.config.js              # ✅ Next.js configuration
├── tailwind.config.ts          # ✅ Tailwind config
├── .gitignore                  # ✅ Git ignore rules
├── README.md                   # ✅ Project documentation
├── NEON_INTEGRATION_GUIDE.md   # ✅ Database setup guide
├── TRELLO_PROJECT_PLAN.md      # ✅ Project plan
├── SETUP_GUIDE.md              # ✅ This file
├── NEXTJS_CONVERSION_COMPLETE.md # ✅ Conversion notes
└── ERRORS_FIXED.md             # ✅ Error fixes
```

**Missing files?** Re-copy them from the source.

---

## 🛠️ Development Workflow

### Making Changes to the App

1. **Edit files in VS Code**:
   - All components are in `/components/`
   - Styles are in `/styles/globals.css`
   - Page routes are in `/app/`

2. **See changes instantly**:
   - Save the file (Ctrl+S or Cmd+S)
   - Next.js auto-refreshes the browser (Fast Refresh)
   - No need to restart the server

3. **Check for errors**:
   - Terminal shows build errors
   - Browser console shows runtime errors (F12 → Console tab)
   - VS Code shows TypeScript errors with red squiggles

### Useful VS Code Shortcuts

- **Ctrl/Cmd + P**: Quick file search
- **Ctrl/Cmd + Shift + F**: Search across all files
- **Ctrl/Cmd + /**: Comment/uncomment code
- **Alt + Up/Down**: Move line up/down
- **Shift + Alt + Down**: Duplicate line
- **F2**: Rename variable everywhere

### Testing in Different Browsers

Test in multiple browsers to ensure compatibility:
- ✅ Chrome (primary)
- ✅ Firefox
- ✅ Safari (Mac only)
- ✅ Edge

---

## 🎨 Customization Ideas

### Change the Color Scheme

Edit `/styles/globals.css`:

```css
/* Current colors */
--color-primary: #2563eb; /* Blue */
--color-secondary: #7c3aed; /* Purple */

/* Change to different colors */
--color-primary: #10b981; /* Green */
--color-secondary: #f59e0b; /* Orange */
```

### Add Your School Logo

1. Add logo image to `/public/` folder (e.g., `logo.png`)
2. Edit `/components/LandingPage.tsx`:
   ```tsx
   <img src="/logo.png" alt="School Logo" className="w-10 h-10" />
   ```

### Customize Demo Accounts

Edit `/context/AuthContext.tsx` around line 10-30 to change demo account credentials.

---

## 🗄️ Database Integration (Next Steps)

Currently, the app uses **localStorage** (browser storage). To make it production-ready with a real database:

### Option 1: Neon PostgreSQL (Recommended)

Follow the detailed guide in **`NEON_INTEGRATION_GUIDE.md`**

**What you'll do**:
1. Create free Neon account at [neon.tech](https://neon.tech)
2. Create a database
3. Set up tables (users, assignments, study_sessions, etc.)
4. Create a backend API (Node.js + Express)
5. Replace localStorage calls with API fetch calls
6. Deploy backend and frontend separately

**Time estimate**: 4-8 hours for full integration

### Option 2: Supabase (Alternative)

1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Use Supabase's built-in authentication
4. Create tables in the Supabase dashboard
5. Use Supabase client library in your code
6. Deploy to Vercel

**Time estimate**: 3-6 hours

### Option 3: Firebase (Google)

1. Create Firebase project
2. Enable Firestore database
3. Enable Firebase Authentication
4. Install Firebase SDK: `npm install firebase`
5. Replace localStorage with Firestore calls

---

## 🚢 Deployment (Making It Live)

### Option 1: Vercel (Easiest, Recommended)

**Perfect for**: React/Vite apps, free tier available

1. **Create account**: [vercel.com](https://vercel.com)
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   vercel
   ```
4. **Follow prompts** (use default settings)
5. **Get live URL**: `https://study-skills-app.vercel.app`

**Time**: 5 minutes

### Option 2: Netlify

1. **Create account**: [netlify.com](https://netlify.com)
2. **Drag and drop** the `dist` folder (after running `npm run build`)
3. **Or connect GitHub** for auto-deploy on push

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Before Deploying Checklist

- [ ] Test all features work locally
- [ ] Test on mobile (responsive design)
- [ ] Test in different browsers
- [ ] Remove console.log statements
- [ ] Check for TypeScript errors: `npm run build`
- [ ] Update README with live URL
- [ ] Add custom domain (optional)

---

## 🐛 Common Issues & Solutions

### Issue: Port 3000 Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Find and kill the process
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
# Or use the kill-port package:
npx kill-port 3000
```

### Issue: Changes Not Showing

**Solutions**:
1. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: TypeScript Errors

**Error**: `Cannot find module 'lucide-react'` or similar

**Solution**:
```bash
npm install lucide-react
```

### Issue: Styles Not Loading

**Check**:
1. Is `/styles/globals.css` imported in `/app/layout.tsx`?
2. Run `npm install tailwindcss` if missing

### Issue: localStorage Data Persists After Logout

**Solution**: Open browser DevTools (F12) → Application tab → Local Storage → Delete all items

---

## 📝 Next Steps & Project Completion Checklist

### Minimum Viable Product (MVP) ✅ Already Done

- [x] Landing page with value proposition
- [x] About page with problem overview
- [x] Authentication (login/signup)
- [x] Role-based access control
- [x] Study planner feature
- [x] Assignment tracker feature
- [x] Pomodoro timer feature
- [x] Study tips library
- [x] AI insights feature
- [x] Rubric evidence tracker (coaches/instructors)
- [x] Responsive design
- [x] README documentation

### Recommended Enhancements (Choose Based on Time)

**Week 1-2: Polish & Testing**
- [ ] Ask 5 students to test and give feedback
- [ ] Fix any bugs they find
- [ ] Add loading spinners for better UX
- [ ] Improve mobile responsiveness
- [ ] Add keyboard shortcuts (e.g., "Space" to start timer)

**Week 3-4: Backend Integration**
- [ ] Set up Neon database
- [ ] Build backend API (see NEON_INTEGRATION_GUIDE.md)
- [ ] Migrate from localStorage to database
- [ ] Test with multiple users simultaneously
- [ ] Add password hashing (bcrypt)

**Week 5-6: Advanced Features**
- [ ] Email notifications for assignment reminders
- [ ] Export study schedule to PDF
- [ ] Dark mode toggle
- [ ] Calendar integration (Google Calendar, iCal)
- [ ] Progress charts with Recharts library

**Week 7-8: Deployment & Marketing**
- [ ] Deploy to production (Vercel/Netlify)
- [ ] Set up custom domain (optional, ~$12/year)
- [ ] Create demo video (2-3 minutes)
- [ ] Write blog post about building it
- [ ] Share on Twitter/LinkedIn

### For CCC Portfolio Submission

Make sure you have:
- [x] **README.md** with problem, solution, tech stack, reflection
- [x] **About page** with CCC.1.1 problem overview
- [ ] **Demo video** (2-5 minutes showing all features)
- [ ] **Live deployed link** (Vercel/Netlify URL)
- [ ] **GitHub repository** (public, with all code)
- [ ] **Screenshots** for portfolio/presentation

---

## 📎 Learning Resources

### If You Want to Understand the Code Better

**React**:
- [React Official Docs](https://react.dev/learn) - Start here
- [React Hooks Explained](https://react.dev/reference/react) - useState, useEffect

**TypeScript**:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

**Tailwind CSS**:
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/components) - Inspiration

**Vite**:
- [Vite Guide](https://vitejs.dev/guide/) - Build tool documentation

### If You Want to Add Features

**Database Integration**:
- [Neon Docs](https://neon.tech/docs) - PostgreSQL setup
- [Prisma ORM](https://www.prisma.io/docs) - Database toolkit
- [Node.js + Express Tutorial](https://expressjs.com/en/starter/installing.html)

**Authentication**:
- [JWT Authentication Guide](https://jwt.io/introduction)
- [Supabase Auth](https://supabase.com/docs/guides/auth) - Drop-in solution

**AI Integration** (Real AI, not rule-based):
- [OpenAI API Docs](https://platform.openai.com/docs/introduction) - GPT integration
- [Anthropic Claude API](https://docs.anthropic.com/) - Alternative AI

---

## 🆘 Getting Help

### When You Get Stuck

1. **Check the browser console**: F12 → Console tab (shows errors)
2. **Check the terminal**: Shows build/compile errors
3. **Read the error message carefully**: Usually tells you what's wrong
4. **Google the error**: Copy/paste into Google with "React" or "Vite"
5. **Ask AI**: ChatGPT, Claude, or GitHub Copilot can explain code

### Useful Communities

- **Stack Overflow**: [stackoverflow.com](https://stackoverflow.com/questions/tagged/reactjs)
- **React Discord**: [discord.gg/react](https://discord.gg/react)
- **Reddit r/reactjs**: [reddit.com/r/reactjs](https://www.reddit.com/r/reactjs/)
- **Dev.to**: [dev.to/t/react](https://dev.to/t/react)

---

## 📊 Project Timeline Estimate

**If working 5-10 hours per week**:

| Week | Tasks | Status |
|------|-------|--------|
| 0 | Initial development (you're here!) | ✅ Done |
| 1 | Setup in VS Code, test locally, gather feedback | 🎯 Start Here |
| 2 | Fix bugs, improve UX based on feedback | ⏳ Next |
| 3-4 | Database integration (Neon setup) | ⏳ Future |
| 5-6 | Backend API development | ⏳ Future |
| 7 | Deployment & testing | ⏳ Future |
| 8 | Documentation, demo video, portfolio | ⏳ Future |

**Total time**: 40-80 hours for production-ready app

---

## ✅ Quick Start Checklist

Use this as your day-one checklist:

- [ ] Install Node.js (v18+)
- [ ] Install VS Code
- [ ] Install recommended VS Code extensions
- [ ] Copy project files to a folder
- [ ] Open folder in VS Code
- [ ] Open terminal in VS Code
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000` in browser
- [ ] Test all features with demo accounts
- [ ] Read ERRORS_FIXED.md for troubleshooting
- [ ] Read NEON_INTEGRATION_GUIDE.md for next steps
- [ ] Create GitHub repository
- [ ] Make first commit: `git init`, `git add .`, `git commit -m "Initial commit"`

---

## 🎉 You're Ready!

You now have everything you need to complete the Study Skills Support App project. Start with the Quick Start Checklist above, then work through the recommended enhancements based on your goals and timeline.

**Questions?** Review the documentation files:
- **README.md** - Project overview and features
- **NEON_INTEGRATION_GUIDE.md** - Database setup
- **TRELLO_PROJECT_PLAN.md** - Project management
- **SETUP_GUIDE.md** - This file

Good luck with your project! 🚀📚