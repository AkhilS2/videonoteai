Formulated with ChatGPT  
---

## **🧭 High-Level Goals for VidNote AI**

*A web platform that generates structured notes from YouTube videos using natural language processing.*

1. **Deliver an MVP that extracts transcripts from a given YouTube link and returns concise bullet-point summaries.**

2. **Create a user-friendly web interface that accepts YouTube links and displays generated notes.**

3. **Optimize the summarization pipeline to produce relevant, timestamped summaries.**

4. **Add user-facing features like login, saving summaries, and sharing notes.**

5. **Deploy the application and demonstrate full-stack proficiency (frontend/backend/NLP).**

---

## **👤 User Stories**

These are short, realistic descriptions of how users interact with your platform.

| Role | Story |
| ----- | ----- |
| Visitor | As a user, I want to paste a YouTube video link and receive a summary so I can review the content faster. |
| Student | As a student, I want timestamped bullet notes from lecture videos so I can use them to study later. |
| Learner | As a learner, I want to choose between a short or detailed summary so I can get the level of depth I need. |
| Logged-In User | As a logged-in user, I want to save my past summaries and revisit them later. |
| Content Sharer | As a user, I want to share summaries with friends via a link. |
| Admin | As an admin, I want to view usage logs and summary failures to improve reliability. |

---

## **🚀 Release Plan**

This roadmap simulates progressive development and realistic deliverables for each phase.

### **🔹 Version 0.1.0 – Internal Alpha (Local Only)**

* Command-line interface (CLI) tool

* Accepts YouTube URL and prints a summary to the console

* Uses `yt-dlp` to fetch transcript

* Basic TF-IDF extractive summarization

✅ Goal: Validate transcript handling and summarization logic

---

### **🔹 Version 0.2.0 – MVP Web App**

* Flask or FastAPI backend

* Basic web frontend (HTML/React) with input field for YouTube link

* Summary display with simple formatting

* Error handling (invalid link, missing captions, etc.)

✅ Goal: Deployable single-user version of the platform

---

### **🔹 Version 1.0.0 – Public Beta**

* User login (email/Google OAuth)

* Save and view past summaries

* Polished UI (responsive, mobile-friendly)

* REST API endpoints

* Summary cache or DB storage (e.g., SQLite, Firebase)

✅ Goal: Launch stable version usable by early adopters

---

### **🔹 Version 1.1.0 – Smart Features**

* Summary length toggle (brief vs detailed)

* Timestamped notes linking back to video segments

* Real-time progress indicator during processing

* More advanced models (TextRank, BERTSummarizer)

✅ Goal: Improve user control and relevance of summaries

---

### **🔹 Version 2.0.0 – Community \+ Scale**

* Shareable summaries via public link

* User history dashboard

* Analytics dashboard for engagement

* Dockerized deployment

* Optional: Add queueing for long video jobs

✅ Goal: Enable growth, sharing, and reliability

Perfect — thanks for the stack clarification (Next.js/React frontend and Django backend). Below is a **3-sprint plan** for your **VidNote AI** project, tailored for a realistic weekly development cycle.

Each sprint focuses on converting user stories into actionable, granular engineering tasks across both frontend and backend. You’ll get realistic exposure to workflows such as planning, breaking down tasks, and building feature slices.

---

## **🗓️ Sprint 1: Transcript Fetch \+ Summarization CLI (Backend MVP)**

### **🎯 Sprint Goal**

Lay the groundwork for core functionality: fetch a transcript from a YouTube link and produce a summary using an extractive NLP approach. This is backend-only.

### **✅ User Story**

As a user, I want to paste a YouTube video link and receive a summary so I can review the content faster.

---

### **📌 Tasks**

#### **🧱 Backend – Django App Setup**

* Create Django project and app (`summarizer`)

* Add `/summarize/` API endpoint (POST with JSON body)

* Set up environment config (dotenv, local settings, etc.)

#### **🧠 NLP Pipeline**

* Research best way to fetch transcripts (use `yt-dlp` or YouTube Transcript API)

* Implement `get_transcript(video_id)` function

* Clean transcript text (remove timestamps, speaker labels if any)

* Implement `summarize_transcript(text)` with TF-IDF/NLTK

* Add exception handling for edge cases (missing subtitles, invalid links)

#### **🧪 Testing & Docs**

* Write unit tests for `get_transcript` and `summarize_transcript`

* Create Postman collection for API endpoint testing

* Document the endpoint in `docs/summary_api.md`

---

## **🗓️ Sprint 2: Frontend Integration \+ Web UI**

### **🎯 Sprint Goal**

Build a minimal web interface using Next.js that connects to the backend and displays summary results.

### **✅ User Story**

As a user, I want to use a web interface to input a YouTube link and view the generated notes.

---

### **📌 Tasks**

#### **🧱 Frontend – Next.js Setup**

* Create project structure with `pages`, `components`, `utils`

* Build form component with input field for YouTube URL

* Create fetch utility to POST to Django backend

#### **🎨 UI & Display**

* Build `SummaryResult` component to display summary lines

* Add loading indicator and error messages

* Style with CSS Modules or Tailwind (if used)

#### **🔌 API Integration**

* Deploy Django backend on localhost or Vercel-compatible server

* Test POST request from frontend to backend `/summarize/`

* Handle response and map summary to UI

#### **🧪 Testing**

* Manual test with at least 3 real YouTube links

* Write checklist to verify UI behavior and edge case handling

---

## **🗓️ Sprint 3: User Accounts \+ Summary Saving (Auth \+ Persistence)**

### **🎯 Sprint Goal**

Introduce login via email or Google and allow users to view/save their summary history.

### **✅ User Stories**

As a logged-in user, I want to save my past summaries and revisit them later.  
 As a user, I want to log in via Google so I can securely access my data.

---

### **📌 Tasks**

#### **🔐 Authentication**

* Set up Django backend with `django-allauth` for Google OAuth

* Create `/auth/login/` and `/auth/logout/` endpoints

* Store user profiles in `auth_user` or custom user model

#### **🧱 Backend – Persistence**

* Create `Summary` model with fields: `user`, `video_title`, `video_url`, `summary`, `created_at`

* Update `/summarize/` endpoint to associate summaries with logged-in user

* Add `/summaries/` endpoint to return summary history for current user

#### **🧱 Frontend – Auth Integration**

* Set up Google login button with `next-auth` or Firebase Auth (Next.js-compatible)

* Store login state in context or cookies

* Create dashboard page: `/dashboard` that fetches saved summaries

* Display summary cards with date and video title

#### **🧪 Testing**

* Manual test: log in, summarize a video, verify it appears in dashboard

* Write unit tests for backend summary storage

* Update README with auth setup instructions

---

## **📋 Bonus: How to Simulate Real Sprints**

* Add each task to GitHub Projects or a Notion Kanban board.

* Write daily updates in a “\#standup” Notion page or Slack journal.

* Review sprint progress on Friday with a personal “retrospective” doc:

  * What was completed

  * What got delayed and why

  * What to improve

---

